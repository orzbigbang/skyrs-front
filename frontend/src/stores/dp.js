import { defineStore } from "pinia"
import { ref } from 'vue'
import axios from 'axios'
import info from '@/assets/js/info'
import { useConditionStore } from '@/stores/condition'
const conditionStore = useConditionStore()

import { apiURL } from '@/config/config.js'

export const useDPStore = defineStore("dp", () => {
    const title = ref("")
    const faved = ref(false)
    const highlights = ref(info.highlights[conditionStore.houseIndex])
    const images = ref([])
    const bases = ref(info.bases[conditionStore.houseIndex])
    const bpTitle = ref("")
    const bpDesc = ref("")
    const bulletPoints = ref([])
    const icons = ref(info.icons[conditionStore.houseIndex])
    const otherInfoTable = ref(info.otherInfoTable[conditionStore.houseIndex])
    const otherInfoList = ref([])
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
                // 更新图片
                const imgs = []
                Object.values(response.img).forEach((item) => {
                    if (item) {
                        imgs.push(apiURL.mediaURL + item)
                    }
                })
                images.value = imgs
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