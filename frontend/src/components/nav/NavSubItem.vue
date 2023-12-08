<template>
    <li class="sub-item" :class="{'is-disable': disable}" @click="goSearch($event, houseIndex)" @touchstart.prevent="deactivate">
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
    
    const goSearch = ($event, houseIndex) => {
        if (disable) {
            return
        }
        // 触发二级菜单隐藏时间
        emits("on-touch")

        // 避免同一index重复触发
        if (conditionStore.houseIndex !== houseIndex) {
            houseStore.houseListLoaded = false
        }

        // 设置houseindex
        if (houseIndex) {
            conditionStore.houseIndex = houseIndex
        }

        // 跳转相应页面
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

    const deactivate = ($event, houseIndex) => {
        emits("on-touch")
        goSearch($event, houseIndex)
    }
</script>
    
<style scoped  lang='less'>
    .sub-item {
        width: 100%;
        padding: 20px;
        cursor: pointer;
        transition: all .1s linear;

        &:hover {
            color: #fff;
            background-color: rgb(31,78,121);
            border-radius: 30px;
        }

        &.is-disable {
            color: #aaa;
            cursor: auto;

            &:hover {
            color: #aaa;
                background-color: #fff;
            }
        }
    }
</style>