<template>
    <div class="outer" @click="headerItemFunc">
        <fa class="icon fc" :icon="props.item.icon"/>
        <span class="fc">{{ props.item.title }}</span>
    </div>
</template>

<script setup>
    const props = defineProps({
        item: Object,
    })

    const headerItemFunc = () => {
        props.item.func(props.item.route)
        props.item.func1()
    }
</script>

<style scoped lang="less">
    .outer {
        width: 8rem;
        height: 3rem;
        padding: 5px 10px;
        margin-right: 15px;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 5px;
        transition: all .1s linear;
        cursor: pointer;

        &:hover {
            background-color: #eee6;
            border-radius: 30px;
        }

        .icon {
            margin-right: 5px;
            font-size: 1rem;
        }
    }
</style>
