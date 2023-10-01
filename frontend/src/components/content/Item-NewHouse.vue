<template>
	<div class="new-house">
		<div class="container">
			<PartTitle :eng="'new house'" :jpn="'新着物件'"/>
			<div class="card-wrapper">
				<PartCard1 v-for="card in cards" :key="card.title" :house="card" @click="goDP($event, card.house_id)"></PartCard1>
			</div>
			<div class="see-more bacc">もっと見る<fa icon="angle-right" class="fa-icon" @click=""/></div>
		</div>
	</div>
</template>

<script setup>
import PartTitle from "./Part-Title.vue";
import PartCard1 from "./Part-Card1.vue";

import { useRouter } from "vue-router";
const router = useRouter()

const cards = [
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
	{
		house_id: 5,
		img: 'imgs/img_thumbnail (7).jfif',
		tag: '賃貸マンション',
		title: 'パークハウス平河町',
		price: '270,000円~330,000円',
		location: '東京都千代田区 平河町１丁目',
		station: '東京メトロ有楽町線 麹町駅 徒歩4分',
		attribute: '2007年11月築 / 鉄筋コンクリート(RC) / 14階',
	},
	{
		house_id: 6,
		img: 'imgs/img_thumbnail (8).jfif',
		tag: '賃貸マンション',
		title: 'アジュール神田錦町',
		price: '162,000円~',
		location: '東京都千代田区 神田錦町１丁目',
		station: '東京メトロ丸ノ内線 淡路町駅 徒歩5分',
		attribute: '2014年9月築 / 鉄筋コンクリート(RC) / 11階',
	},
	{
		house_id: 7,
		img: 'imgs/img_thumbnail (4).jfif',
		tag: '賃貸マンション',
		title: 'ＴＫＲ神田多町',
		price: '87,000円',
		location: '東京都千代田区 神田多町２丁目',
		station: '東京メトロ銀座線 神田駅 徒歩3分',
		attribute: '2002年11月築 / 鉄骨 / 8階',
	},
	{
		house_id: 8,
		img: 'imgs/img_thumbnail (3).jfif',
		tag: '賃貸マンション',
		title: 'パークアクシス御茶ノ水ヒルトップ',
		price: '131,000円~256,000円',
		location: '東京都千代田区 神田駿河台２丁目',
		station: '東京メトロ丸ノ内線 御茶ノ水駅 徒歩7分',
		attribute: '2018年8月築 / 鉄筋コンクリート(RC) / 14階',
	},
]

// go to detail page
const goDP = ($event, houseID) => {
	router.push(`/detailpage/${houseID}`)
}

</script>

<style scoped lang="less">
	.card-wrapper {
		display: flex;
        flex-wrap: wrap;
		justify-content: center;
	}

	.see-more {
		width: 200px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		margin: 50px auto;
		border-radius: 10px;
		color: #fff;
		cursor: pointer;
		transition: all .1s linear;

		&:hover{
			border-radius: 30px;
			background-color: rgb(7, 51, 91);
		}

		.fa-icon {
			margin-left: 10px;
			vertical-align: middle;
		}
	}
</style>
