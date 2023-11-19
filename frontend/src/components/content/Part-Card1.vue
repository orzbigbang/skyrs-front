<template>
    <div class="wrapper">
        <img class="img" :src="img">
        <span class="tag fc bc">{{ tag }}</span>
        <h5 class="title">{{ title }}</h5>
        <span class="price fc">{{ price }}</span>
        <span class="location attr"><fa class="fa-icon" icon="location-dot"/>{{ location }}</span>
        <span class="station attr"><fa class="fa-icon" icon="train"/>{{ station }}</span>
        <span class="attribute attr"><fa class="fa-icon" icon="building"/>{{ attribute }}</span>
    </div>
</template>
    
<script setup>
    const props = defineProps({
        house: Object
    })

    const { house: {img, tag, title, price, location, station, attribute} } = props
    
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