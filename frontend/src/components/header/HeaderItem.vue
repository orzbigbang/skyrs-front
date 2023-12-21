<template>
    <div class="outer abc" @click="showModal">
        <slot></slot>
        <div class="wrapper abc">
            <fa class="icon fc abc" :icon="icon"/>
            <span class="fc abc">{{ title }}</span>
        </div>
    </div>
</template>

<script setup>
    import { useHouseStore } from '@/stores/house.js'
    const houseStore = useHouseStore()

    const props = defineProps({
        item: Object,
    })
    const {item: {func, icon, title}} = props
    
    // 打开模态框且获取用户收藏和访问历史的房屋列表
	import { apiURL } from '@/config/config.js'
    import { useHeader } from '@/composition/userInfo.js'
    const emits = defineEmits(['on-click'])
    const url = apiURL.getUser
    const params = {}
    const headers = useHeader()
    const showModal = () => {
        // 如果是'エリアの変換'，则不用执行以下
        if (title === 'エリアの変換') {
            return
        }

        // 打开模态框，并设置title
        emits('on-click', title)
        func()
    
        // 如果是'お問い合わせ'，则不用发送请求
        if (title === 'お問い合わせ') {
            return
        }

        // 获取用户房屋列表
        houseStore.getHouseList(url, params, headers, 1)
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
        flex-direction: column;
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

    @media screen and (max-width:390px) {
        .outer {
            width: 8rem;
            margin-right: 8px;
            font-size: 14px;
        }
    }
</style>
