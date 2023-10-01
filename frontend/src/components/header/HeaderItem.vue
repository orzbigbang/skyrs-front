<template>
    <div class="outer" @click="showModal">
        <fa class="icon fc" :icon="icon"/>
        <span class="fc">{{ title }}</span>
    </div>
</template>

<script setup>
    const props = defineProps({
        item: Object,
    })
    const {item: {func, icon, title}} = props

    const emits = defineEmits(['on-click'])

    const showModal = () => {
        emits('on-click', title)
        func()
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

    @media screen and (max-width:991.98px) {
        .outer {
            width: 9rem;
            margin-top: 12px;
            padding: 0;
        }
    }

    @media screen and (max-width:441px) {
        .outer {
            width: 8rem;
            font-size: 15px;

            &:nth-last-child(1) {
                margin-right: 0;
            }
        }
    }

    // @media screen and (max-width:390px) {
    //     .outer {
    //         width: 8rem;
    //         padding: 0;
    //         margin-top: 5px;
    //         font-size: 15px;
    //     }
    // }
</style>
