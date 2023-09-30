<template>
    <div class="wrapper">
        <img class="img" :src="props.house.img">
        <div class="tag fc bc">{{ props.house.tag }}</div>
        <div class="title">{{ props.house.title }}</div>
        <div class="price fc">{{ props.house.price }}</div>
        <div class="location attr"><fa class="fa-icon" icon="location-dot"/>{{ props.house.location }}</div>
        <div class="station attr"><fa class="fa-icon" icon="train"/>{{ props.house.station }}</div>
        <div class="attribute attr"><fa class="fa-icon" icon="building"/>{{ props.house.attribute }}</div>
    </div>
</template>
    
<script setup>
const props = defineProps({
    house: Object
})
    
</script>
    
<style scoped  lang='less'>
    .wrapper {
        width: 16rem;
        margin-bottom: 15px;
        margin-right: 24px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .img {
            width: 16rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
            transition: .1s;

            &:hover {
                box-shadow: 0 0 10px #999 ;
            }
        }

        .title {
            font-weight: bold;
        }

        .tag {
            margin: 8px 0;
            width: 120px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            font-size: 12px;
            border-radius: 12px;
        }

        .price {
            font-size: 1.2rem;
            font-weight: bold;
            margin: 0 0 5px;
        }

        .fa-icon {
            font-size: 14px;
            margin-right: 5px;
        }

        .attr {
            font-size: 13px;
            letter-spacing: 1px;
        }
    }

    @media screen and (max-width:700px) {
        .wrapper {
            width: 18rem;
            .img {
                width: 20rem;
            }
        }
    }   
</style>