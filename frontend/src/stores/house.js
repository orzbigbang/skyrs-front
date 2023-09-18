import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useHouseStore = defineStore("house", () => {
    const houseList = ref([
	    {
			main_pic_path: "/imgs/img_thumbnail (1).jfif",
			house_id: "1",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
		},
        {
			main_pic_path: "/imgs/img_thumbnail (2).jfif",
			house_id: "2",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
		},
        {
			main_pic_path: "/imgs/img_thumbnail (3).jfif",
			house_id: "3",

			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
		},
        {
			main_pic_path: "/imgs/img_thumbnail (4).jfif",
			house_id: "4",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
		},
        {
			main_pic_path: "/imgs/img_thumbnail (5).jfif",
			house_id: "5",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
		},
        {
			main_pic_path: "/imgs/img_thumbnail (6).jfif",
			house_id: "6",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
		},
        {
			main_pic_path: "/imgs/img_thumbnail (7).jfif",
			house_id: "7",
			name: "ＴＫＲ神田多町",
			price: "87,000円~109,000円",
			address: "東京都千代田区 神田多町２丁目",
			area: "88",
			layout: "3LDK",
			station1: "ＪＲ川越線/西大宮駅 歩11分",
			completion_date: "2002年11月築",
			house_struction: "鉄骨",
			number_of_floors: "8階",
		},
    ]);
    const getHouseList = (url, params, headers) => {
        // params: {}
        // headers: {}
        axios.get(url, {
            params,
            headers
        }).then(
            value => {
                houseList.value = value.data
            }
        ).catch(
            reason => {
                console.log(reason)
            }
        )
    }

    const getDP = (url, params, headers) => {
        // params: {}
        // headers: {}
        axios.get(url, {
            params,
            headers
        }).then(
            value => {
                DP.value = value.data
            }
        ).catch(
            reason => {
                console.log(reason)
            }
        )
    }

    return {
        houseList,
        getHouseList,
        getDP
    }
})