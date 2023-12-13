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
    {
        title:'自社売買物件',
        subItem: [
            {title:'売買マンション', type:"search", route: "/search", houseIndex: 1, params: {mode: "sell", type: "mansion", new_: "n"}, config: {disable: false}},
            {title:'売買一戸建て', type:"search", route: "/search", houseIndex: 3, params: {mode: "sell", type: "one", new_: "n"}, config: {disable: false}},
        ]
    },
    {
        title:'自社賃貸物件',
        subItem: [
            {title:'賃貸マンション・一戸建て', type:"search", route: "/search", houseIndex: 4, params: {mode: "rent", type: "mansion", new_: "n"}, config: {disable: false}},
        ]
    },
    {
        title:'お問い合わせ',
        subItem: [
            {title:'無料査定依頼', type:"query", queryType: 1, route: "/query", params: {mode: "sell"}, config: {disable: false}},
            {title:'貸主様相談', type:"query", queryType: 2, route: "/query", params: {mode: "rent"}, config: {disable: false}},
            {title:'お住いの相談', type:"query", queryType: 0, route: "/query", params: {mode: "any"}, config: {disable: false}},
        ]
    },
    {
        title:'会社概要',
        subItem: [
            {title:'会社概要', type:"company", queryType: 0, route: "/company", params: {mode: "any"}, config: {disable: false}},
        ]
    },
]
</script>

<style scoped lang="less">
    .nav {
        height: 50px;
        box-shadow: 0 3px 10px #ccc;
        background-color: #fff;
        position: -webkit-sticky;
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
