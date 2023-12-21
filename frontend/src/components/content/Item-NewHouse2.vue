<template>
	<div class="container">
		<PartTitle2 :eng="eng" :jpn="jpn"/>
		<div class="card-wrapper">
			<PartCard1 v-for="card in cards" :key="card.title" :house="card" @click="jump2page(card.url)"></PartCard1>
		</div>
		<slot></slot>
		<div class="see-more bacc"  @click="jump2page(url)">もっと見る<fa icon="angle-right" class="fa-icon"/></div>
	</div>
</template>

<script setup>
	import PartTitle2 from "./Part-Title2.vue";
	import PartCard1 from "./Part-Card1.vue";

	const props = defineProps(["cards", "url", "eng", "jpn"])

	const jump2page = (url) => {
		window.open(url, "_blank")
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
