<template>
    <header class="bbc">
        <div class="logo-wrapper-outter">
            <div class="logo-wrapper">
                <img class="logo" src="@/assets/icon/logo.png" @click="router.push('/')">
                <Baloon/>
            </div>
            <HeaderItem id="area-selection" class="area-selection abc" :item="citySelectionFunc" @click="showCity">
                <span class="fc abc" style="font-weight: bold;">{{ conditionStore.city }}</span>
                <div class="area-list" v-if="isCitySelection">
                    <ul class="city-list">
                        <li class="city fc" v-for="city in cities" @click="setCity($event, city)">
                            {{ city.title }}
                        </li>
                    </ul>
                </div>
            </HeaderItem>
        </div>
        
        <div class="function-wrapper">
            <HeaderItem v-for="item in functions" :key="item.title" :item="item"  @on-click="getModalBoxTitle"/>
        </div>
    </header>

    <ModalBox :title="modalBoxTitle? modalBoxTitle: '都道府県の選択'" v-show="isModalShow" @on-close="onClose">
        <SearchList v-if="isQuickSearchSelection" v-for="history in searchHistories" :item="history"></SearchList>
        <DPList v-else-if="isSearchHistorySelection" v-for="history in dpHistories" :item="history"></DPList>
        <DPList v-else-if="isFavSelection" v-for="favorate in favorates" :item="favorate"></DPList>
        <Query v-else-if="isQuerySelection"></Query>
    </ModalBox>
</template>

<script setup>
    import HeaderItem from './HeaderItem.vue'
    import Baloon from './Baloon.vue';
    import ModalBox from '@/components/functional/ModalBox.vue';
    import DPList from './DPList.vue'
    import SearchList from './SearchList.vue'
	import Query from './Query.vue';

    import { ref, toRefs, onMounted, onBeforeUnmount } from 'vue'
	
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

    // city click event
    const areaSelection = ref()
    const showCityList = ($event) => {
        const includedString = "abc"
        console.log($event.target.className)
        if ($event.target.className.indexOf(includedString) === -1) {
            modalStore.isCitySelection = false
        }
    }

    onMounted(() => {
        window.addEventListener("click", showCityList)
    })

    onBeforeUnmount(() => {
        window.removeEventListener("click", showCityList)
    })

    const setCity = ($event, city) => {
        conditionStore.city = city.title
        conditionStore.cityIndex = city.index
        conditionStore.isCitySet = true
        if (route.path.startsWith("/search")) {
            modalStore.isGoNext = true
        }
        if (modalStore.isGoNext) {
            router.push(`/search/${city.index}/${conditionStore.mode}/${conditionStore.type}/${conditionStore.new_}`)
        }
    }
    
    const showCity = () => {
        isCitySelection.value = !isCitySelection.value
    }

    const modalBoxTitle = ref("")
    const getModalBoxTitle = (title) => {
        modalBoxTitle.value = title
        isModalShow.value = true
    }

    const onClose = (title) => {
        modalBoxTitle.value = title
    }
    const functions = [
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

    // city select function
    const cities = [
        {
            title: "東京",
            index: 1,
            func: () => {}
        },
        {
            title: "神奈川",
            index: 2,
            func: () => {}
        },
        {
            title: "千葉",
            index: 3,
            func: () => {}
        },
        {
            title: "埼玉",
            index: 4,
            func: () => {}
        },
    ]

    const citySelectionFunc = {
            title: 'エリアの変換',
            icon: 'location-dot',
            func: () => {},
        }
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

        .logo-wrapper-outter {
            display: flex;
            flex-direction: row;
            align-items: center;
            .area-selection {
                margin-left: 20px;
                position: relative;

                .area-list {
                    width: 126px;
                    height: 150px;
                    border-radius: 5px;
                    background-color: #fff;
                    box-shadow: 0 0 5px #666;
                    position: absolute;
                    left: 0;
                    top: 50px;
                    z-index: 10000000;

                    .city-list {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;

                        .city {
                            width: 100%;
                            flex: 1;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-weight: bold;
                            transition: .1s;
                            text-decoration: none;

                            &:hover {
                                background-color: rgb(31,78,121);
                                border-radius: 10px;
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }

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
