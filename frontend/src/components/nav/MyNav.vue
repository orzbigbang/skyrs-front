<template>
    <nav class="nav fc" id="nav">
        <ul class="nav-wrapper">
            <NavItem 
                v-for="item, index in items" 
                :item="item" 
                :index="index" 
                :activeIndex="activeIndex" 
                @click="activate(index)" 
                @on-touch="deactivate">
            </NavItem>
        </ul>
    </nav>
</template>

<script setup>
    import NavItem from '@/components/nav/NavItem.vue'
    import { ref, onMounted, onBeforeMount } from 'vue'
    
    import {items} from '@/config/nav.js'

    // 点击激活index对应的二级菜单
    const activeIndex = ref(-1)
    const activate = (index) => {
        // 如果点击同一个按钮，则关闭二级菜单
        if (activeIndex.value === index) {
            deactivate()
        } else {
            activeIndex.value = index
        }
    }

    // 关闭所有二级菜单
    const deactivate = () => {
        activeIndex.value = -1
    }

    // 绑定点击屏幕时关闭所有二级菜单的事件
    const deactivateClick = ($event) => {
        const className = $event.target.className
        if (!(className === "sub-item" || className === "nav-item")) {
            deactivate()
        }
    }
    onMounted(() => {
        window.addEventListener("click", deactivateClick)
    })
    onBeforeMount(() => {
        window.addEventListener("click", deactivateClick)
    })
</script>

<style scoped lang="less">
    .nav {
        height: 70px;
        box-shadow: 0 3px 10px #ccc;
        background-color: #fff;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 100000;

        .nav-wrapper {
            width: 90%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }   

    @media screen and (max-width:540px) {
        .nav {
            height: 70px;
            .nav-wrapper {
                flex-wrap: wrap;
            }
        }   
    }
</style>
