<template>
    <div class="wrapper">
        <div class="title">{{ props.title }}</div>
        <p class="detail">{{ props.detail }}</p>
        <slot>
        </slot>
    </div>
    
</template>
    
<script setup>
    const props = defineProps({
        title: String,
        detail: String,
    })
</script>
    
<style scoped lang="less">
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .title {
            font-size: 40px;
            font-weight: bold;
        }

        .detail {
            margin: 20px 0;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 2px;
        }
    }
</style>