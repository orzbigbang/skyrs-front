<template>
    <div class="wrapper"  @click="goDP">
        <img class="image" :src="props.item.main_pic_path">
        <div class="info-wrapper">
            <span class="name">{{ props.item.name }}</span>
            <span>{{ props.item.address }}</span>

            <div class="info-row">
                <span class="price">{{ props.item.price }} / </span>
                <span>{{ props.item.area }}m² / </span>
                <span>{{ props.item.layout }} / </span>
                <span>{{ props.item.number_of_floors }}</span>
            </div>
            <span>{{ props.item.station1 }}</span>
            <fa icon="star" class="fav" :class="{active: props.item.favorated}" @click.stop="favctl"/>
        </div>
    </div>
</template>
    
<script setup>
    import { inject } from 'vue'
    import { useRouter } from 'vue-router'
    const router = useRouter()

    import { useModalStore } from '@/stores/modal.js'
    const modalStore = useModalStore()

    // 使用 inject 访问全局变量
    const apiURL = inject('apiURL');

    const props = defineProps({
        item: Object
    })

    const goDP = () => {
        modalStore.closeModalSelection()
        router.push(`/detailpage/${props.item.house_id}`)
    }

    // const goSearch = () => {
    //     modalStore.closeModalSelection()
    //     router.push(`/detailpage/${props.item.house_id}`)
    // }

    const favctl = () => {
        console.log(apiURL)
    }
</script>
    
<style scoped lang='less'>
    .wrapper {
        width: 70%;
        height: 102px;
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

        .image {
            width: 25%;
            height: 100%;
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

            .name {
                font-size: 15px;
                font-weight: bold;
                color: #000;
            }

            .price {
                color: rgb(173, 42, 42);
            }

            .fav {
                font-size: 20px;
                color: #666;
                position: absolute;
                right: 2%;
                top: 50%;
                transform: translate(0, -50%);
                cursor: pointer;

                &:hover {
                    color: #999;
                }
            }

            .fav.active {
                color: rgb(64, 125, 238);

                &:hover {
                    color: rgb(31, 78, 122);
                }
            }
        }
    }
</style>