<template>
    <MyBanner/>
    <ItemSearch class="item search"/>
    <!-- <ItemNewHouse class="item" :eng="'new house'" :jpn="'売買☆おすすめ物件特集☆《マンション》《一戸建て》《事業用》'" :cards="cardsSell" :url="moreSellURL"/> -->
    <!-- <ItemNewHouse class="item" :eng="'new house'" :jpn="'賃貸☆おすすめ物件特集☆《マンション・アパート》《一戸建て》《事業用》'" :cards="cardsRent" :url="moreRentURL"/> -->
    <ItemRecommend class="item"/>
    <!-- <ItemService class="item"/> -->
    <!-- <ItemStaff class="item"/> -->
    <MyCompany class="item"/>
</template>

<script setup>
    import MyBanner from './MyBanner.vue'
    import ItemNewHouse from './Item-NewHouse.vue'
    import ItemSearch from './Item-Search.vue'
	import ItemRecommend from './Item-Recommend.vue'
    import ItemService from './Item-Service.vue'
    import ItemStaff from './Item-Staff.vue'
    import MyCompany from './MyCompany.vue'

	import {computed} from 'vue'

	// const cardsSell = computed(() => {
	// 	return []
	// })

    // const moreSellURL = "https://asp.athome.jp/073049/shubetsu/baibai/shumoku"

    // const cardsRent = computed(() => {
	// 	return []
	// })
    // const moreRentURL = "https://asp.athome.jp/073049/shubetsu/chintai/shumoku"

    
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
