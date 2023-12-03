<template>
    <nav class="nav fc" id="nav">
        <ul class="nav-wrapper">
            <NavItem v-for="item in items" :key="item.title" :item="item"/>
        </ul>
    </nav>
</template>

<script setup>
    import NavItem from '@/components/nav/NavItem.vue'

    const items = [
        // {
        //     title:'自社物件検索',
        //     subItem: [
        //         {title:'中古マンション', type:"search", route: "/search", houseIndex: 1, params: {mode: "sell", type: "mansion", new_: "n"}},
        //         {title:'新築未入居マンション', type:"search", route: "/search", houseIndex: 2, params: {mode: "sell", type: "mansion", new_: "y"}},
        //         {title:'中古一戸建て', type:"search", route: "/search", houseIndex: 3, params: {mode: "sell", type: "one", new_: "n"}},
        //         {title:'新築一戸建て', type:"search", route: "/search", houseIndex: 4, params: {mode: "sell", type: "one", new_: "y"}},
        //         {title:'土地', type:"search", route: "/search", houseIndex: 7, params: {mode: "sell", type: "land", new_: "any"}},
        //     ]
        // },
        {
            title:'自社物件検索',
            subItem: [
                {title:'売買マンション', type:"search", route: "/search", houseIndex: 1, params: {mode: "sell", type: "mansion", new_: "n"}},
                {title:'売買一戸建て', type:"search", route: "/search", houseIndex: 3, params: {mode: "sell", type: "one", new_: "n"}},
                {title:'賃貸マンション・一戸建て', type:"search", route: "/search", houseIndex: 4, params: {mode: "rent", type: "mansion", new_: "n"}},
            ]
        },
        // {
        //     title:'買いたい',
        //     subItem: [
        //         {title:'中古マンション', type:"search", route: "/search", houseIndex: 1, params: {mode: "sell", type: "mansion", new_: "n"}},
        //         {title:'新築未入居マンション', type:"search", route: "/search", houseIndex: 2, params: {mode: "sell", type: "mansion", new_: "y"}},
        //         {title:'中古一戸建て', type:"search", route: "/search", houseIndex: 3, params: {mode: "sell", type: "one", new_: "n"}},
        //         {title:'新築一戸建て', type:"search", route: "/search", houseIndex: 4, params: {mode: "sell", type: "one", new_: "y"}},
        //         {title:'土地', type:"search", route: "/search", houseIndex: 7, params: {mode: "sell", type: "land", new_: "any"}},
        //     ]
        // },
        {
            title:'売りたい',
            subItem: [
                {title:'無料査定依頼', type:"query", queryType: 1, route: "/query", params: {mode: "sell"}},
            ]
        },
        // {
        //     title:'借りたい',
        //     subItem: [
        //         {title:'賃貸マンションアパート', type:"search", route: "/search", houseIndex: 5, params: {mode: "rent", type: "mansion", new_: "n"}},
        //         {title:'賃貸一戸建て', type:"search", route: "/search", houseIndex: 6, params: {mode: "rent", type: "one", new_: "n"}},
        //         {title:'土地', type:"search", route: "/search", houseIndex: 8, params: {mode: "rent", type: "land", new_: "n"}},
        //         {title:'駐車場', type:"search", route: "/search", houseIndex: 9, params: {mode: "rent", type: "parking", new_: "n"}},
        //     ]
        // },
        {
            title:'貸したい',
            subItem: [
                {title:'貸主様相談', type:"query", queryType: 2, route: "/query", params: {mode: "rent"}},
            ]
        },
        // {
        //     title:'お問い合わせ',
        //     subItem: [
        //         {title:'お住いの相談', type:"query", queryType: 0, route: "/query", params: {mode: "any"}},
        //     ]
        // },
        {
            title:'会社概要',
            subItem: [
                {title:'会社概要', type:"company", queryType: 0, route: "/company", params: {mode: "any"}},
                {title:'お住いの相談', type:"query", queryType: 0, route: "/query", params: {mode: "any"}},
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
        z-index: 100000;
        .nav-wrapper {
            width: 90%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }   

    @media screen and (max-width:540px) {
        .nav {
            height: 70px;
            .nav-wrapper {
                flex-wrap: wrap;
            }
        }   
    }
</style>
