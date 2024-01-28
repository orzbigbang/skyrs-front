<template>
    <div class="container outer">
        <h1>自社物件一覧</h1>
        <input type="text" class="search-box" placeholder="物件IDをご入力ください" v-model="searchBarInput" @input="filterHouse">
        <div class="house-list" v-if="houseListLoaded">
            <HouseCard v-for="house in searchBarInput === ''? houseList: filteredHouseList" :house="house"></HouseCard>
        </div>

        <img class="loading" src="@/assets/imgs/loader.gif" v-else>
    </div>
</template>

<script setup>
    import HouseCard from "./HouseCard.vue"
    import axios from 'axios'

    import { ref } from 'vue'

    import { useHeader } from '@/composition/userInfo.js'
    const headers = useHeader()

    import { apiURL } from '@/config/config.js'
    const url = apiURL.estate

    const params = {}

    axios.get(url, {params, headers}).then(
        value => {
            houseList.value = value.data
            houseListLoaded.value = true
        }
    ).catch(
        reason => {
            console.log(reason)
        }
    )

    const houseListLoaded = ref(false)
    const houseList = ref([])
    const searchBarInput = ref("")
    const filterHouse = () => {
        filteredHouseList.value = houseList.value.filter((e) => {
            return e.house_id == searchBarInput.value
        })
    }
    const filteredHouseList = ref([])
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
