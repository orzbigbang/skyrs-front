<template>
    <div class="house-wrapper">
        <img class="img" :src="props.house.main_pic_path" @click="goDP">
        <div class="house-info">
            <span class="title" @click.self="goDP">
                {{ props.house.name }}
                <fa class="icon" :class="{active: faved}" icon="star" @click="add2fav"/>
            </span>
            <span class="location">{{ props.house.address }}</span>
            <span class="madori">{{ props.house.layout }}</span>
            <span class="area">{{ props.house.area }}m²</span>
            <span class="station">{{ props.house.station}}</span>
            <span class="attribute">{{ props.house.house_struction + " / " + props.house.house_struction + " / " + props.house.number_of_floors}}</span>
        </div>

        <span class="price">{{ props.house.price }}</span>
    </div>
</template>
    
<script setup>
    import { ref, inject } from 'vue'
    import { useRouter } from "vue-router";
    const router = useRouter()

    const props = defineProps(
        {
            house: Object
        }
    )

    const apiURL = inject("apiURL")

    // house_id
    const houseID = props.house.house_id

    // go to detail page
    const goDP = () => {
        router.push(`/detailpage/${houseID}`)
    }

    // add to favorate
    import { useAdd2fav } from "@/composition/favorate.js"
    const faved = ref(props.house.faved)
    const url = `${apiURL}favorate`
    const add2fav = () => {useAdd2fav(faved, url, houseID)}
</script>
    
<style scoped  lang='less'>
    .house-wrapper {
        width: 100%;
        min-height: 180px;
        padding: 20px 0;
        border-bottom: 1px dotted #ccc;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
		align-items: center;
        position: relative;

        .img {
            width: 18rem;
            border: 1px solid #ddd;
            cursor: pointer;
        }

        .price {
            font-size: 24px;
            color: orangered;
            position: absolute;
            right: 0;
        }

        .house-info {
            width: 500px;
            height: 12rem;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: fle-starts;
            color: #555;

            .title {
                font-size: 20px;
                font-weight: bold;
                color: #000;

                .icon {
                    font-size: 18px;
                    color: #999;
                    cursor: pointer;
                    transition: .1s;

                    &:hover {
                        color: #666;
                    }
                }

                .icon.active {
                    color: rgb(88, 153, 214);

                    &:hover {
                        color: rgb(31, 78, 122);
                    }
                }
            }
        }
    }

    @media screen and (max-width:700px) {
        .house-wrapper {
            .img {
                width: 13rem;
                margin-bottom: -30px;
            }

            .price {
                left: 8%;
                top: 10%;
            }
            
            .house-info {
                justify-content: space-around;
            }
        }
    }

    @media screen and (max-width:391px) {
        .house-wrapper {
            .img {
                width: 11rem;
            }

            .price {
                font-size: 24px;
            }

            .house-info {
                .title {
                    font-size: 18px;

                    .icon {
                        font-size: 16px;
                    }
                }
            }
        }
    }
</style>