<template>
    <ModalBox :title="'都道府県の選択・変更'" v-show="isCitySelection">
        <div class="city-wrapper">
            <div class="city" v-for="city in cityList" @click="setCity($event, city)">
                <span class="title">
                    {{ city.title }}
                </span>
            </div>
        </div>
    </ModalBox>
</template>
    
<script setup>
    import ModalBox from '@/components/functional/ModalBox.vue';

    import { computed } from 'vue';
    import { useModalStore } from '@/stores/modal.js'
    import { useConditionStore } from '@/stores/condition.js';
    import { useRouter } from 'vue-router'
    const router = useRouter()

    const modalStore = useModalStore()
    const conditionStore = useConditionStore()

    // city click event
    const setCity = ($event, city) => {
        conditionStore.city = city.title
        conditionStore.cityIndex = city.index
        conditionStore.isCitySet = true
        modalStore.isCitySelection = false
        if (modalStore.isGoNext) {
            router.push(`/search/${city.index}/${conditionStore.mode}/${conditionStore.type}/${conditionStore.new_}`)
        }
    }

    // const cityList = [
    //     {
    //         name: "北海道",
    //         cities: [
    //             "北海道",
    //         ]
    //     },
    //     {
    //         name: "東北",
    //         cities: [
    //             "青森", "岩手", "秋田宮城", "山形", "福島",
    //         ]
    //     },
    //     {
    //         name: "甲信越・北陸",
    //         cities: [
    //             "山梨", "長野", "新潟富山", "石川", "福井",
    //         ]
    //     },
    //     {
    //         name: "関東",
    //         cities: [
    //             "東京", "神奈川", "千葉", "埼玉", "茨城栃木", "群馬",
    //         ]
    //     },
    //     {
    //         name: "東海",
    //         cities: [
    //             "愛知", "静岡岐阜", "三重",
    //         ]
    //     },
    //     {
    //         name: "中国",
    //         cities: [
    //             "岡山", "広島鳥取", "島根山口",
    //         ]
    //     },
    //     {
    //         name: "関西",
    //         cities: [
    //             "大阪", "兵庫", "京都滋賀", "奈良", "和歌山",
    //         ]
    //     },
    //     {
    //         name: "四国",
    //         cities: [
    //             "愛媛", "香川高知", "徳島",
    //         ]
    //     },
    //     {
    //         name: "九州・沖縄",
    //         cities: [
    //             "福岡", "佐賀", "長崎熊本", "大分", "宮崎鹿児島", "沖縄",
    //         ]
    //     },
    // ]

    const cityList = [
        {title: "東京", index: 1},
        {title: "神奈川", index: 2},
        {title: "千葉", index: 3},
        {title: "埼玉", index: 4},
    ]

    const isCitySelection = computed(() => {
        return modalStore.isCitySelection
    })
</script>
    
<style scoped  lang='less'>
    .city-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        .city {
            width: 80%;
            height: 20%;
            background-color: rgb(255, 180, 40);
            color: #fff;
            font-size: 24px;
            text-align: center;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            cursor: pointer;
            transition: .1s;

            &:hover {
                border-radius: 100px;
                background-color: rgb(255, 123, 0);
            }
        }
    }
</style>