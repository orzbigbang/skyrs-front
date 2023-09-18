<template>
	<div class="topics">
		<div class="container">
			<PartTitle :eng="'topics'" :jpn="'トピックス'"/>
			<div class="card-wrapper">
				<PartCard2 v-for="card in cards" :key="card.title" :card="card"></PartCard2>
			</div>
		</div>
	</div>
</template>

<script setup>
import PartTitle from "./Part-Title.vue";
import PartCard2 from "./Part-Card2.vue"

const cards = [
	{
		img: 'imgs/img_thumbnail (3).jfif',
		name: 'パークサイド木場点',
		phone: '03-6666-3376',
		location: '東京都千代田区 神田駿河台２丁目',
	},
	{
		img: 'imgs/img_thumbnail (4).jfif',
		name: '御茶ノ水店',
		phone: '03-5555-3376',
		location: '東京都千代田区 富士見２丁目',
	},
	{
		img: 'imgs/img_thumbnail (5).jfif',
		name: '田町三田口店',
		phone: '03-4444-3376',
		location: '東京都千代田区 神田須田町１丁目',
	},
	{
		img: 'imgs/img_thumbnail (6).jfif',
		name: '花街神楽坂店',
		phone: '03-3333-3376',
		location: '東京都千代田区 平河町１丁目',
	},
	{
		img: 'imgs/img_thumbnail (7).jfif',
		name: '白金高輪店',
		phone: '03-2222-3376',
		location: '東京都千代田区 神田錦町１丁目',
	},
	{
		img: 'imgs/img_thumbnail (8).jfif',
		name: '亀戸副都心店',
		phone: '03-1111-3376',
		location: '東京都千代田区 神田多町２丁目',
	},
]
</script>

<style scoped lang="less">
	.topics {
		.card-wrapper {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
	}
	
</style>
