<template>
    <div class="wrapper">
        <div class="img" :style="{ 'background-image': `url('${props.card.img}')` }" ></div>
        <div class="info-wrapper">
            <div class="title">{{ props.card.title }}</div>
            <div class="category">{{ props.card.category }}</div>
            <div class="bar"></div>
            <div class="detail">{{ props.card.detail }}</div>
        </div>
    </div>
</template>
    
<script setup>
    const props = defineProps({
        card: Object
    })
</script>
    
<style scoped  lang='less'>
    .wrapper {
        width: 20rem;
        height: 24rem;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 10px #999;
        transition: .2s;
        cursor: pointer;

        &:hover {
            box-shadow: 0 0 20px #666;
        }

        .img {
            width: 100%;
            height: 50%;
            background-size: cover;
        }

        .info-wrapper {
            height: 50%;
            padding: 15px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            background-color: #fff;

            .title {
                font-size: 1.3rem;
                font-weight: bold;
            }

            .category {
                font-size: 1rem;
                font-weight: bold;
            }

            .bar {
                width: 100%;
                border: 1px solid #000;
                margin: 5px 0;
            }

            // .detail {

            // }
        }
    }
</style>