<template>
    <div class="wrapper">
        <div class="img" :style="{ 'background-image': `url('${props.card.img}')` }" ></div>
        <div class="info-wrapper">
            <div class="name">{{ props.card.name }}</div>
            <div class="bar"></div>
            <div class="phone"><fa icon="phone" class="fa-icon"/>{{ props.card.phone }}</div>
            <div class="location">{{ props.card.location }}</div>
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
        height: 20rem;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
        border-radius: 5px;

        .img {
            width: 100%;
            height: 50%;
            background-size: cover;
        }

        .info-wrapper {
            width: 80%;
            height: 50%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            .name {
                font-size: 1.3rem;
            }

            .bar {
                width: 100%;
                border: 1px solid #000;
            }

            .phone {
                font-weight: bold;

                .fa-icon {
                    margin-top: 20px;
                    margin-right: 10px;
                }
            }
        }
    }
</style>