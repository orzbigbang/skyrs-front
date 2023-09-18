<template>
    <ModalBox :title="'都道府県の選択・変更'" v-show="isCitySelection">
        <div class="province-wrapper" v-for="province in cityList">
            <div class="province">
                {{ province.name }}
            </div>
            <div class="city-wrapper">
                <div class="city" v-for="city in province.cities" @click="setCity($event, city)">
                    {{ city }}
                </div>
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
        conditionStore.city = city
        conditionStore.isCitySet = true
        modalStore.isCitySelection = false
        if (modalStore.isGoNext) {
            router.push(`/search/${city}/${conditionStore.mode}/${conditionStore.type}/${conditionStore.new_}`)
        }
    }

    const cityList = [
        {
            name: "北海道",
            cities: [
                "北海道",
            ]
        },
        {
            name: "東北",
            cities: [
                "青森", "岩手", "秋田宮城", "山形", "福島",
            ]
        },
        {
            name: "甲信越・北陸",
            cities: [
                "山梨", "長野", "新潟富山", "石川", "福井",
            ]
        },
        {
            name: "関東",
            cities: [
                "東京", "神奈川", "千葉", "埼玉", "茨城栃木", "群馬",
            ]
        },
        {
            name: "東海",
            cities: [
                "愛知", "静岡岐阜", "三重",
            ]
        },
        {
            name: "中国",
            cities: [
                "岡山", "広島鳥取", "島根山口",
            ]
        },
        {
            name: "関西",
            cities: [
                "大阪", "兵庫", "京都滋賀", "奈良", "和歌山",
            ]
        },
        {
            name: "四国",
            cities: [
                "愛媛", "香川高知", "徳島",
            ]
        },
        {
            name: "九州・沖縄",
            cities: [
                "福岡", "佐賀", "長崎熊本", "大分", "宮崎鹿児島", "沖縄",
            ]
        },
    ]

    const isCitySelection = computed(() => {
        return modalStore.isCitySelection
    })
</script>
    
<style scoped  lang='less'>
    .province-wrapper {
        width: 100%;
        padding: 0 20px;

        .province {
            padding: 7px;
            border-top: 1px solid #bbb;
            background-color: #eee;
            font-size: 14px;
            font-weight: 700;
        }
        .city-wrapper {
                height: 40px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;

                .city {
                    padding-left: 10px;
                    cursor: pointer;
                    color: #666;

                    &:hover {
                        color: #000;
                    }

                    &::after {
                        content: "|";
                        margin-left: 10px;
                        color: #999;
                        vertical-align: top;
                    }

                    &:nth-last-child(1) {
                        &::after {
                            content: "";
                        }
                    }
                }
            }
    }
</style>