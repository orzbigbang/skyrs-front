<template>
    <div class="wrapper" @click="jump2page">
        <img class="img" :src="img">
        <div class="info-wrapper">
            <span class="title">{{ title }}</span>
            <span class="category">{{ category }}</span>
            <div class="bar"></div>
            <p class="detail">{{ detail }}</p>
        </div>
    </div>
</template>
    
<script setup>
    const props = defineProps({
        card: Object
    })

    const { card: {img, title, category, detail, url} } = props

    const jump2page = () => {
        window.open(url, "_blank")
    }
</script>
    
<style scoped  lang='less'>
    .wrapper {
        width: 30%;
        max-width: 20rem;
        min-height: 24rem;
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
            height: 12rem;
            background-size: cover;
        }

        .info-wrapper {
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
        }
    }

    @media screen and (max-width: 700px) {
        .wrapper {
            width: 20rem;
        }
    }
</style>