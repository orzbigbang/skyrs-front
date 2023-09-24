<template>
    <div class="container">
        <MyTag>基本情報</MyTag>
        <div class="title-wrapper block">
            <div class="title">
                {{ title }}
                <fa class="icon" :class="{active: faved}" icon="star" @click="add2Fav()"/>
            </div>
            <div class="brief kv-wrapper">
                <KeyValue v-for="highlight in highlights" :highlight="highlight"></KeyValue>
            </div>
        </div>
        <div class="carousel-wrapper block">
            <div class="carousel">
                <div class="big-pic" :style="{backgroundImage: `url('${images[activeImageIndex]}')`}"></div>
                <div class="small-pic-outer">
                    <fa class="arrow-left arrow fc" icon="angle-left" @click="goLeft"/>
                    <fa class="arrow-right arrow fc" icon="angle-right" @click="goRight"/>
                    <div  class="small-pic-wrapper" :style="{transform: `translateX(${offSetX}px)`}">
                        <div class="small-pic" 
                            :class="{active: activeImageIndex === index}" 
                            :style="{backgroundImage: `url('${image}')`}" 
                            @click="activeImageIndex = index"
                            v-for="(image, index) in images"> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="base-info">
                <KeyValue1 v-for="base in bases" :base="base"></KeyValue1>

                <div class="contact-method" @click="modalStore.showQuerySelection">
                    <fa icon="envelope"/>
                    お問い合わせ
                </div>
            </div>
        </div>

        <MyTag>おすすめポイント</MyTag>
        <div class="bullet-point-wrapper block">
            <p class="bullet-point-title">
                {{ bpTitle }}
            </p>
            <p class="bullet-point-desc">
                {{ bpDesc }}
            </p>
            <span class="bullet-point" v-for="bp in bulletPoints">◎{{ bp }}</span>
        </div>

        <MyTag>設備・その他の情報</MyTag>
        <div class="spec-wrapper block">
            <div class="icon-info-wrapper">
                <div class="icon-row" v-for="row in icons">
                    <div class="icon-category">
                        {{ row.title }}
                    </div>
                    <div class="icons">
                        <div class="icon-wrapper" v-for="icon in row.items">
                            <i class="icon" :style="{backgroundPosition: `${icon.offset}px 0`}"></i>
                            <div class="icon-title">{{ icon.title }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="other-info-table-wrapper">
                <table class="other-info">
                    <tbody>
                        <tr v-for="{_key1, _value1, _key2, _value2} in otherInfoTable">
                            <th>{{ _key1 }}</th>
                            <td>{{ Object.values(_value1)[0] }}</td>
                            <th>{{ _key2 }}</th>
                            <td>{{ Object.values(_value2)[0] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="other-info-list-wrapper">
                <span class="other">その他の特徴<br></span>
                <span v-for="l, index in otherInfoList"> {{ index === 0? "": " / " }} {{ l }}</span>
            </div>
        </div>

        <div class="map-wrapper block">
            <iframe
                :src="googleMapUrl"
                width="100%" height="99%" style="border:0;" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" data-aos="fade-right">
            </iframe>
        </div>  

        <div class="query-form-wrapper block">
            <div class="title">
                この物件にお問い合わせ
            </div>
            <span class="desc">
                お問い合わせの内容を選択してください
            </span>
            <div class="wrapper">
                <label>
                    <input type="radio" name="query-type">
                    最新の空室状況を知りたい
                </label>
                <label>
                    <input type="radio" name="query-type">
                    実際に見学したい

                </label>
                <label>
                    <input type="radio" name="query-type" checked>
                    その他の問い合わせ
                </label>
            </div>
            <div class="contact-method"  @click="modalStore.showQuerySelection">
                <fa icon="envelope"/>
                お問い合わせ
            </div>
            <div class="divider"></div>
        </div>


        <MyTag>その他のおすすめ部屋</MyTag>
        <div class="recommend-wrapper block">
            <HouseCard v-for="house in recommendHouseList" :keys="house.title" :house="house"/>
        </div>
    </div>

    <ModalBox :title="'お問い合わせ'" v-show="modalStore.isQuerySelection">
		<HouseQuery></HouseQuery>
    </ModalBox>
</template>
    
<script setup>
    import MyTag from '@/components/functional/MyTag.vue';
    import KeyValue from './KeyValue.vue'
    import KeyValue1 from './KeyValue1.vue'
    import HouseCard from "../search page/HouseCard.vue";
    import ModalBox from '@/components/functional/ModalBox.vue';
	import HouseQuery from './HouseQuery.vue';

    import { ref, computed, inject } from 'vue';
    import { useRoute } from 'vue-router'
    const route = useRoute()
    
    import { useConditionStore } from '@/stores/condition'
    const conditionStore = useConditionStore()

    import { useUserStore } from "@/stores/user"
    const userStore = useUserStore()

    import { useModalStore } from '@/stores/modal';
    const modalStore = useModalStore()

    import { useHouseStore } from '@/stores/house';
    const houseStore = useHouseStore()

    import { useDPStore } from '@/stores/dp';
    const dpStore = useDPStore()

    // get house_id
    const houseID = route.params.houseID

    // get house type
    const houseIndex = computed(() => {
        return conditionStore.houseIndex
    })

    // get static data according to house type
    const title = computed(() => {
        return dpStore.title
    })
    const faved = computed(() => {
        return dpStore.faved
    })
    const highlights = computed(() => {
        return dpStore.highlights
    })
    const images = computed(() => {
        return dpStore.images
    })
    const bases = computed(() => {
        return dpStore.bases
    })
    const icons = computed(() => {
        return dpStore.icons
    })
    const otherInfoTable = computed(() => {
        return dpStore.otherInfoTable
    })
    const bpTitle = computed(() => {
        return dpStore.bpTitle
    })
    const bpDesc = computed(() => {
        return dpStore.bpDesc
    })
    const bulletPoints = computed(() => {
        return dpStore.bulletPoints
    })
    const otherInfoList = computed(() => {
        return dpStore.otherInfoList
    })
    const address = computed(() => {
        return dpStore.address
    })
    
    // get house data
    const apiURL = inject("apiURL")
    const headers = {Authorization: userStore.user_id}
    const getHouseData = () => {
        const url = `${apiURL}estate/${houseID}`
        const params = {}
        dpStore.getDP(url, params, headers)
    }
    getHouseData()

    // add to favorate
    const add2Fav = () => {
        faved.value = !faved.value
        const url = `${apiURL}favorate`
        const data = {house_id: houseID}
        houseStore.add2Fav(url, data, headers)
    }

    // carousel function
    const activeImageIndex = ref(0)
    const offSetX = ref(0)

    const goLeft = () => {
        activeImageIndex.value = activeImageIndex.value? activeImageIndex.value - 1: activeImageIndex.value
    }
    const goRight = () => {
        activeImageIndex.value = activeImageIndex.value === images.value.length - 1? activeImageIndex.value: activeImageIndex.value + 1
    }

    // get google map
    const googleMapUrl = computed(() => {
        return `https://www.google.com/maps?q=${address.value}&output=embed`
    })
    
    // get recommend house list
    import recommendHouseLists from "./recommendHouseList"
    const recommendHouseList = ref(recommendHouseLists);
</script>
    
<style scoped lang="less">
    .container {
        min-height: 100vh;

        .block {
            margin-bottom: 20px;
        }

        .kv-wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    .title-wrapper {
        
        .brief {
            margin-top: 10px;
        }
        .title {
            font-size: 20px;
            font-weight: bold;

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

    .carousel-wrapper {
        padding: 20px 0;
        display: flex;
        flex-direction: row;

        .carousel {
            width: 546px;
            height: 500px;
            margin-right: 20px;

            .big-pic {
                width: 100%;
                height: 386px;
                margin-bottom: 24px;
                background-size: cover;
                box-shadow: 0 0 10px #bbb;
            }

            .small-pic-outer {
                height: 90px;
                padding: 0 30px;

                position: relative;

                .arrow {
                    position: absolute;
                    font-size: 40px;
                    top: 50%;
                    transform: translateY(-50%);
                    cursor: pointer;

                    &:hover {
                        color: rgb(7, 51, 91);
                    }
                }

                .arrow-left {
                    left: 0;
                }

                .arrow-right {
                    right: 0;
                }

                .small-pic-wrapper {
                    display: flex;
                    flex-wrap: nowrap;
                    overflow-x: hidden;
                    .small-pic {
                        width: 99px;
                        height: 90px;
                        margin-right: 30px;
                        flex-shrink: 0;
                        background-size: cover;
                        border: 1px #ccc solid;
                        transition: .2s;
                        cursor: pointer;

                        &:hover {
                            box-shadow: 0 0 10px rgb(131, 131, 177);
                        }
                    }

                    .small-pic.active {
                        border: 3px solid rgb(67, 67, 163) ;
                    }
                }
            }
        }

        .base-info {
            width: 600px;
            height: 500px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            .contact-method {
                width: 500px;
                height: 70px;
                line-height: 70px;
                margin-top: 20px;
                font-size: 24px;
                text-align: center;
                color: #fff;
                background-color: #f77c00;
                transition: .2s;
                cursor: pointer;

                &:hover {
                    background-color: #ff8c00;
                    box-shadow: inset 0 0 5px #fff;
                }
            }
        }
    }

    .bullet-point-wrapper {
        width: 93%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .bullet-point-title {
            margin-bottom: 20px;
            font-size: 20px;
            font-weight: bold;
        }

        .bullet-point-desc {
            margin-bottom: 20px;
            font-size: 16px;
            color: #666;
        }

        .bullet-point {
            margin-bottom: 10px;
        }
    }

    .spec-wrapper {

        .icon-info-wrapper {
            padding: 0 20px;
            
            .icon-row {
                margin: 30px 0;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                border-bottom: 1px dotted #ccc;

                .icon-category {
                    width: 100px;
                    height: 30px;
                    margin-right: 20px;
                    font-size: 14px;
                    flex-shrink: 0;
                }
                .icons {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;

                    .icon-wrapper {
                        width: 120px;
                        height: 80px;
                        margin: 0 10px;
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        font-size: 16px;
                        color: #666;

                        .icon {
                            width: 40px;
                            height: 40px;
                            background: url('./jingling.webp');
                            background: url('./jingling.png');
                            background-position: 40px 0;
                        }

                        .icon-title {
                            font-size: 12px;
                        }
                    }
                }
            }
        }

        .other-info-table-wrapper {

            .other-info {
                // width: 80%;
                border: 1px solid #aaa;
                border-collapse: collapse;
                border-spacing: 0;

                th, td {
                    height: 50px;
                    border: 1px solid #ccc;
                    padding: 5px;
                }
                
                th {
                    width: 180px;
                    color: #444;
                    background-color: #ddd;
                    text-align: center;
                }

                td {
                    width: 480px;
                    padding-left: 20px;
                    font-size: 15px;
                    color: #333;
                    background-color: #fff;
                }
            }
        }
        .other-info-list-wrapper {
            width: 100%;
            margin-top: 20px;
            padding: 20px 0;
            border-bottom: #ccc 1px solid;

            .other {
                font-weight: bold;
            }
        }
    }
    
    .map-wrapper {
        width: 100%;
        height: 350px;
        border: 1px solid #ccc;
    }

    .query-form-wrapper {
        width: 70%;
        height: 350px;
        margin: 50px auto;
        border: 1px solid #ccc;
        background-color: #f8f4f4;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        box-shadow: 0 0 10px #aaa;

        .title {
            width: 100%;
            padding: 10px 0;
            margin-bottom: 30px;
            text-align: center;
            font-size: 20px;
            color: #fff;
            background-color: #ff8c00;
        }

        .desc {
            margin-bottom: 20px;
            font-size: 16px;
            font-weight: bold;
        }

        .wrapper {
            margin-bottom: 20px;
            
            label {
                margin-right: 10px;
                font-size: 14px;
            }

            input {
                width: 20px;
                height: 20px;
                transform: translateY(-12%);
            }
        }

        .contact-method {
            width: 60%;
            height: 70px;
            line-height: 70px;
            margin-top: 20px;
            font-size: 24px;
            text-align: center;
            color: #fff;
            background-color: #f77c00;
            transition: .2s;
            cursor: pointer;

            &:hover {
                background-color: #ff8c00;
                box-shadow: inset 0 0 5px #fff;
            }
        }

        .divider {
            width: 85%;
            margin-top: 10px;
            border-bottom: 1px solid #ccc;
        }
    }

    .recommend-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
</style>