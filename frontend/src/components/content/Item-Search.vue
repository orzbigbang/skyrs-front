<template>
	<div class="search">
		<div class="container">
			<PartTitle :eng="'search'" :jpn="'検索'" />
			<div class="card-wrapper" v-for="cards in cardsList">
				<PartSearchCard
					v-for="card in cards"
					:key="card.title"
					:card="card"
				></PartSearchCard>
			</div>
		</div>
	</div>
</template>

<script setup>
import PartTitle from "./Part-Title.vue";
import PartSearchCard from "./Part-SearchCard.vue";

const cardsList = [
	[
		{
			title: "売買居住用",
			icon: "people-roof",
			color: "rgb(230, 241, 244)",
			url: "https://asp.athome.jp/073049/shubetsu/baibai_kyojuyo/shumoku",
		},
		{
			title: "売買事業用",
			icon: "building",
			color: "rgb(230, 241, 244)",
			url: "https://asp.athome.jp/073049/shubetsu/baibai_jigyoyo/shumoku",
		},
		{
			title: "賃貸居住用",
			icon: "house",
			color: "rgb(233, 236, 248)",
			url: "https://asp.athome.jp/073049/shumoku/chintai/search_setting",
		},
		{
			title: "賃貸事業用",
			icon: "computer",
			color: "rgb(233, 236, 248)",
			url: "https://asp.athome.jp/073049/shubetsu/chintai_jigyoyo/shumoku",
		},
		
	],
	[
		{
			title: "地域から",
			icon: "location-dot",
			color: "rgb(249, 245, 236)",
			url: "https://asp.athome.jp/073049/search_type/area/shumoku",
		},
		{
			title: "沿線・駅から",
			icon: "train",
			color: "rgb(249, 245, 236)",
			url: "https://asp.athome.jp/073049/search_type/line/shumoku",
		},
		{
			title: "通勤・通学時間から",
			icon: "school",
			color: "rgb(233, 248, 236)",
			url: "https://asp.athome.jp/073049/search_type/shoyojikan/shumoku",
		},
		{
			title: "リゾート",
			icon: "person",
			color: "rgb(233, 248, 236)",
			url: "https://asp.athome.jp/073049/shubetsu/resort/shumoku",
		},
	],
]
</script>

<style scoped lang="less">
.card-wrapper {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	// background-color: rgb(252, 233, 249);
}
</style>
