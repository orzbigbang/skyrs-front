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
    import { inject } from "vue"

    import { useHouseStore } from '@/stores/house.js'
    const houseStore = useHouseStore()

    import { useHeader } from '@/composition/userInfo.js'
	const apiURL = inject("apiURL")
    const headers = useHeader()

    const props = defineProps({
        item: Object,
    })
    const {item: {func, icon, title}} = props

    const emits = defineEmits(['on-click'])

    const getUserHistory = () => {
		const url = apiURL.getUser
		const params = {}
        houseStore.getHouseList(url, params, headers, 1)
    }

    const showModal = () => {
        getUserHistory()
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
