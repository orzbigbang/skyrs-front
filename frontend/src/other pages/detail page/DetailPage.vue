<template>
    <div class="container">
        <MyTag>基本情報</MyTag>
        <div class="title-wrapper block">
            <h5 class="title">
                {{ title }}
                <fa class="icon" :class="{active: faved}" icon="star" @click="add2fav()"/>
            </h5>
            <div class="brief kv-wrapper">
                <KeyValue v-for="highlight in highlights" :highlight="highlight"></KeyValue>
            </div> 
        </div>
        <div class="carousel-wrapper block">
            <div class="carousel">
                <img class="big-pic" :src="images[activeImageIndex]">
                <div class="small-pic-outer">
                    <fa class="arrow-left arrow fc" icon="angle-left" @click="goLeft"/>
                    <fa class="arrow-right arrow fc" icon="angle-right" @click="goRight"/>
                    <div  class="small-pic-wrapper" :style="{transform: `translateX(${offSetX}px)`}">
                        <img class="small-pic" 
                            :class="{active: activeImageIndex === index}" 
                            :src="image"
                            @click="activeImageIndex = index"
                            v-for="(image, index) in images"> 
                    </div>
                </div>
            </div>
            <ul class="base-info">
                <li class="kv" v-for="base in bases">
                    <KeyValue1 :base="base"></KeyValue1>
                    <div class="divider"></div>
                </li>

                <div class="contact-method" @click="() => {modalStore.isQuerySelection = true}">
                    <fa icon="envelope"/>
                    お問い合わせ
                </div>
            </ul>
        </div>

        <MyTag>おすすめポイント</MyTag>
        <div class="bullet-point-wrapper block">
            <h4 class="bullet-point-title">
                {{ bpTitle }}
            </h4>
            <p class="bullet-point-desc">
                {{ bpDesc }}
            </p>
            <p class="bullet-point" v-for="bp in bulletPoints">◎{{ bp }}</p>
        </div>

        <MyTag>設備・その他の情報</MyTag>
        <div class="spec-wrapper block">
            <ul class="icon-info-wrapper">
                <li class="icon-row" v-for="row in icons">
                    <div class="icon-category">
                        {{ row.title }}
                    </div>
                    <div class="icons-outer">
                        <ul class="icons">
                            <li class="icon-wrapper" v-for="icon in row.items">
                                <i class="icon" :style="icon.offset? {backgroundPosition: `${icon.offset}px 0`}: {}"></i>
                                <div class="icon-title">{{ icon.title }}</div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

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
                width="99%" height="99%" style="border:0;" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" data-aos="fade-right">
            </iframe>
        </div>  

        <div class="query-form-wrapper block">
            <div class="title">
                この物件にお問い合わせ
            </div>
            <div class="query-wrapper">
                <span class="desc">
                    お問い合わせの内容を選択してください
                </span>
                <div class="wrapper">
                    <label>
                        <input type="radio" name="query-type" value="最新の空室状況を知りたい" v-model="queryTypeStr">
                        最新の空室状況を知りたい
                    </label>
                    <label>
                        <input type="radio" name="query-type" value="実際に見学したい " v-model="queryTypeStr">
                        実際に見学したい

                    </label>
                    <label>
                        <input type="radio" name="query-type" value="お問い合わせ" v-model="queryTypeStr">
                        その他の問い合わせ
                    </label>
                </div>
                <div class="contact-method"  @click="() => {modalStore.isQuerySelection = true}">
                    <fa icon="envelope"/>
                    お問い合わせ
                </div>
                <div class="divider"></div>
            </div>
        </div>

        <!-- <MyTag>おすすめ部屋</MyTag>
        <ul class="recommend-wrapper block">
            <li v-for="house in recommendHouseList">
                <HouseCard :keys="house.title" :house="house"/>
            </li>
        </ul> -->
    </div>

    <ModalBox :title="'お問い合わせ'" v-show="modalStore.isQuerySelection">
		<HouseQuery :queryType="queryType" :queryTypeStr="queryTypeStr"></HouseQuery>
    </ModalBox>
</template>
    
<script setup>
    import HouseCard from "../search page/HouseCard.vue";
    import ModalBox from '@/components/functional/ModalBox.vue';
    import MyTag from '@/components/functional/MyTag.vue';
    import KeyValue from './KeyValue.vue'
    import KeyValue1 from './KeyValue1.vue'
	import HouseQuery from './HouseQuery.vue';

    import { ref, computed, toRefs } from 'vue';
    import { useRoute } from 'vue-router'
    const route = useRoute()

    import { useModalStore } from '@/stores/modal';
    const modalStore = useModalStore()

    import { useDPStore } from '@/stores/dp';
    const dpStore = useDPStore()

    // get house_id
    const houseID = route.params.houseID    

    // get static data according to house type
    const {title, highlights, images, bases, icons, otherInfoTable, bpTitle, bpDesc, bulletPoints, otherInfoList} = toRefs(dpStore)
    
    // get house data
    import { useHeader } from '@/composition/userInfo.js'
    import { apiURL } from '@/config/config.js'
    const headers = useHeader()
    const getHouseData = () => {
        const url = `${apiURL.estate}/${houseID}`
        const params = {}
        dpStore.getDP(url, params, headers)
    }
    getHouseData()

    // add to favorate
    import { useAdd2fav } from "@/composition/favorate.js"
    const faved = computed({
        get() {
            return dpStore.faved
        },
        set(newVal) {
            dpStore.faved = newVal
        }
    })
    const url = apiURL.addFavorate
    const add2fav = () => {useAdd2fav(faved, houseID)}

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
        return `https://www.google.com/maps?q=${dpStore.address}&output=embed`
    })

    // get query type
    const queryTypeStr =ref("お問い合わせ")
    const queryType =ref("any")
    switch (queryTypeStr.value) {
        case "最新の空室状況を知りたい":
            queryType.value = "empty"
            break
        case "実際に見学したい":
            queryType.value = "see"
            break
        case "お問い合わせ":
            queryType.value = "any"
            break
    }
    
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
            max-width: 983px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
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
            width: 34rem;
            height: 31rem;
            margin-right: 20px;

            .big-pic {
                width: 100%;
                height: 80%;
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
                    font-size: 3rem;
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
                    width: 100%;
                    display: flex;
                    flex-wrap: nowrap;
                    overflow-x: hidden;
                    .small-pic {
                        width: 99px;
                        height: 90px;
                        margin-right: 25px;
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
            max-width: 600px;
            min-width: 450px;
            height: 500px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            .kv {
                width: 100%;
            }

            .divider {
                width: 100%;
                margin-bottom: 10px;
                border-bottom: 1px dotted #ddd;
            }

            .contact-method {
                width: 100%;
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

            .icons-outer {
            }


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
                    margin: 0 auto;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    flex-wrap: wrap;

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
                            background: url('@/assets/imgs/jingling.png');
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
                border: 1px solid #aaa;

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

        .query-wrapper {
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }

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

    @media screen and (max-width:1200px) {
        .container {
            width: 90%;
        }
    }

    @media screen and (max-width:1102px) {
        .carousel-wrapper {
            flex-direction: column;
            .carousel {
                margin-bottom: 50px;
            }
        }
        .query-form-wrapper {
            width: 100%;
            .contact-method {
                width: 60%;
                height: 4rem;
                line-height: 4rem;
                margin-top: 20px;
                font-size: 1.2rem;
            }
        }
    }
    
    @media screen and (max-width: 991.98px) {
        .spec-wrapper {
            .icon-info-wrapper {
                padding: 0 10px;

                .icon-row {
                    flex-direction: column;

                    .icon-category {
                        width: 100%;
                        margin-bottom: 10px;
                        text-align: center;
                        font-weight: bold;
                    }
                    .icons {
                        flex-wrap: wrap;

                        .icon-wrapper {
                            width: 81px;
                        }
                    }
                }
            }

            .other-info-table-wrapper {
                .other-info {
                    th, td {
                        font-size: 12px;
                    }
                }
            }
        }
    }

    @media screen and (max-width:700px) {
        .carousel-wrapper {
            .carousel {
                width: 100%;
                height: 70vw;
                margin-bottom: 11vw;

                .small-pic-outer {
                    height: 90px;

                    .arrow {
                        top: 33%;
                    }
                    .small-pic-wrapper {
                        .small-pic {
                            width: 25%;
                            height: 14vw;
                            margin-right: 5px;
                        }
                    }
                }
            }
            .base-info {
                min-width: 0px;
            }
        }

        .query-form-wrapper {
            .wrapper {
                margin-bottom: 0px;
                display: flex;
                flex-direction: column;
                
                label {
                    margin-bottom: 10px;
                }
            }
        }
    }

    @media screen and (max-width:415px) {
        .carousel-wrapper {
            .carousel {
                .small-pic-outer {
                    .arrow {
                        top: 30%;
                        font-size: 2.5rem;
                    }
                    .small-pic-wrapper {
                        width: 300px;
                        .small-pic {
                            width: 23%;
                            margin-right: 5.5px;
                        }
                    }
                }
            }
        }
    }
</style>