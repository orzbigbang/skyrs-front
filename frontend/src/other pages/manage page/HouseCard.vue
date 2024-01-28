<template>
    <div class="house-wrapper">
        <span class="id">{{ house.house_id }}</span>
        <div class="img-wrapper">
            <img class="img" :src="house.main_pic_url" @click="goEdit">
        </div>
        <div class="house-info">
            <span class="row price"><span class="value-title">名前：</span>{{ house.name }}</span>
            <span class="row price"><span class="value-title">価格：</span>{{ house.price.slice(0, -1) + "万円" }}</span>
            <span class="row location"><span class="value-title">住所：</span>{{ house.address }}</span>
            <span class="row madori"><span class="value-title">間取り：</span>{{ house.layout }}</span>
            <span class="row area"><span class="value-title">面積：</span>{{ house.area }}m²</span>
            <span class="row station"><span class="value-title">最寄り駅：</span>{{ house.station }}</span>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(
        {
            house: Object
        }
    )
    const {house} = props

    import { useRouter } from "vue-router";
    const router = useRouter()

    const goEdit = () => {
        router.push(`/nihao/${house.house_id}`)
    }
</script>

<style scoped lang="less">
    .house-wrapper {
        display: flex;
        padding: 30px 0;
        border-bottom: 1px #aaa dotted;

        &:nth-last-child(1) {
            border-bottom: none;
        }

        .id {
            line-height: 7;
            font-size: 24px;
        }

        .img {
            width: 200px;
            height: 200px;
            margin-left: 30px;
            cursor: pointer;
        }

        .house-info {
            margin-left: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .row {
                font-size: 18px;

                .value-title {
                    color: #666;
                }
            }
        }
    }
</style>
