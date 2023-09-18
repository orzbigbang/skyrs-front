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

    // modal store
    import { useModalStore } from '@/stores/modal';
    const modalStore = useModalStore()

    // condition store
    import { useConditionStore } from '@/stores/condition';
    const conditionStore = useConditionStore()
    
    const buyFunc = () => {
        modalStore.showCitySelection(true)
        conditionStore.mode = "sell"
    }

    const rentFunc = () => {
        modalStore.showCitySelection(true)
        conditionStore.mode = "rent"
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
                // {title:'売買物件検索', type:"search", func: buyFunc, route: "/search", params: {mode: "sell", type: "any", new_: "any"}},
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
                {title:'無料査定依頼', type:"query", func: sellFunc, route: "/query", params: {mode: "sell"}},
            ]
        },
        {
            title:'借りたい',
            subItem: [
                // {title:'賃貸物件検索', type:"search", func: rentFunc, route: "/search", params: {mode: "賃貸", type: "any", new_: "any"}},
                {title:'賃貸マンション', type:"search", func: rentFunc, route: "/search", houseIndex: 5, params: {mode: "rent", type: "mansion", new_: "n"}},
                {title:'賃貸一戸建て', type:"search", func: rentFunc, route: "/search", houseIndex: 6, params: {mode: "rent", type: "one", new_: "n"}},
                // {title:'賃貸オフィス・店舗', type:"search", func: rentFunc, route: "/search", params: {mode: "賃貸"}},
            ]
        },
        {
            title:'貸したい',
            subItem: [
                {title:'貸主様相談', type:"query", func: rentOutFunc, route: "/query", params: {mode: "rent"}},
                {title:'サブリース', type:"query", func: rentOutFunc, route: "/query", params: {mode: "rent"}},
            ]
        },
        // {
        //     title:'資産活用・投資',
        //     subItem: [
        //         {title:'物件を探す', func: subItemFunc, route: "", params: {}},
        //         {title:'投資物件', func: subItemFunc, route: "", params: {}},
        //     ]
        // },
        {
            title:'問い合わせ',
            subItem: [
                {title:'問い合わせ', type:"query", func: queryFunc, route: "/query", params: {mode: "any"}},
                // {title:'営業センター', type:"query", func: queryFunc, route: "/query", params: {mode: "any"}},
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
