<template>
	<div class="search">
		<div class="container">
			<PartTitle :eng="'search'" :jpn="'売買・賃貸検索'" />
			<div class="search-wrapper">
				<ItemSubSearch
					v-for="cards in cardsList"
					:title="cards.title"
					:subtitle="cards.subtitle"
					:backgroundColor="cards.backgroundColor"
					:items="cards.items"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import PartTitle from "./Part-Title.vue";
import ItemSubSearch from "./Item-SubSearch.vue"

const cardsList = [
	{	
		title: "買いたい",
		subtitle: "- 売買物件検索 -",
		backgroundColor: "",
		items: [
			[
				{
					title: "売買居住用",
					icon: "people-roof",
					color: "rgb(215, 234, 254)",
					url: "https://asp.athome.jp/073049/shubetsu/baibai_kyojuyo/shumoku",
					subitems: [
						{
							cat: "マンション",
							desc: "新築・分譲・中古",
						},
						{
							cat: "一戸建て",
							desc: "新築・中古",
						},
						{
							cat: "売土地",
							desc: "",
						},
					],
				},
				{
					title: "売買事業用",
					icon: "building",
					color: "rgb(215, 234, 254)",
					url: "https://asp.athome.jp/073049/shubetsu/baibai_jigyoyo/shumoku",
					subitems: [
						{
							cat: "売店舗・売事務所・売土地・売ビル",
							desc: "",
						},
						{
							cat: "売倉庫・売工場・その他",
							desc: "",
						},
					],
				},
			],
			[
				{
					title: "リゾート",
					icon: "person",
					color: "rgb(215, 234, 254)",
					url: "https://asp.athome.jp/073049/shubetsu/resort/shumoku",
					subitems: [
						{
							cat: "マンション・別荘・保養所",
							desc: "",
						},
					]
				},
				{
					title: "地域から",
					icon: "location-dot",
					color: "rgb(233, 248, 236)",
					url: "https://asp.athome.jp/073049/search_type/area/shumoku",
				},
			]
		]
	},
	{	
		title: "借りたい",
		subtitle: "- 賃貸物件検索 -",
		backgroundColor: "",
		items: [
			[
				{
					title: "賃貸居住用",
					icon: "house",
					color: "rgb(249, 245, 236)",
					url: "https://asp.athome.jp/073049/shumoku/chintai/search_setting",
					subitems: [
						{
							cat: "アパート・マンション・一戸建て",
							desc: "",
						},
					],
				},
				{
					title: "賃貸事業用",
					icon: "computer",
					color: "rgb(249, 245, 236)",
					url: "https://asp.athome.jp/073049/shubetsu/chintai_jigyoyo/shumoku",
					subitems: [
						{
							cat: "賃店舗・賃事務所・賃駐車場",
							desc: "",
						},
						{
							cat: "賃土地・賃ビル・賃倉庫・賃工場",
							desc: "",
						},
					],
				},
			],
			[
				{
					title: "沿線・駅から",
					icon: "train",
					color: "rgb(233, 248, 236)",
					url: "https://asp.athome.jp/073049/search_type/line/shumoku",
				},
				{
					title: "通勤・通学時間から",
					icon: "school",
					color: "rgb(233, 248, 236)",
					url: "https://asp.athome.jp/073049/search_type/shoyojikan/shumoku",
				}
			]
		]
	}
]
</script>

<style scoped lang="less">

.search-wrapper {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
}
</style>
