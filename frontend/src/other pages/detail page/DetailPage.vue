<template>
    <div class="container">
        <button @click="a">123</button>
        <MyTag>基本情報</MyTag>
        <div class="title-wrapper block">
            <div class="title">
                レジディア神田東  602
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

                <div class="contact-method">
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
                    <input type="radio" name="query-type">
                    その他の問い合わせ
                </label>
            </div>
            <div class="contact-method">
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
</template>
    
<script setup>
    import MyTag from '@/components/functional/MyTag.vue';
    import KeyValue from './KeyValue.vue'
    import KeyValue1 from './KeyValue1.vue'
    import HouseCard from "../search page/HouseCard.vue";

    import { ref, computed } from 'vue';
    import { useConditionStore } from '@/stores/condition'
    const conditionStore = useConditionStore()

    import { useUserStore } from "@/stores/user"
    const userStore = useUserStore()

    import axios from 'axios'
    import { useRoute } from 'vue-router'
    const route = useRoute()

    // get house type
    const houseIndex = computed(() => {
        return conditionStore.houseIndex
    })

    const a = () => {
        console.log(conditionStore.houseIndex)
    }

    // get static data according to house type
    import info from './info'
    const highlights = ref(info.highlights[houseIndex.value])
    const bases = ref(info.bases[houseIndex.value])
    const icons = ref(info.icons[houseIndex.value])
    const otherInfoTable = ref(info.otherInfoTable[houseIndex.value])

    // get google map
    const address = ref("")
    const getAddress = () => {
        address.value = "東京都江東区 北砂７丁目９－５"
    }   
    getAddress()
    let googleMapUrl = `https://www.google.com/maps?q=${address.value}&output=embed`

    // get dynamic data from api
    const bpTitle = ref("徒歩圏内にスーパーや公園、保育園、小学校などが揃う、子育て世帯にうれしい環境。ショッピングモール「BiVi南千住」も生活圏内です")

    const bpDesc = ref("東京メトロ日比谷線「三ノ輪」駅まで徒歩7分（～560ｍ）、JR山手線「鶯谷」駅まで徒歩15分（～1200ｍ）、都電荒川線「三ノ輪橋」駅まで徒歩11分（～880ｍ）で、3沿線3駅が徒歩圏内。通勤や通学、お買い物などにも便利な立地です。また徒歩圏内にはスーパーや公園が揃うほか、キッズガーデン保育園まで徒歩7分（～495ｍ）、台東区立金曽木小学校まで徒歩3分（～196ｍ）で、子育て世帯にも嬉しいロケーションとなっています。")

    const bulletPoints = ref([
        "2019年10月築　鉄筋コンクリート造9階建て",
        "線路に近いのですが、最高レベルのＴー４級という遮音性能なので室内は静かです。",
        "ペット可（小型犬）で敷地内に専用の足洗い場もあります。",
        "神田駅徒歩3分・淡路町駅、小川町駅徒歩4分、秋葉原駅徒歩5分など複数路線利用な可能な便利な立地となっております",
        "嬉しいネット無料！",
        "既にご成約済みの場合でも、同タイプ・別タイプに空室がある場合もございます",
        "空室の待ち受けなども受け付けております。お電話かメールにてスタッフまでお申し付け下さい",
        "ネット無料　ペット可　設備充実",
        "掲載の写真は同マンション、類似タイプになります、ご参考になさって下さい",
        "オートロック・防犯カメラ・宅配ＢＯＸ・メールＢＯＸ・駐輪場・敷地内ゴミ捨て場・エレベーター・ＢＳ・ＣＳ",
        "また、〇〇階以上の募集が出たらとか、角部屋の募集が出たらとか、〇〇円以下の募集が出たらなどなど・・",       
    ])

    const otherInfoList = ref([
        "角部屋",
        "最上階",
        "フローリング",
        "コンロ2口以上",
        "宅配ボックス",
        "敷地内ゴミ置場",
        "専用庭",
        "都市ガス",
        "即入居可",
        "ペット相談可",
        "ルームシェア可",
        "保証人不要",
    ])
    
    // get recommend house list
    import recommendHouseLists from "./recommendHouseList"
    const recommendHouseList = ref(recommendHouseLists);
    
    // TODO
    const getHouseData = () => {
        const url = ""
        const params = {id: route.params.houseID}
		const headers = {Authorization: userStore.user_id}
        axios.get(url, {
            params,
            headers
        }).then(
            value => {
                console.log(value.data)
            }
        ).catch(
            reason => {
                console.log(reason)
            }
        )
    }
    const getHighlights = () => {}
    const getBases = () => {}
    const getIcons = () => {}
    const getOtherInfoTable = () => {}
    const getBpTitle = () => {}
    const getBpDesc = () => {}
    const getBulletPoints = () => {}
    const getOtherInfoList = () => {}
    const getCards = () => {}

    // carousel function
    const images = [
        "/imgs/img_thumbnail (1).jfif",
        "/imgs/img_thumbnail (2).jfif",
        "/imgs/img_thumbnail (3).jfif",
        "/imgs/img_thumbnail (4).jfif",
        "/imgs/img_thumbnail (5).jfif",
        "/imgs/img_thumbnail (6).jfif",
    ]

    const activeImageIndex = ref(0)
    const offSetX = ref(0)

    const goLeft = () => {
        activeImageIndex.value = activeImageIndex.value? activeImageIndex.value - 1: activeImageIndex.value
    }
    const goRight = () => {
        activeImageIndex.value = activeImageIndex.value === images.length - 1? activeImageIndex.value: activeImageIndex.value + 1
    }

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