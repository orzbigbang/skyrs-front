<template>
    <div class="wrapper">
        <img class="img" :src="apiURL.mediaAtbbURL + house.img">
        <span class="tag fc bc">{{ house.tag }}</span>
        <span class="price fc">{{ house.price }}</span>
        <span class="layout attr"><fa class="fa-icon" icon="building"/>{{ house.layout }}</span>
        <span class="area attr"><fa class="fa-icon" icon="location-dot"/>{{ house.area }}</span>
        <span class="station attr"><fa class="fa-icon" icon="train"/>{{ house.station }}</span>
    </div>
</template>
    
<script setup>
    import { apiURL } from '@/config/config.js'

    const props = defineProps({
        house: Object,
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
            height: 14rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
            transition: .2s;

            &:hover {
                border-radius: 10px;
                box-shadow: 0 0 10px #999 ;
            }
        }

        .title {
            font-size: 15px;
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