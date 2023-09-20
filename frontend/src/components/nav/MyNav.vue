<template>
    <div class="nav fc">
        <div class="nav-wrapper container">
            <NavItem v-for="item in items" :key="item.title" :item="item"/>
        </div>
    </div>
</template>

<script setup>
    import NavItem from '@/components/nav/NavItem.vue'

    import { useRouter } from "vue-router"
    const router = useRouter()
    import { useModalStore } from '@/stores/modal';
    const modalStore = useModalStore()

    import { useConditionStore } from '@/stores/condition';
    const conditionStore = useConditionStore()
    
    // navitem click function
    const buyFunc = () => {
        conditionStore.mode = "sell"
        modalStore.showCitySelection(true)
    }

    const rentFunc = () => {
        conditionStore.mode = "rent"
        modalStore.showCitySelection(true)
    }
    
    const sellFunc = (path) => {
        router.push(path)
    }

    const rentOutFunc = (path) => {
        router.push(path)
    }

    const queryFunc = (path) => {
        router.push(path)
    }

    const items = [
        {
            title:'買いたい',
            subItem: [
                {title:'中古マンション', type:"search", func: buyFunc, route: "/search", houseIndex: 1, params: {mode: "sell", type: "mansion", new_: "n"}},
                {title:'新築未入居マンション', type:"search", func: buyFunc, route: "/search", houseIndex: 2, params: {mode: "sell", type: "mansion", new_: "y"}},
                {title:'中古一戸建て', type:"search", func: buyFunc, route: "/search", houseIndex: 3, params: {mode: "sell", type: "one", new_: "n"}},
                {title:'新築未入居一戸建て', type:"search", func: buyFunc, route: "/search", houseIndex: 4, params: {mode: "sell", type: "one", new_: "y"}},
                {title:'土地', type:"search", func: buyFunc, route: "/search", houseIndex: 7, params: {mode: "sell", type: "land", new_: "any"}},
            ]
        },
        {
            title:'売りたい',
            subItem: [
                {title:'無料査定依頼', type:"query", func: sellFunc, queryType: 1, route: "/query", params: {mode: "sell"}},
            ]
        },
        {
            title:'借りたい',
            subItem: [
                {title:'賃貸マンション', type:"search", func: rentFunc, route: "/search", houseIndex: 5, params: {mode: "rent", type: "mansion", new_: "n"}},
                {title:'賃貸一戸建て', type:"search", func: rentFunc, route: "/search", houseIndex: 6, params: {mode: "rent", type: "one", new_: "n"}},
            ]
        },
        {
            title:'貸したい',
            subItem: [
                {title:'貸主様相談', type:"query", func: rentOutFunc, queryType: 2, route: "/query", params: {mode: "rent"}},
            ]
        },
        {
            title:'問い合わせ',
            subItem: [
                {title:'問い合わせ', type:"query", func: queryFunc, queryType: 0, route: "/query", params: {mode: "any"}},
            ]
        },
    ]
</script>

<style scoped lang="less">
    .nav {
        height: 50px;
        box-shadow: 0 3px 10px #ccc;
        background-color: #fff;
        position: sticky;
        top: 0;
        z-index: 100;
        .nav-wrapper {
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
    
</style>
