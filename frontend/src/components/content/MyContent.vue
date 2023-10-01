<template>
    <MyBanner/>
    <ItemRecommend class="item"/>
    <ItemNewHouse class="item"/>
    <ItemService class="item"/>
    <ItemStaff class="item"/>
</template>

<script setup>
    import MyBanner from './MyBanner.vue'
    import ItemRecommend from './Item-Recommend.vue'
    import ItemNewHouse from './Item-NewHouse.vue'
    import ItemService from './Item-Service.vue'
    import ItemStaff from './Item-Staff.vue'
</script>

<style scoped lang="less">

    .item:nth-child(2n) {
        margin-bottom: 50px;
    }

    .item:nth-child(2n+1) {
        padding-bottom: 50px;
        background-color: #fff;
        box-shadow: 0 4px 5px #ccc,
                    0 -4px 5px #ccc;
    }
</style>
