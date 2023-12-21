<template>
    <li class="sub-item" 
        :class="{'is-disable': disable}" 
        @click="goSearch(houseIndex)" 
        @touchstart.prevent="goSearch(houseIndex, true)"
    >
        {{ title }}
    </li>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()
    
    import { useConditionStore } from "@/stores/condition"
    const conditionStore = useConditionStore()

    import { useHouseStore } from "@/stores/house"
	const houseStore = useHouseStore()

    import { useQueryStore } from "@/stores/query"
	const queryStore = useQueryStore()

    const props = defineProps({
        subItem: Object
    })
    const {subItem: { houseIndex, title, route, func, params: {mode, type, new_}, config: {disable}}} = props

    const emits = defineEmits(['on-touch'])
    
    // 点击跳转到搜索页面
    const goSearch = (houseIndex, touch=false) => {
        // 如果设置了disable的话不采取任何行动
        if (disable) {
            return
        }

        // 触屏时候触发二级菜单隐藏事件
        if (touch) {
            emits("on-touch")
        }

        // 避免同一index重复触发加载动画
        if (conditionStore.houseIndex !== houseIndex) {
            houseStore.houseListLoaded = false
        }

        // 设置houseindex
        if (houseIndex) {
            conditionStore.houseIndex = houseIndex
        }

        //设置store变量，并跳转相应页面
        if (props.subItem.type === "search") {
            conditionStore.mode = mode
            conditionStore.type = type
            conditionStore.new_ = new_
            router.push(`/search/${conditionStore.cityIndex}/${mode}/${type}/${new_}`)
        } else if (props.subItem.type === "company") {
            router.push(`${route}`)
        } else if (props.subItem.type === "query") {
            queryStore.queryType = title
            router.push(`${route}/${mode}`)
        }
    }
</script>
    
<style scoped  lang='less'>
    .sub-item {
        width: 100%;
        padding: 20px;
        cursor: pointer;
        transition: all .1s linear;

        &:hover {
            border-radius: 10px;
            background-color: rgb(243, 243, 243);
        }

        &.is-disable {
            color: #aaa;
            cursor: auto;

            &:hover {
                background-color: #fff;
            }
        }
    }
</style>