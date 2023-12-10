<template>
    <div class="item-wrapper" :style="{backgroundColor: `${props.item.color}`}" @click="jump2page">
        <div>
            <fa class="icon" :icon="props.item.icon"/>
        </div>
        <span class="title">{{ props.item.title }}</span>
        <div class="cat-warpper">
            <span class="cat" v-for="cat in props.item.subitems">{{ cat.cat + "" + cat.desc }}</span>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(["item"])

    const jump2page = () => {
        window.open(props.item.url, '_blank')
    }
</script>

<style scoped lang='less'>
    .item-wrapper {
        width: 14rem;
        height: 9rem;
        margin-bottom: 1rem;
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #000;
        cursor: pointer;
        transition: .2s;

        &:nth-child(2n+1) {
            margin-right: 2rem;
        }

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
            text-decoration: underline;
        }

        .cat-warpper {
            display: flex;
            flex-direction: column;
            font-size: .7rem;
            color: #666;
        }
    }
</style>