<template>
    <div class="wrapper">
        <div class="nav-item" @mouseenter="activate" @mouseleave="deactivate">
            {{ props.item.title }}
            <div class="bar" v-show="active"></div>
        </div>
        <div class="sub-item-wrapper" v-show="active" @mouseenter="activate" @mouseleave="deactivate">
            <NavSubItem v-for="item in props.item.subItem" :subItem="item"/>
        </div>
    </div>
</template>
    
<script setup>
    import { ref } from 'vue'

    import NavSubItem from '@/components/nav/NavSubItem.vue'

    const props = defineProps(
        {
            item: Object
        }
    )
    
    const active = ref(false)

    const activate = () => {
        active.value = true
    }

    const deactivate = () => {
        active.value = false
    }
</script>
    
<style lang="less">
    .wrapper {
        position: relative;

        .nav-item {
            width: 11rem;
            height: 100%;
            font-size: 20px;
            font-weight: bold;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all .1s linear;

            &:hover {
                color: #fff;
                background-color: rgb(31,78,121);
                border-radius: 30px;
            }
        }   

        .sub-item-wrapper {
            width: 17rem;
            background-color: #fff;
            border: 1px solid #999;
            box-shadow: 0 1px 5px #333;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            position: absolute;
            top: 100%;
            font-size: 16px;
            border-radius: 10px;
        }
    }
     
</style>