<template>
    <MyBanner/>
    <ItemRecommend class="item"/>
    <ItemNewHouse class="item"/>
    <ItemService class="item"/>
    <!-- <ItemTopics class="item"></ItemTopics> -->
    <!-- <ItemSearch class="item"></ItemSearch> -->
</template>

<script setup>
import MyBanner from './MyBanner.vue'
import ItemRecommend from './Item-Recommend.vue'
import ItemNewHouse from './Item-NewHouse.vue'
import ItemService from './Item-Service.vue'
// import ItemTopics from './Item-Topics.vue
// import ItemSearch from './Item-Search.vue';

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
