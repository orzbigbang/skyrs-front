<template>
    <div class="house-wrapper">
        <img class="img" :src="props.house.main_pic_path" @click="goDP($event, props.house.house_id)">
        <div class="house-info">
            <span class="title" @click="goDP($event, props.house.house_id)">{{ props.house.name }}</span>
            <span class="location">{{ props.house.address }}</span>
            <span class="madori">{{ props.house.layout }}</span>
            <span class="area">{{ props.house.area }}m²</span>
            <span class="station">{{ props.house.station1}}</span>
            <span class="attribute">{{ props.house.house_struction + " / " + props.house.house_struction + " / " + props.house.number_of_floors}}</span>
        </div>

        <span class="price">{{ props.house.price }}</span>
    </div>
</template>
    
<script setup>
    import { useRouter } from "vue-router";
    const router = useRouter()

    const props = defineProps(
        {
            house: Object
        }
    )

    // go to detail page
    const goDP = ($event, houseID) => {
	router.push(`/detailpage/${houseID}`)
}
</script>
    
<style scoped  lang='less'>
    .house-wrapper {
        width: 100%;
        min-height: 180px;
        padding: 20px 0;
        border-bottom: 1px dotted #ccc;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
		align-items: center;
        position: relative;

        .img {
            width: 18rem;
            cursor: pointer;
        }

        .price {
            font-size: 24px;
            color: orangered;
            position: absolute;
            right: 0;
        }

        .house-info {
            width: 500px;
            height: 12rem;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: fle-starts;
            color: #555;

            .title {
                font-size: 20px;
                font-weight: bold;
                color: #000;
            }
        }
    }
</style>