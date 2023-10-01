<template>
    <header class="bbc">
        <div class="logo-wrapper">
            <img class="logo" src="@/assets/icon/logo.png" @click="router.push('/')">
            <Baloon/>
            <div class="city-selection" @click="showCity">
                {{ conditionStore.city }}
                <fa icon="angle-down"/>
            </div>
        </div>

        <div class="function-wrapper">
            <HeaderItem v-for="item in functions" :key="item.title" :item="item"  @on-click="getModalBoxTitle"/>
        </div>
    </header>

    <ModalBox :title="modalBoxTitle? modalBoxTitle: '都道府県の選択'" v-show="isModalShow" @on-close="onClose">
        <city v-if="isCitySelection"></city>
        <SearchList v-else-if="isQuickSearchSelection" v-for="history in searchHistories" :item="history"></SearchList>
        <DPList v-else-if="isSearchHistorySelection" v-for="history in dpHistories" :item="history"></DPList>
        <DPList v-else-if="isFavSelection" v-for="favorate in favorates" :item="favorate"></DPList>
        <Query v-else-if="isQuerySelection"></Query>
    </ModalBox>
</template>

<script setup>
    import HeaderItem from './HeaderItem.vue'
    import Baloon from './Baloon.vue';
    import City from "./City.vue";
    import ModalBox from '@/components/functional/ModalBox.vue';
    import DPList from './DPList.vue'
    import SearchList from './SearchList.vue'
	import Query from './Query.vue';

    import { ref, inject, toRefs } from 'vue'
	
    import {useRouter, useRoute} from 'vue-router'
    const router = useRouter()
	const route = useRoute()
    
    import { useConditionStore } from '@/stores/condition.js';
	const conditionStore = useConditionStore()

    import { useModalStore } from '@/stores/modal.js'
    const modalStore = useModalStore()
    const { isModalShow, isCitySelection, isQuickSearchSelection, isSearchHistorySelection, isFavSelection, isQuerySelection, } = toRefs(modalStore)

	import { useHouseStore } from '@/stores/house.js'
    const houseStore = useHouseStore()
    const { dpHistories, favorates } = toRefs(houseStore)

    import { useHeader } from '@/composition/userInfo.js'
	const apiURL = inject("apiURL")
    const headers = useHeader()

    const showCity = () => {
		// 如果在搜索页，则跳转路由。 如果不是，则只改变city的值
        modalBoxTitle.value = "都道府県の選択"
        isModalShow.value = true
        isCitySelection.value = true
		if (route.path.startsWith("/search")) {
			modalStore.showCitySelection(true)
		} else {
			modalStore.showCitySelection()
		}
    }

    const modalBoxTitle = ref("")
    const getModalBoxTitle = (title) => {
        modalBoxTitle.value = title
        isModalShow.value = true
    }

    const onClose = (title) => {
        modalBoxTitle.value = title
    }

	// get search History
	// const getSearchHistory = () => {
    //     searchHistories.value = []
    // }
	// const getSearchHistories = () => {
    //     houseStore.getSearchHistories()
    // }

	const getUserHistory = () => {
		const url = apiURL.getUser
		const params = {}
        houseStore.getHouseList(url, params, headers, 1)
    }

    // headers button definition
    const functions = [
        // {
        //     title: '検索履歴',
        //     icon: 'magnifying-glass',
        //     func: modalStore.showQuickSearchSelection,
        // },
        {
            title: '閲覧履歴',
            icon: 'clock-rotate-left',
            func: () => {isSearchHistorySelection.value = true},
        },
        {
            title: 'お気に入り',
            icon: 'star',
            func: () => {isFavSelection.value = true},
        },
        {
            title: 'お問い合わせ',
            icon: 'envelope',
            func: () => {isQuerySelection.value = true},
        },
    ]
</script>

<style scoped lang="less">
    header {
        width: 100%;
        height: 7rem;
        padding: 10px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;

        .logo-wrapper {
            width: 20rem;
            margin-left: 100px;
            position: relative;
            cursor: pointer;

            .logo {
                width: 20rem;
                display: flex;
                justify-content: center;
                align-items: center;  
                z-index: 10;  
                position: relative;
            }

            .city-selection {
                position: absolute;
                right: 0;
                bottom: 0;
                transform: translate(100%, -60%);
                color: #6c4ed7;
                transition: .1s;
                border-bottom: 1px solid #2e178100;

                &:hover {
                    color: #2e1781;
                    border-bottom: 1px solid #2e1781;
                }
            }
        }
        
        .function-wrapper {
            margin-right: 100px;
            display: flex;
        }
    }

    @media screen and (max-width:1135px) {
        header {
            .logo-wrapper {
                margin-left: 50px;
            }
            .function-wrapper {
                margin-right: 0px;

            }
        }
        
    }

    @media screen and (max-width:991.98px) {
        header {
            height: 10rem;
            margin-top: 20px;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            .logo-wrapper {
                margin-left: -150px;
            }
        }
    }

    @media screen and (max-width:700px) {
        header {
            .logo-wrapper {
                width: 16rem;

                .logo {
                    width: 16rem;
                }

                .city-selection {
                    font-size: 13px;
                    transform: translate(110%, -30%);
                }
            }
        }
    }

    @media screen and (max-width:390px) {
        header {
            .logo-wrapper {
                margin-left: -120px;
            }
        }
    }
</style>
