<template>
    <Go2Top></Go2Top>

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
    import Go2Top from "@/components/functional/Go2Top.vue"


    // 隐藏和显示nav和footer功能
    import { useGlobalStore } from "@/stores/global";
    const globalStore = useGlobalStore();

    // 获取用户ID
    import cookieHandle from "@/assets/js/cookieHandler.js"
    import { useUserStore } from "@/stores/user.js"
    const userStore = useUserStore()
    userStore.user_id = cookieHandle.getCookie("user_id")

    
</script>

<style scoped lang="less">
</style>
