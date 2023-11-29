<template>
    <div class="wrapper" :style="{backgroundColor: `${props.card.color}`}" @click="jump2page">
        <div>
            <fa class="icon" :icon="props.card.icon"/>
        </div>
        <span class="title">{{ props.card.title }}</span>
    </div>
</template>     
    
<script setup>
    const props = defineProps(["card"])

    const jump2page = () => {
        window.location.href = props.card.url
    }
</script>

<style scoped  lang='less'>
    .wrapper {
        width: 16rem;
        height: 7rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #000;
        cursor: pointer;
        transition: .2s;

        &:hover {
            box-shadow: 0 0 10px #aaa;
            border-radius: 20px;
        }

        .icon {
            font-size: 28px;
            margin-bottom: 6px;
        }

        .title {
            font-size: 18px;
        }
    }
</style>