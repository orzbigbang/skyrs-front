<template>
    <div class="city-wrapper">
        <div class="city" v-for="city in cityList" @click="setCity($event, city)">
            <span class="title">
                {{ city.title }}
            </span>
        </div>
    </div>
</template>
    
<script setup>
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
        modalStore.closeModalSelection()
        if (modalStore.isGoNext) {
            router.push(`/search/${city.index}/${conditionStore.mode}/${conditionStore.type}/${conditionStore.new_}`)
        }
    }

    const cityList = [
        {title: "東京", index: 1},
        {title: "神奈川", index: 2},
        {title: "千葉", index: 3},
        {title: "埼玉", index: 4},
    ]
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