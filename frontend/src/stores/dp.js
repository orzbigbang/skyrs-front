import { defineStore } from "pinia"
import { ref } from 'vue'
import axios from 'axios'
import info from '@/assets/js/info'
import { useConditionStore } from '@/stores/condition'
const conditionStore = useConditionStore()


export const useDPStore = defineStore("dp", () => {
    const title = ref("レジディア神田東  602")
    const faved = ref(false)
    const highlights = ref(info.highlights[conditionStore.houseIndex])
    const images = ref([
        "/imgs/img_thumbnail (1).jfif",
        "/imgs/img_thumbnail (2).jfif",
        "/imgs/img_thumbnail (3).jfif",
        "/imgs/img_thumbnail (4).jfif",
        "/imgs/img_thumbnail (5).jfif",
        "/imgs/img_thumbnail (6).jfif",
    ])
    const bases = ref(info.bases[conditionStore.houseIndex])
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
    const icons = ref(info.icons[conditionStore.houseIndex])
    const otherInfoTable = ref(info.otherInfoTable[conditionStore.houseIndex])
    const otherInfoList = ref([
        "ルームシェア可",
        "ロフト",
        "コンロ2口以上",
        "プロパンガス",
        "最上階",
        "即入居可",
        "角部屋",
        "フローリング",
        "保証人不要",
        "モニタ付きインターホン",
        "ペット相談可",
        "カウンターキッチン",
        "女性限定"
    ])
    const address = ref("")
    
    // 获取DP信息
    const getDP = (url, params, headers) => {
        // params: {}
        // headers: {}
        axios.get(url, {
            params,
            headers
        }).then(
            value => {
                const response = value.data
                ;(() => {
                    const getData = (kvList, key) => {
                        kvList.forEach((item) => {
                            Object.keys(item._value).forEach((item1) => {
                                item._value[item1] = response[key][item1]? response[key][item1]: item._value[item1]
                            })
                        })
                    }
                    const getIcon = (kvList) => {
                        kvList.forEach((kv) => {
                            kv.items.forEach((item) => {
                                if (!response.icons.includes(item.name)) {
                                    item.offset = ""
                                }
                            })
                        })
                    }
                    const getOtherInfoTable = (kvList) => {
                        kvList.forEach(({_value1, _value2}) => {
                            _value1[Object.keys(_value1)[0]] = response.otherInfoTable[Object.keys(_value1)[0]]? response.otherInfoTable[Object.keys(_value1)[0]]: _value1[Object.keys(_value1)[0]]
                            _value2[Object.keys(_value2)[0]] = response.otherInfoTable[Object.keys(_value2)[0]]? response.otherInfoTable[Object.keys(_value2)[0]]: _value2[Object.keys(_value2)[0]]
                        })
                    }
                    // 更新房屋名字
                    title.value = response.meta.name
                    // 更新收藏与否
                    faved.value = response.meta.faved
                    // 更新highlights
                    getData(highlights.value, "highlights")
                    // 更新bases
                    getData(bases.value, "bases")
                    // 更新bullet point
                    bpTitle.value = response.bulletpoints.brief_title
                    bpDesc.value = response.bulletpoints.brief_desc
                    bulletPoints.value = response.bulletpoints.bullet_point
                    // 更新icon
                    getIcon(icons.value)
                    // 更新otherInfoTable
                    getOtherInfoTable(otherInfoTable.value)
                    // 更新otherInfoList
                    otherInfoList.value = response.otherInfoList
                    // 更新地址
                    address.value = response.bases.address
                })()
            }
        ).catch(
            reason => {
                console.log(reason)
            }
        )
    }

    return {
        title,
        faved,
        highlights,
        images,
        bases,
        icons,
        otherInfoTable,
        bpTitle,
        bpDesc,
        bulletPoints,
        otherInfoList,
        address,
        getDP,
    }
})