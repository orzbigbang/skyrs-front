<template>
    <li class="sub-item" @click="goSearch($event, houseIndex)">
        {{ title }}
    </li>
</template>
    
<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()
    
    import { useConditionStore } from "@/stores/condition"
    const conditionStore = useConditionStore()

    const props = defineProps({
        subItem: Object
    })
    const {subItem: { houseIndex, title, route, func, params: {mode, type, new_}}} = props

    const goSearch = ($event, houseIndex) => {
        if (houseIndex) {
            conditionStore.houseIndex = houseIndex
        }
        if (props.subItem.type === "search") {
            conditionStore.mode = mode
            conditionStore.type = type
            conditionStore.new_ = new_
            if (conditionStore.isCitySet) {
                router.push(`/search/${conditionStore.cityIndex}/${mode}/${type}/${new_}`)
            } else {
                func()
            }
        } else {
            func(`${route}/${mode}`)
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
            color: #fff;
            background-color: rgb(31,78,121);
            border-radius: 30px;
        }
    }
</style>