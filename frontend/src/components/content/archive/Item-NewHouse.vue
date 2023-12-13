<template>
	<div class="new-house">
		<div class="container">
			<PartTitle :eng="props.eng" :jpn="props.jpn"/>
			<div class="card-wrapper">
				<PartCard1 v-for="card in props.cards" :key="card.title" :house="card" @click="goDP($event, card.house_id)"></PartCard1>
			</div>
			<div class="see-more bacc"  @click="jump2page">もっと見る<fa icon="angle-right" class="fa-icon"/></div>
		</div>
	</div>
</template>

<script setup>
import PartTitle from "./Part-Title.vue";
import PartCard1 from "./Part-Card1.vue";

import { useRouter } from "vue-router";
const router = useRouter()

const props = defineProps(["cards", "url", "eng", "jpn"])

// go to detail page
const goDP = ($event, houseID) => {
	router.push(`/detailpage/${houseID}`)
}

const jump2page = () => {
	window.location.href = props.url
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
