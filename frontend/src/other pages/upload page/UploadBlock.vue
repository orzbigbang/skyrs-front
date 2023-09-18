<template>
    <div class="outer container">
        <div class="title">
            {{ props.block.title }}
            <div class="description">{{ props.block.description }}</div>
            <slot></slot>
        </div>
    </div>
</template>
    
<script setup>
    const props = defineProps({
        block: Object
    })
</script>
    
<style scoped>
    .outer {
        min-height: 20rem;
        margin: 20px auto;
        padding: 30px 0;
        border: 6px dashed #666;
        position: relative;
        text-align: center;       
    }

    .outer:nth-child(1) {
        min-height: 21rem;
        padding-top: 1.3rem;
    }

    .outer:nth-child(2) {
        min-height: 21rem;
        padding-top: 1.3rem;
    }

    .outer:nth-child(3) {
        min-height: 5rem;
        padding-top: 1.3rem;
    }

    .outer:nth-child(4) {
        min-height: 12rem;
        padding-top: 1.3rem;
    }

    .outer:nth-child(5) {
        min-height: 22rem;
        padding-top: 1.3rem;
    }

    .outer .title {
        font-size: 20px;
        font-weight: bold;
    }

    .outer .description {
        margin-top: 20px;
        font-size: 1rem;
        font-weight: normal;
    }

    :slotted(.upload) {
        width: 100px;
        height: 30px;
        font-size: 14px;
        position: absolute;
        left: 50%;
        bottom: 10%;
        transform: translateX(-50%);
    }

    :slotted(form) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    :slotted(.input) {
        width: 16rem;
        height: 23px;
        margin-bottom: 10px;
    }

    :slotted(.input.title) {
        width: 370px;
        margin-bottom: 10px;
    }

    :slotted(textarea) {
        margin-bottom: 10px;
    }
    
    :slotted(.wrapper) {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>