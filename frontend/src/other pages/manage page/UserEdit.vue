<template>
    <div class="container" v-if="houseLoaded">
        <h1>{{ house.meta.name }}</h1>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    import { useRoute } from 'vue-router'
    const route = useRoute()

    import axios from 'axios'

    import { useHeader } from '@/composition/userInfo.js'
    const headers = useHeader()

    import { apiURL } from '@/config/config.js'
    const url = apiURL.estate + "/" + route.params.houseID

    const params = {}

    axios.get(url, {params, headers}).then(
        value => {
            console.log(value.data)
            house.value = value.data
            houseLoaded.value = true
        }
    ).catch(
        reason => {
            console.log(reason)
        }
    )

    const house = ref({})
    const houseLoaded = ref(false)
</script>

<style scoped lang="less">
    .block {
        width: 100%;
        height: 400px;
        margin-bottom: 30px;
        background-color: orange;
    }
</style>
