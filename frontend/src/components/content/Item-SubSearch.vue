<template>
    <div class="wrapper">
        <div class="title-wrapper">
            <span class="title">{{ props.title }}</span>
            <span class="subtitle">{{ props.subtitle }}</span>
        </div>
        <div class="card-wrapper" v-for="item in props.items">
            <PartSearchCard
                v-for="card in item"
                :key="card.title"
                :item="card"
            />
        </div>
    </div>
</template>
    
<script setup>
import PartSearchCard from "./Part-SearchCard.vue";

const props = defineProps(["title", "subtitle", "backgroundColor", "items"])
    
</script>
    
<style scoped lang='less'>
    .wrapper {
		display: flex;
		flex-direction: column;
        padding: 1rem;

        .title-wrapper {
            margin-bottom: .5rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .title {
                font-size: 24px;
                font-weight: bold;
            }

            .subtitle {
                font-size: 1rem;
            }
        }

        .card-wrapper {
            display: flex;
        }
	}
</style>