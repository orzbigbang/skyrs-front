import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { apiURL } from '@/config/config.js'

export const useHouseStore = defineStore("house", () => {
	// 搜索页面的房屋列表
    const houseList = ref([])
	const atbbHouseList = ref([])
	const atbbHouseListBM = ref([])
	const atbbHouseListBO = ref([])
	const atbbHouseListRMO = ref([])
	const atbbHouseListRB = ref([])
	const atbbHouseListRR = ref([])
	const filteredList = ref([])
	const filteredAtbbList = ref([])

	// 搜索页面房屋列表更新与否
	const houseListLoaded = ref(false)

	// 房屋浏览历史页面的房屋列表
	const dpHistories = ref([])

	// 收藏夹的的房屋列表
	const favorates = ref([])

	// 获取各种房屋列表
    const getHouseList = (url, params, headers, type) => {
        // params: {}
        // headers: {}
		// type: 0:无条件放屋列表， 1:浏览历史, 2:收藏的房屋
        axios.get(url, {params, headers}).then(
            value => {
				houseListLoaded.value = true
				switch (type) {
					case 0:
						filteredList.value = houseList.value = value.data
						const tempList = Object.keys(filterConditionFC.value).filter((key) => {
							return filterConditionFC.value[key] === true
						})
						if (tempList.length) {
							filterHouseList()
						}
						break
					case 1:
						dpHistories.value = value.data[0].view_history
						favorates.value = value.data[0].favorite_estates
						break
				}
            }
        ).catch(
            reason => {
                console.log(reason)
            }
        )
    }

	const filterHouseList = (condition) => {
		// 根据FC筛选
		const tempList = Object.keys(filterConditionFC.value).filter((key) => {
			return filterConditionFC.value[key] === true
		})

		if (tempList.length) {
			filteredList.value = houseList.value.filter((item) => {
				let _type = ""
				if (filterConditionFC.value._type === "station") {
					_type = "station1"
				} else if (filterConditionFC.value._type === "train_route") {
					_type = "train_route1"
				} else if (filterConditionFC.value._type === "district") {
					_type = "district"
				}
				return tempList.indexOf(item[_type]) !== -1
			})
		} else {
			filteredList.value = houseList.value
		}
	}

	const filterCity = (array, cityIndex) => {
		var cityName = "tokyo"
		switch (cityIndex) {
			case "1":
				cityName = "tokyo"
				break
			case "2":
				cityName = "kanagawa"
				break
			case "3":
				cityName = "chiba"
				break
			case "4":
				cityName = "saitama"
				break
			case "5":
				cityName = "tochigi"
				break
			case "6":
				cityName = "yamanashi"
				break
			case "7":
				cityName = "nagano"
				break
			case "8":
				cityName = "sizuoka"
				break
		}

		return array.filter((item) => {
			return item.city === cityName
		})	
	}
	
	const getAtbbHouseList = (params, headers, atbbType) => {
		if (atbbType === "bm" && atbbHouseListBM.value.length) {
			filteredAtbbList.value = atbbHouseList.value = filterCity(atbbHouseListBM.value, params.city)
			return
		} else if (atbbType === "bo" && atbbHouseListBO.value.length) {
			filteredAtbbList.value = atbbHouseList.value = filterCity(atbbHouseListBO.value, params.city)
			return
		} else if (atbbType === "rmo" && atbbHouseListRMO.value.length) {
			filteredAtbbList.value = atbbHouseList.value = filterCity(atbbHouseListRMO.value, params.city)
			return
		}

		var atbbUrl = ""
		switch (atbbType) {
			case "bm":
				atbbUrl = apiURL.atbb_bm
				break
			case "bo":
				atbbUrl = apiURL.atbb_bo
				break
			case "rmo":
				atbbUrl = apiURL.atbb_rmo
				break
		}
		axios.get(atbbUrl, {params, headers}).then(
			value => {				
				switch (atbbType) {
					case "bm":
						atbbHouseListBM.value = value.data
						filteredAtbbList.value = atbbHouseList.value = filterCity(atbbHouseListBM.value, params.city)
						break
					case "bo":
						atbbHouseListBO.value = value.data
						filteredAtbbList.value = atbbHouseList.value = filterCity(atbbHouseListBO.value, params.city)
						break
					case "rmo":
						atbbHouseListRMO.value = value.data
						filteredAtbbList.value = atbbHouseList.value = filterCity(atbbHouseListRMO.value, params.city)
						break
				}
			}
		).catch(
			reason => {
				console.log(reason)
			}
		)
	}

	const filterConditionFC = ref({})
	const filterConditionOther = ref({})
	const filterAtbbHouseList = (condition, conditionType) => {
		// 判断搜索条件
		if (conditionType === "fc") {
			filterConditionFC.value = condition
		} else if (conditionType === "other") {
			filterConditionOther.value = condition
		}
		// 根据FC筛选
		const tempList = Object.keys(filterConditionFC.value).filter((key) => {
			return filterConditionFC.value[key] === true
		})

		if (tempList.length) {
			filteredAtbbList.value = atbbHouseList.value.filter((item) => {
				let _type = ""
				if (filterConditionFC.value._type === "station") {
					_type = "station1"
				} else if (filterConditionFC.value._type === "train_route") {
					_type = "train_route1"
				} else if (filterConditionFC.value._type === "district") {
					_type = "district"
				}
				return tempList.indexOf(item[_type]) !== -1
			})
		} else {
			filteredAtbbList.value = atbbHouseList.value
		}

		// 根据Other筛选
		if (Object.keys(filterConditionOther.value).length) {
			if (filterConditionOther.value.price_bottom !== "指定なし") {
				filteredAtbbList.value = filteredAtbbList.value.filter((item) => {
					return item.price / 10000 >= filterConditionOther.value.price_bottom
				})
			}
			if (filterConditionOther.value.price_top !== "指定なし") {
				filteredAtbbList.value = filteredAtbbList.value.filter((item) => {
					return item.price / 10000 <= filterConditionOther.value.price_top
				})
			}
			if (filterConditionOther.value.area_bottom !== "指定なし") {
				filteredAtbbList.value = filteredAtbbList.value.filter((item) => {
					return item.area >= filterConditionOther.value.area_bottom
				})
			}
			if (filterConditionOther.value.area_top !== "指定なし") {
				filteredAtbbList.value = filteredAtbbList.value.filter((item) => {
					return item.area <= filterConditionOther.value.area_top
				})
			}
			if (filterConditionOther.value.area_top !== "指定なし") {
				filteredAtbbList.value = filteredAtbbList.value.filter((item) => {
					return item.area <= filterConditionOther.value.area_top
				})
			}
			if (filterConditionOther.value.layout.length) {
				filteredAtbbList.value = filteredAtbbList.value.filter((item) => {
					if (Object.values(filterConditionOther.value.layout).indexOf("4K") === -1) {
						return Object.values(filterConditionOther.value.layout).indexOf(item.layout) !== -1
					} else {
						return Object.values(filterConditionOther.value.layout).indexOf(item.layout) !== -1 || parseInt(item.layout.charAt(0)) >= 4
					}
				})
			}
		}
		
	}

	const getAtbbRecommendHouseList = (headers) => {
		const urlBuy = apiURL.atbb_rb
		const urlRent = apiURL.atbb_rr
		
		axios.get(urlBuy, {headers}).then(
			value => {
				atbbHouseListRB.value = value.data
			}
		).catch(
			reason => {
				console.log(reason)
			}
		)
		axios.get(urlRent, {headers}).then(
			value => {
				atbbHouseListRR.value = value.data
			}
		).catch(
			reason => {
				console.log(reason)
			}
		)
	}

	// 浏览次数加一
	// const addCount = (house_id) => {
	// 	const url = apiURL.count
	// 	const body = {house_id}
	// 	axios.post(url, body, {headers}).then(
	// 		value => {
	// 			console.log(value.data)
	// 		}
	// 	).catch(
	// 		reason => {
	// 			console.log(reason)
	// 		}
	// 	)
	// }

	const viewCount = ref({})

	const addCount = (house_id) => {
		if (viewCount.value[house_id] === undefined) {
			viewCount.value[house_id] = 1
		} else {
			viewCount.value[house_id] += 1
		}
	}

    return {
        houseList,
		atbbHouseList,
		houseListLoaded,
		dpHistories,
		favorates,
        getHouseList,
		viewCount,
		addCount,
		getAtbbHouseList,
		atbbHouseListRB,
		atbbHouseListRR,
		getAtbbRecommendHouseList,
		filterAtbbHouseList,
		filteredAtbbList,
		filterHouseList,
		filteredList
    }
})