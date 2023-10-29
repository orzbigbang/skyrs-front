<template>
    <div class="wrapper"  @click="goDP">
        <img class="image" :src="hostURL + props.item.main_pic_url">
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
            <fa icon="star" class="fav" :class="{active: faved}" @click.stop="add2fav"/>
        </div>
    </div>
</template>
    
<script setup>
    import { ref, inject } from 'vue'
    import { useRouter } from 'vue-router'
    const router = useRouter()

    import { useModalStore } from '@/stores/modal.js'
    const modalStore = useModalStore()

    import { hostURL } from '@/composition/api.js'

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

    // 收藏功能
    import { useAdd2fav } from "@/composition/favorate.js"
    const faved = ref(props.item.faved)
    const url = apiURL.addFavorate
    const add2fav = () => {useAdd2fav(faved, url, props.item.house_id)}
</script>
    
<style scoped lang='less'>
    .wrapper {
        width: 80%;
        height: 7rem;
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
        position: relative;

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

    @media screen and (max-width:700px) {
        .wrapper {
            height: 9rem;

            .image {
                width: 35%;
            }

            .info-wrapper {
                width: 65%;

                .fav {
                    font-size: 1.3rem;
                    right: 2%;
                    top: 10%;
                    transform: translate(0, 0);
                }
            }
        }
    }

    @media screen and (max-width:575px) {
        .wrapper {

            .image {
                display: none;
            }

            .info-wrapper {
                width: 100%;
            }
        }
    }
</style>