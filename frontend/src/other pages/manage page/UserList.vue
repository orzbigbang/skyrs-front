<template>
    <div class="container outer">
        <h1>ユーザー一覧</h1>
        <input type="text" class="search-box" placeholder="User IDをご入力ください" v-model="searchBarInput" @input="filterUser">
        <div class="user-list" v-if="userListLoaded">
            <UserCard v-for="user in searchBarInput === ''? userList: filteredUserList" :user="user"/>
        </div>

        <img class="loading" src="@/assets/imgs/loader.gif" v-else>
    </div>
</template>

<script setup>
    import UserCard from "./UserCard.vue"

    import { ref } from 'vue'

    const userListLoaded = ref(false)
    const userList = ref([
        {
            user_id: "1",
            name: "test1",
            authority_code: "管理者",
            tel: "090-1234-4321",
            email: "test@test.com",
            created_at: "2023-12-12 10:32:17"
        },
        {
            user_id: "2",
            name: "test2",
            authority_code: "内部ユーザー",
            tel: "090-1234-4321",
            email: "test@test.com",
            created_at: "2023-12-12 10:34:41"
        },
        {
            user_id: "3",
            name: "test3",
            authority_code: "内部ユーザー",
            tel: "090-1234-4321",
            email: "test@test.com",
            created_at: "2023-12-12 11:02:07"
        },
        {
            user_id: "4",
            name: "test4",
            authority_code: "外部顧客",
            tel: "090-1234-4321",
            email: "test@test.com",
            created_at: "2023-12-12 11:04:31"
        },
    ])
    const searchBarInput = ref("")
    const filterUser = () => {
        filteredUserList.value = userList.value.filter((e) => {
            return e.user_id == searchBarInput.value
        })
    }
    const filteredUserList = ref([])

    setTimeout(() => {userListLoaded.value = true}, 600)
</script>

<style scoped lang="less">
    .outer { 
        position: relative;
    }

    h1 {
        margin: 25px 0;
        text-align: center;
    }

    input.search-box {
        width: 200px;
        height: 26px;
        position: absolute;
        top: 12px;
        right: 0;
    }

    .loading {
        display: block;
        margin: 0 auto;
    }
</style>
