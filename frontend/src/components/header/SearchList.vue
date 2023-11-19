<template>
    <div class="wrapper"  @click="goSearch">
        <div class="fc-wrapper">
            <p class="city">{{ city }}</p>
            <span class="mode">{{ mode }}</span>
            <span class="type">{{ type }}</span>
            <span class="new_">{{ new_ }}</span>
        </div>
        <div class="info-wrapper">
            <div class="info-row">
                
            </div>
            <div class="info-row">
                
            </div>
        </div>
    </div>
</template>
    
<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()

    import { useModalStore } from '@/stores/modal.js'
    const modalStore = useModalStore()

    const { item } = defineProps(["item"])
    const { city, mode, type, new_, fc, price, area, station_time, layout, other } = item

    // 点击事件 -> 跳转到相应的搜索页面
    const goSearch = () => {
        modalStore.closeModalSelection()
        router.push(`/search/${city}/${mode}/${type}/${new_}`)
    }

</script>
    
<style scoped lang='less'>
    .wrapper {
        width: 70%;
        height: 106px;
        margin-bottom: 10px;
        border: 1px #ddd solid;
        border-radius: 5px;
        flex-shrink: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        transition: .1s;

        &:hover {
            // background-color: #eee;
            box-shadow: 0 0 10px #ccc;
        }

        .fc-wrapper {
            width: 25%;
            height: 100%;
            text-align: center;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }

        .info-wrapper {
            width: 75%;
            height: 100%;
            padding: 5px 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
            color: #555;
            position: relative;
        }
    }
</style>