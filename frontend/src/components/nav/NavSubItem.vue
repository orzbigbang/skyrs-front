<template>
    <Transition name="fade">
        <div class="sub-item" @click="goSearch($event, props.subItem.houseIndex)">
            {{ props.subItem.title }}
        </div>
    </Transition>
</template>
    
<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()
    
    import { useConditionStore } from "@/stores/condition"
    const conditionStore = useConditionStore()

    const props = defineProps({
        subItem: Object
    })

    const goSearch = ($event, houseIndex) => {
        if (houseIndex) conditionStore.houseIndex = houseIndex
        if (props.subItem.type === "search") {
            conditionStore.mode = props.subItem.params.mode
            conditionStore.type = props.subItem.params.type
            conditionStore.new_ = props.subItem.params.new_
            if (conditionStore.isCitySet) {
                router.push(`/search/${conditionStore.cityIndex}/${conditionStore.mode}/${conditionStore.type}/${conditionStore.new_}`)
            } else {
                props.subItem.func()
            }
        } else {
            props.subItem.func(`${props.subItem.route}/${props.subItem.params.mode}`)
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