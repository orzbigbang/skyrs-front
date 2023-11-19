<template>
    <MyBanner/>
    <ItemSearch class="item"/>
    <ItemNewHouse class="item" :eng="'new house'" :jpn="'新着物件-売買'" :cards="cardsSell" :url="moreSellURL"/>
    <ItemNewHouse class="item" :eng="'new house'" :jpn="'新着物件-賃貸'" :cards="cardsRent" :url="moreRentURL"/>
    <ItemRecommend class="item"/>
    <ItemService class="item"/>
    <ItemStaff class="item"/>
    <MyCompany class="item"/>
</template>

<script setup>
    import MyBanner from './MyBanner.vue'
    import ItemRecommend from './Item-Recommend.vue'
    import ItemNewHouse from './Item-NewHouse.vue'
    import ItemSearch from './Item-Search.vue'
    import ItemService from './Item-Service.vue'
    import ItemStaff from './Item-Staff.vue'
    import MyCompany from './MyCompany.vue'

    const cardsSell = [
	{
		house_id: 1,
		img: '/imgs/img_thumbnail (3).jfif',
		tag: '賃貸マンション',
		title: 'パークアクシス御茶ノ水ヒルトップ',
		price: '131,000円~256,000円',
		location: '東京都千代田区 神田駿河台２丁目',
		station: '東京メトロ丸ノ内線 御茶ノ水駅 徒歩7分',
		attribute: '2018年8月築 / 鉄筋コンクリート(RC) / 14階',
	},
	{
		house_id: 2,
		img: 'imgs/img_thumbnail (4).jfif',
		tag: '賃貸マンション',
		title: 'ＴＫＲ神田多町',
		price: '87,000円',
		location: '東京都千代田区 神田多町２丁目',
		station: '東京メトロ銀座線 神田駅 徒歩3分',
		attribute: '2002年11月築 / 鉄骨 / 8階',
	},
	{
		house_id: 3,
		img: 'imgs/img_thumbnail (9).jfif',
		tag: '賃貸マンション',
		title: 'プラース千代田富士見',
		price: '107,000円~',
		location: '東京都千代田区 富士見２丁目',
		station: '東京メトロ有楽町線 飯田橋駅 徒歩5分',
		attribute: '2009年3月築 / 鉄筋コンクリート(RC) / 9階',
	},
	{
		house_id: 4,
		img: 'imgs/img_thumbnail (6).jfif',
		tag: '賃貸マンション',
		title: 'エルスタンザ神田須田町',
		price: '144,000円~283,000円',
		location: '東京都千代田区 神田須田町１丁目',
		station: '東京メトロ銀座線 神田駅 徒歩3分',
		attribute: '2019年6月築 / 鉄筋コンクリート(RC) / 12階',
	},
    ]
    const moreSellURL = "https://asp.athome.jp/073049/shubetsu/baibai/shumoku"

    const cardsRent = [
	{
		house_id: 1,
		img: '/imgs/img_thumbnail (3).jfif',
		tag: '賃貸マンション',
		title: 'パークアクシス御茶ノ水ヒルトップ',
		price: '131,000円~256,000円',
		location: '東京都千代田区 神田駿河台２丁目',
		station: '東京メトロ丸ノ内線 御茶ノ水駅 徒歩7分',
		attribute: '2018年8月築 / 鉄筋コンクリート(RC) / 14階',
	},
	{
		house_id: 2,
		img: 'imgs/img_thumbnail (4).jfif',
		tag: '賃貸マンション',
		title: 'ＴＫＲ神田多町',
		price: '87,000円',
		location: '東京都千代田区 神田多町２丁目',
		station: '東京メトロ銀座線 神田駅 徒歩3分',
		attribute: '2002年11月築 / 鉄骨 / 8階',
	},
	{
		house_id: 3,
		img: 'imgs/img_thumbnail (9).jfif',
		tag: '賃貸マンション',
		title: 'プラース千代田富士見',
		price: '107,000円~',
		location: '東京都千代田区 富士見２丁目',
		station: '東京メトロ有楽町線 飯田橋駅 徒歩5分',
		attribute: '2009年3月築 / 鉄筋コンクリート(RC) / 9階',
	},
	{
		house_id: 4,
		img: 'imgs/img_thumbnail (6).jfif',
		tag: '賃貸マンション',
		title: 'エルスタンザ神田須田町',
		price: '144,000円~283,000円',
		location: '東京都千代田区 神田須田町１丁目',
		station: '東京メトロ銀座線 神田駅 徒歩3分',
		attribute: '2019年6月築 / 鉄筋コンクリート(RC) / 12階',
	},
    ]
    const moreRentURL = "https://asp.athome.jp/073049/shubetsu/chintai/shumoku"

    
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
