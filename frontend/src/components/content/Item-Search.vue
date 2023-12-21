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
					:items="cards.items">
				</ItemSubSearch>
			</div>
		</div>
	</div>
</template>

<script setup>
	import PartTitle from "./Part-Title.vue";
	import ItemSubSearch from "./Item-SubSearch.vue"
	import {cardsList} from "@/config/atbb.js"
</script>

<style scoped lang="less">
	.search-wrapper {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
	}
</style>
