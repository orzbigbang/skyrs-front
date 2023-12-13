import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { apiURL } from '@/config/config.js'

export const useHouseStore = defineStore("house", () => {
	// 搜索页面的房屋列表
    const houseList = ref([
	    // {
		// 	main_pic_path: "/imgs/img_thumbnail (1).jfif",
		// 	house_id: "1",
		// 	faved: true,
		// 	name: "ＴＫＲ神田多町",
		// 	price: "87,000円",
		// 	address: "東京都千代田区 神田多町２丁目",
		// 	area: "88",
		// 	layout: "3LDK",
		// 	station1: "ＪＲ川越線/西大宮駅 歩11分",
		// 	completion_date: "2002年11月築",
		// 	house_struction: "鉄骨",
		// 	number_of_floors: "8階",
		// },
        // {
		// 	main_pic_path: "/imgs/img_thumbnail (2).jfif",
		// 	house_id: "2",
		// 	faved: false,
		// 	name: "ＴＫＲ神田多町",
		// 	price: "87,000円",
		// 	address: "東京都千代田区 神田多町２丁目",
		// 	area: "88",
		// 	layout: "3LDK",
		// 	station1: "ＪＲ川越線/西大宮駅 歩11分",
		// 	completion_date: "2002年11月築",
		// 	house_struction: "鉄骨",
		// 	number_of_floors: "8階",
		// },
        // {
		// 	main_pic_path: "/imgs/img_thumbnail (3).jfif",
		// 	house_id: "3",
		// 	faved: true,
		// 	name: "ＴＫＲ神田多町",
		// 	price: "87,000円",
		// 	address: "東京都千代田区 神田多町２丁目",
		// 	area: "88",
		// 	layout: "3LDK",
		// 	station1: "ＪＲ川越線/西大宮駅 歩11分",
		// 	completion_date: "2002年11月築",
		// 	house_struction: "鉄骨",
		// 	number_of_floors: "8階",
		// },
        // {
		// 	main_pic_path: "/imgs/img_thumbnail (4).jfif",
		// 	house_id: "4",
		// 	faved: false,
		// 	name: "ＴＫＲ神田多町",
		// 	price: "87,000円",
		// 	address: "東京都千代田区 神田多町２丁目",
		// 	area: "88",
		// 	layout: "3LDK",
		// 	station1: "ＪＲ川越線/西大宮駅 歩11分",
		// 	completion_date: "2002年11月築",
		// 	house_struction: "鉄骨",
		// 	number_of_floors: "8階",
		// },
        // {
		// 	main_pic_path: "/imgs/img_thumbnail (5).jfif",
		// 	house_id: "5",
		// 	faved: false,
		// 	name: "ＴＫＲ神田多町",
		// 	price: "87,000円",
		// 	address: "東京都千代田区 神田多町２丁目",
		// 	area: "88",
		// 	layout: "3LDK",
		// 	station1: "ＪＲ川越線/西大宮駅 歩11分",
		// 	completion_date: "2002年11月築",
		// 	house_struction: "鉄骨",
		// 	number_of_floors: "8階",
		// },
        // {
		// 	main_pic_path: "/imgs/img_thumbnail (6).jfif",
		// 	house_id: "6",
		// 	faved: true,
		// 	name: "ＴＫＲ神田多町",
		// 	price: "87,000円",
		// 	address: "東京都千代田区 神田多町２丁目",
		// 	area: "88",
		// 	layout: "3LDK",
		// 	station1: "ＪＲ川越線/西大宮駅 歩11分",
		// 	completion_date: "2002年11月築",
		// 	house_struction: "鉄骨",
		// 	number_of_floors: "8階",
		// },
        // {
		// 	main_pic_path: "/imgs/img_thumbnail (7).jfif",
		// 	house_id: "7",
		// 	faved: true,
		// 	name: "ＴＫＲ神田多町",
		// 	price: "87,000円",
		// 	address: "東京都千代田区 神田多町２丁目",
		// 	area: "88",
		// 	layout: "3LDK",
		// 	station1: "ＪＲ川越線/西大宮駅 歩11分",
		// 	completion_date: "2002年11月築",
		// 	house_struction: "鉄骨",
		// 	number_of_floors: "8階",
		// },
    ])
	const atbbHouseList = ref([])
	const atbbHouseListBM = ref([])
	const atbbHouseListBO = ref([])
	const atbbHouseListRMO = ref([])
	const atbbHouseListRB = ref([])
	const atbbHouseListRR = ref([])
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
						houseList.value = value.data
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
			atbbHouseList.value = filterCity(atbbHouseListBM.value, params.city)
			return
		} else if (atbbType === "bo" && atbbHouseListBO.value.length) {
			atbbHouseList.value = filterCity(atbbHouseListBO.value, params.city)
			return
		} else if (atbbType === "rmo" && atbbHouseListRMO.value.length) {
			atbbHouseList.value = filterCity(atbbHouseListRMO.value, params.city)
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
						atbbHouseList.value = filterCity(atbbHouseListBM.value, params.city)
						break
					case "bo":
						atbbHouseListBO.value = value.data
						atbbHouseList.value = filterCity(atbbHouseListBO.value, params.city)
						break
					case "rmo":
						atbbHouseListRMO.value = value.data
						atbbHouseList.value = filterCity(atbbHouseListRMO.value, params.city)
						break
				}
			}
		).catch(
			reason => {
				console.log(reason)
			}
		)
	}

	const FCFiltered = ref(false)

	const filterAtbbByFC = (conditionFC, fcFiltered) => {
		FCFiltered.value = fcFiltered
		// 获取FC搜索框的长度，判断是否要筛选
		const checkFCList = Object.keys(conditionFC).filter((key) => {
			return conditionFC[key] === true
		})
		if (Object.keys(conditionFC).length === 1 || (Object.keys(conditionFC).length > 1 && checkFCList.length === 0)) {
			return filteredAtbbList.value = atbbHouseList.value
		}

		// 根据FC筛选
		const tempList = Object.keys(conditionFC).filter((key) => {
			return conditionFC[key] === true
		})
		filteredAtbbList.value = atbbHouseList.value.filter((item) => {
			let _type = ""
			if (conditionFC._type === "station") {
				_type = "station1"
			} else if (conditionFC._type === "train_route") {
				_type = "train_route1"
			} else if (conditionFC._type === "district") {
				_type = "district"
			}
			return tempList.indexOf(item[_type]) !== -1
		})
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
		filteredAtbbList,
		filterAtbbByFC,
		FCFiltered
    }
})