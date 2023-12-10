<template>
    <div class="house-wrapper">
        <div class="img-wrapper">
            <img class="img" :src="props.house.img" @click="jump2page">
            <span class="view">
                閲覧：{{ viewCount? viewCount: "0" }} 
            </span>
        </div>
        <div class="house-info">
            <h5 class="title" @click.self="jump2page">
                {{ props.house.name }}
                <fa class="icon" :class="{active: faved}" icon="star" @click="add2fav"/>
            </h5>
            <span class="location">{{ props.house.address }}</span>
            <span class="madori">{{ props.house.layout }}</span>
            <span class="area">{{ props.house.area }}m²</span>
            <span class="station">{{ props.house.station}}</span>
        </div>

        <span class="price">{{ (props.house.price / 10000).toLocaleString() + "万円" }}</span>
    </div>
</template>
    
<script setup>
    import { computed } from 'vue'

    import { useHouseStore } from '@/stores/house.js'
    const houseStore = useHouseStore()

    const props = defineProps(
        {
            house: Object
        }
    )

    // house_id
    const houseID = computed(() => props.house.house_id)

    // go to atbb page
    const jump2page = () => {
        window.open(props.house.url, '_blank')
    }

    // view count
    const viewCount = computed(() => {
        return houseStore.viewCount[props.house.house_id]
    })

    // add to favorate
    const faved = computed({
        get: () => {
            return props.house.faved
        },
        set: (val) => {
            props.house.faved = val
        }
    })
    import { useAdd2fav } from "@/composition/favorate.js"
    const add2fav = () => {useAdd2fav(faved, houseID.value)}
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

        .img-wrapper {
            position: relative;

            .view {
                font-size: 12px;
                color: #fff;
                position: absolute;
                top: 5px;
                left: 5px;
                background-color: rgba(128, 128, 128, 0.27)    ;
            }
        }

        .img {
            min-width: 18rem;
            max-width: 18rem;
            height: 15rem;
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
            width: 70%;
            height: 12rem;
            padding-left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: fle-starts;
            color: #555;

            .title {
                font-size: 20px;
                font-weight: bold;
                color: #000;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                flex-wrap: nowrap;

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
                width: 12rem;
                height: 12rem;
                margin-bottom: -40px;
            }

            .price {
                left: 5%;
                top: 16%;
            }
            
            .house-info {
                justify-content: space-around;

                .title {
                    font-size: 17px;
                }

                span {
                    margin-bottom: 3px;
                }
            }
        }
    }

    @media screen and (max-width:450px) {
        .house-wrapper {
            .img {
                width: 10rem;
                min-width: 9rem;
            }

            .price {
                font-size: 20px;
                left: 3%;
                top: 10%;
            }

            .house-info {
                min-height: 16rem;
                .title {
                    font-size: 16px;

                    .icon {
                        font-size: 16px;
                    }
                }
            }
        }
    }

    @media screen and (max-width:370px) {
        .house-wrapper {
            .img {
                width: 8rem;
                min-width: 8rem;
            }

            .price {
                font-size: 18px;
            }
        }
    }
</style>