<template>
    <header class="bbc">
        <div class="logo-wrapper">
            <div class="logo" @click="jump2Home"></div>
            <Baloon/>
            <div class="city-selection" @click="showCitySelection">
                {{ conditionStore.city }}
                <fa icon="angle-down"/>
            </div>
        </div>

        <div class="function-wrapper">
            <HeaderItem v-for="item in functions" :key="item.title" :item="item"/>
        </div>
    </header>

    <ModalBox :title="'検索履歴'" v-show="modalStore.isQuickSearchSelection">
        <SearchList v-for="history in searchHistories" :item="history"></SearchList>
    </ModalBox>

    <ModalBox :title="'閲覧履歴'" v-show="modalStore.isSearchHistorySelection">
        <DPList v-for="history in dpHistories" :item="history"></DPList>
    </ModalBox>

    <ModalBox :title="'お気に入り'" v-show="modalStore.isFavSelection">
        <DPList v-for="favorate in favorates" :item="favorate"></DPList>
    </ModalBox>
</template>

<script setup>
    import HeaderItem from './HeaderItem.vue'
    import Baloon from './Baloon.vue';
    import ModalBox from '@/components/functional/ModalBox.vue';
    import DPList from './DPList.vue'
    import SearchList from './SearchList.vue'

    import { ref } from 'vue'
    import {useRouter} from 'vue-router'

    const router = useRouter()

    import { useModalStore } from '@/stores/modal.js'
    import { useConditionStore } from '@/stores/condition.js';

    // modal store
    const modalStore = useModalStore()

    const showCitySelection = () => {
        modalStore.showCitySelection()
    }

	// get search History
	const getSearchHistory = () => {
        searchHistories.value = []
    }

    const searchHistories = ref([
	    {
			city: "東京",
			mode: "sell",
			type: "mansion",
			new_: "y",
			fc: "千代田区",
			price: "",
			area: "",
			station_time: "",
			layout: "",
			other: "",
		},
    ])

    // get DP history
    const getDPHistory = () => {
        dpHistories.value = []
    }

    const dpHistories = ref([
	    {
			main_pic_path: "/imgs/img_thumbnail (1).jfif",
			house_id: "1",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
            favorated: true,
		},
        {
			main_pic_path: "/imgs/img_thumbnail (2).jfif",
			house_id: "2",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
            favorated: false,
		},
        {
			main_pic_path: "/imgs/img_thumbnail (3).jfif",
			house_id: "3",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
            favorated: true,
		},
        {
			main_pic_path: "/imgs/img_thumbnail (4).jfif",
			house_id: "4",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
            favorated: false,
		},
        {
			main_pic_path: "/imgs/img_thumbnail (5).jfif",
			house_id: "5",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
            favorated: false,
		},
        {
			main_pic_path: "/imgs/img_thumbnail (6).jfif",
			house_id: "6",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
            favorated: false,
		},
        {
			main_pic_path: "/imgs/img_thumbnail (7).jfif",
			house_id: "7",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
            favorated: false,
		},
    ])

    // get favorate
    const getFavorate = () => {
        favorates.value = []
    }

    const favorates = ref([
	    {
			main_pic_path: "/imgs/img_thumbnail (1).jfif",
			house_id: "1",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
            favorated: true,
		},
        {
			main_pic_path: "/imgs/img_thumbnail (2).jfif",
			house_id: "2",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
            favorated: true,
		},
        {
			main_pic_path: "/imgs/img_thumbnail (3).jfif",
			house_id: "3",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
            favorated: true,
		},
        {
			main_pic_path: "/imgs/img_thumbnail (4).jfif",
			house_id: "4",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
            favorated: true,
		},
        {
			main_pic_path: "/imgs/img_thumbnail (5).jfif",
			house_id: "5",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
            favorated: true,
		},
        {
			main_pic_path: "/imgs/img_thumbnail (6).jfif",
			house_id: "6",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
            favorated: true,
		},
        {
			main_pic_path: "/imgs/img_thumbnail (7).jfif",
			house_id: "7",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
            favorated: true,
		},
    ])

    // condition store
    const conditionStore = useConditionStore()

    
    // headers button definition
    const functions = [
        // {
        //     title: '検索履歴',
        //     icon: 'magnifying-glass',
        //     func: modalStore.showQuickSearchSelection,
        //     route: 'ただいま製作中',
        // },
        {
            title: '閲覧履歴',
            icon: 'clock-rotate-left',
            func: modalStore.showSearchHistorySelection,
            route: '',
        },
        {
            title: 'お気に入り',
            icon: 'star',
            func: modalStore.showFavSelection,
            route: '',
        },
        {
            title: 'お問い合わせ',
            icon: 'envelope',
            func: router.push,
            route: '/query/any',
        },
    ]

    const jump2Home = () => {
        router.push('/')
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

        .logo-wrapper {
            padding-right: 20px;
            position: relative;
            cursor: pointer;

            .logo {
                width: 20rem;
                height: 5rem;
                margin-left: 100px;
                background: url('@/assets/icon/logo.png') left top / 325px 72px;
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
</style>
