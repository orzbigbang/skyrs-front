<template>
    <!-- <Go2Top></Go2Top> -->
    <Elevator>
        <template v-slot>
            <li v-for="floor in elevatorFloor"  @click="floor.func">
                <fa :icon="floor.icon" style="color: #fff; font-size: 1rem;"></fa>
            </li>
        </template>
    </Elevator>

	<MyHeader v-if="globalStore.isNavFooter"></MyHeader>
	<MyNav v-if="globalStore.isNavFooter"></MyNav>

    <router-view>
    </router-view>

	<MyFooter v-if="globalStore.isNavFooter"></MyFooter>
</template>

<script setup>
    import MyHeader from "@/components/header/MyHeader.vue";
    import MyNav from "@/components/nav/MyNav.vue";
    import MyFooter from "@/components/footer/MyFooter.vue";
    // import Go2Top from "@/components/functional/Go2Top.vue"
    import Elevator from "@/components/functional/Elevator.vue"

    import { useRouter } from 'vue-router'
    const router = useRouter()

    // 隐藏和显示nav和footer功能
    import { useGlobalStore } from "@/stores/global";
    const globalStore = useGlobalStore();

    // 获取用户ID
    import cookieHandle from "@/assets/js/cookieHandler.js"
    import { useUserStore } from "@/stores/user.js"
    const userStore = useUserStore()
    userStore.user_id = cookieHandle.getCookie("user_id")

    const elevatorFloor = [
    {
        title: '上一页', 
        icon: 'angle-left',
        func: () => {
            router.go(-1)
        }
    },
    {
        title: '重新加载', 
        icon: 'house',
        func: () => {
            router.push("/")
        }
    },
    {
        title: '回到顶部', 
        icon: 'angles-up',
        func: () => {
            document.body.scrollTo(0, 0)
        }
    }
]
</script>

<style scoped lang="less">
</style>
