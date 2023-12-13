<template>
    <MyBanner/>
    <ItemSearch class="item search"/>
    <ItemRecommend class="item"/>
    <MyCompany class="item"/>
</template>

<script setup>
    import MyBanner from './MyBanner.vue'
    import ItemSearch from './Item-Search.vue'
	import ItemRecommend from './Item-Recommend.vue'
    import MyCompany from './MyCompany.vue'

    import { useHouseStore } from "@/stores/house"
	const houseStore = useHouseStore()

    import { useHeader } from '@/composition/userInfo.js'
    const headers = useHeader()

    houseStore.getAtbbRecommendHouseList(headers)
</script>

<style scoped lang="less">
    .item:nth-child(2n) {
        margin-bottom: 50px;
    }

    .item:nth-child(2n+1) {
        padding-bottom: 50px;
        background-color: #f5f4f4;
        box-shadow: 0 4px 5px #ccc,
                    0 -4px 5px #ccc;
    }

	.item.search {
		padding-bottom: 10px;
	}
</style>
