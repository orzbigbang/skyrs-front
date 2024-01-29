<template>
    <div class="container" v-if="houseLoaded">
        <h2>{{ "ID: " + house.meta.house_id }}</h2>
        <h2>{{ "名前: " + house.meta.name }}</h2>
        <form @submit.prevent="goSubmit">
            <button id="edit" v-if="!editing" type="button" @click="goEdit">Edit</button>
            <div class="button-wrapper" v-else>
                <button id="submit" type="submit">✔️Submit</button>
                <button id="cancel" type="button" @click="cancelEdit">❌Cancel</button>
            </div>
            <div class="block">
                <h3 class="sub-title">基本情報</h3>
                <div class="show-info" v-if="!editing">
                    {{ highlights }}
                    <br>
                    {{ bases }}
                </div>
                <div class="edit-info" v-else>
                    <textarea name="" v-model="house.highlights"></textarea>
                </div>
            </div>
            <div class="block">
                <h3 class="sub-title">おすすめポイント</h3>
                <div class="show-info" v-if="!editing">
                    {{ bulletpoints }}
                </div>
                <div class="edit-info" v-else>
                    <textarea name="" v-model="house.highlights"></textarea>
                </div>
            </div>
            <div class="block">
                <h3 class="sub-title">設備</h3>
                <div class="show-info" v-if="!editing">
                    {{ icons }}
                </div>
                <div class="edit-info" v-else>
                    <textarea name="" v-model="house.highlights"></textarea>
                </div>
            </div>
            <div class="block">
                <h3 class="sub-title">その他の情報</h3>
                <div class="show-info" v-if="!editing">
                    {{ otherInfoTable }}
                </div>
                <div class="edit-info" v-else>
                    <textarea name="" v-model="house.highlights"></textarea>
                </div>
            </div>
            <div class="block">
                <h3 class="sub-title">その他の特徴</h3>
                <div class="show-info" v-if="!editing">
                    {{ otherInfoList }}
                </div>
                <div class="edit-info" v-else>
                    <textarea name="" v-model="house.highlights"></textarea>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'

    import { useRoute } from 'vue-router'
    const route = useRoute()

    import axios from 'axios'

    import { useHeader } from '@/composition/userInfo.js'
    const headers = useHeader()

    import { apiURL } from '@/config/config.js'
    const url = apiURL.estate + "/" + route.params.houseID

    const params = {}

    // get house info
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

    const highlights = computed(() => {
        return house.value.highlights
    })

    const bases = computed(() => {
        return house.value.bases
    })

    const bulletpoints = computed(() => {
        return house.value.bulletpoints
    })

    const icons = computed(() => {
        return house.value.icons
    })

    const otherInfoTable = computed(() => {
        return house.value.otherInfoTable
    })

    const otherInfoList = computed(() => {
        return house.value.otherInfoList
    })

    // rendering house info
    const key_map = {

    }
    const convert_key = (key) => {
        return key_map[key] === undefined? "": key_map[key]
    }

    const render_highlights = (data) => {
        for (key in data.highlights) {

        }
    }

    // edit function
    const editing = ref(false)

    const goEdit = () => {
        editing.value = true
    }

    const cancelEdit = () => {
        editing.value = false
    }

    const goSubmit = () => {
        editing.value = false
    }
</script>

<style scoped lang="less">
    h2 {
        margin-bottom: 20px;
    }

    button {
        width: 100px;
        height: 30px;
        margin-right: 20px;
        font-size: 16px;
    }

    textarea {
        width: 100%;
        padding: 5px;
        font-size: 14px;
    }

    .block {
        width: 100%;
        min-height: 100px;
        margin: 30px 0;
        padding: 10px 20px;
        border: 1px solid #666;

        .sub-title {
            margin-bottom: 10px;
            text-decoration: underline;
            color: #333;
        }
    }
</style>
