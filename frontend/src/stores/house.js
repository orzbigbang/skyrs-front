import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

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

    return {
        houseList,
		houseListLoaded,
		dpHistories,
		favorates,
        getHouseList,
    }
})