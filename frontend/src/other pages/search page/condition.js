// 1: 中古マンション　2: 新築マンション　3: 中古一戸建て　4: 新築一戸建て　5: 賃貸マンション　6: 賃貸一戸建て

// 築年数 数字　小于等于

const condition = {}

condition.fixedConditionsSelect = {
	1: [
		{
			title: "価格",
			name: ["price_bottom", "price_top"],
			type: "selectRange",
			values: [
				["指定なし", "1", "2"], 
				["指定なし", "3", "4"]
			],
			input: {"price_bottom": "指定なし", "price_top": "指定なし"},
			desc: ["万円～", "万円"]
		},
		{
			title: "専有面積",
			name: ["area_bottom", "area_top"],
			type: "selectRange",
			values: [
				["指定なし", "", ""], 
				["指定なし", "", ""]
			],
			input: {"area_bottom": "指定なし", "area_top": "指定なし"},
			desc: ["m²～", "m²"]
		},
		{
			title: "駅徒歩",
			name: ["station_time_bottom", "station_time_top"],
			type: "selectRange",
			values: [
				["指定なし", "5", "10", "15", "20", "25"], 
				["指定なし", "5", "10", "15", "20", "25"]
			],
			input: {"station_time_bottom": "指定なし", "station_time_top": "指定なし"},
			desc: ["分～", "分"]
		},
		{
			title: "間取り",
			name: "layout",
			type: "checkbox",
			values: [
				{label: "1ルーム", value: '1ルーム'}, 
				{label: "1K", value: '1k'},
				{label: "1DK", value: '1dk'},
				{label: "1LDK", value: '1ldk'},
				{label: "2K", value: '2k'},
				{label: "2DK", value: '2dk'},
				{label: "2LDK", value: '2ldk'},
				{label: "3K", value: '3k'},
				{label: "3DK", value: '3dk'},
				{label: "3LDK", value: '3ldk'},
				{label: "4K~", value: '4k'},
			],
			input: {},
		},
	],
	2: [
		{
			title: "価格",
			name: ["price_bottom", "price_top"],
			type: "selectRange",
			values: [
				["指定なし", "1", "2"], 
				["指定なし", "3", "4"]
			],
			input: {"price_bottom": "指定なし", "price_top": "指定なし"},
			desc: ["万円～", "万円"]
		},
		{
			title: "専有面積",
			name: ["area_bottom", "area_top"],
			type: "selectRange",
			values: [
				["指定なし", "", ""], 
				["指定なし", "", ""]
			],
			input: {"area_bottom": "指定なし", "area_top": "指定なし"},
			desc: ["m²～", "m²"]
		},
		{
			title: "駅徒歩",
			name: ["station_time_bottom", "station_time_top"],
			type: "selectRange",
			values: [
				["指定なし", "5", "10", "15", "20", "25"], 
				["指定なし", "5", "10", "15", "20", "25"]
			],
			input: {"station_time_bottom": "指定なし", "station_time_top": "指定なし"},
			desc: ["分～", "分"]
		},
		{
			title: "間取り",
			name: "layout",
			type: "checkbox",
			values: [
				{label: "1ルーム", value: '1ルーム'}, 
				{label: "1K", value: '1k'},
				{label: "1DK", value: '1dk'},
				{label: "1LDK", value: '1ldk'},
				{label: "2K", value: '2k'},
				{label: "2DK", value: '2dk'},
				{label: "2LDK", value: '2ldk'},
				{label: "3K", value: '3k'},
				{label: "3DK", value: '3dk'},
				{label: "3LDK", value: '3ldk'},
				{label: "4K~", value: '4k'},
			],
			input: {},
		},
	],
	3: [
		{
			title: "価格",
			name: ["price_bottom", "price_top"],
			type: "selectRange",
			values: [
				["指定なし", "1", "2"], 
				["指定なし", "3", "4"]
			],
			input: {"price_bottom": "指定なし", "price_top": "指定なし"},
			desc: ["万円～", "万円"]
		},
		{
			title: "専有面積",
			name: ["area_bottom", "area_top"],
			type: "selectRange",
			values: [
				["指定なし", "", ""], 
				["指定なし", "", ""]
			],
			input: {"area_bottom": "指定なし", "area_top": "指定なし"},
			desc: ["m²～", "m²"]
		},
		{
			title: "駅徒歩",
			name: ["station_time_bottom", "station_time_top"],
			type: "selectRange",
			values: [
				["指定なし", "5", "10", "15", "20", "25"], 
				["指定なし", "5", "10", "15", "20", "25"]
			],
			input: {"station_time_bottom": "指定なし", "station_time_top": "指定なし"},
			desc: ["分～", "分"]
		},
		{
			title: "間取り",
			name: "layout",
			type: "checkbox",
			values: [
				{label: "1ルーム", value: '1ルーム'}, 
				{label: "1K", value: '1k'},
				{label: "1DK", value: '1dk'},
				{label: "1LDK", value: '1ldk'},
				{label: "2K", value: '2k'},
				{label: "2DK", value: '2dk'},
				{label: "2LDK", value: '2ldk'},
				{label: "3K", value: '3k'},
				{label: "3DK", value: '3dk'},
				{label: "3LDK", value: '3ldk'},
				{label: "4K~", value: '4k'},
			],
			input: {},
		},
	],
	4: [
		{
			title: "価格",
			name: ["price_bottom", "price_top"],
			type: "selectRange",
			values: [
				["指定なし", "1", "2"], 
				["指定なし", "3", "4"]
			],
			input: {"price_bottom": "指定なし", "price_top": "指定なし"},
			desc: ["万円～", "万円"]
		},
		{
			title: "専有面積",
			name: ["area_bottom", "area_top"],
			type: "selectRange",
			values: [
				["指定なし", "", ""], 
				["指定なし", "", ""]
			],
			input: {"area_bottom": "指定なし", "area_top": "指定なし"},
			desc: ["m²～", "m²"]
		},
		{
			title: "駅徒歩",
			name: ["station_time_bottom", "station_time_top"],
			type: "selectRange",
			values: [
				["指定なし", "5", "10", "15", "20", "25"], 
				["指定なし", "5", "10", "15", "20", "25"]
			],
			input: {"station_time_bottom": "指定なし", "station_time_top": "指定なし"},
			desc: ["分～", "分"]
		},
		{
			title: "間取り",
			name: "layout",
			type: "checkbox",
			values: [
				{label: "1ルーム", value: '1ルーム'}, 
				{label: "1K", value: '1k'},
				{label: "1DK", value: '1dk'},
				{label: "1LDK", value: '1ldk'},
				{label: "2K", value: '2k'},
				{label: "2DK", value: '2dk'},
				{label: "2LDK", value: '2ldk'},
				{label: "3K", value: '3k'},
				{label: "3DK", value: '3dk'},
				{label: "3LDK", value: '3ldk'},
				{label: "4K~", value: '4k'},
			],
			input: {},
		},
	],
	5: [
		{
			title: "価格",
			name: ["price_bottom", "price_top"],
			type: "selectRange",
			values: [
				["指定なし", "1", "2"], 
				["指定なし", "3", "4"]
			],
			input: {"price_bottom": "指定なし", "price_top": "指定なし"},
			desc: ["万円～", "万円"]
		},
		{
			title: "専有面積",
			name: ["area_bottom", "area_top"],
			type: "selectRange",
			values: [
				["指定なし", "", ""], 
				["指定なし", "", ""]
			],
			input: {"area_bottom": "指定なし", "area_top": "指定なし"},
			desc: ["m²～", "m²"]
		},
		{
			title: "駅徒歩",
			name: ["station_time_bottom", "station_time_top"],
			type: "selectRange",
			values: [
				["指定なし", "5", "10", "15", "20", "25"], 
				["指定なし", "5", "10", "15", "20", "25"]
			],
			input: {"station_time_bottom": "指定なし", "station_time_top": "指定なし"},
			desc: ["分～", "分"]
		},
		{
			title: "間取り",
			name: "layout",
			type: "checkbox",
			values: [
				{label: "1ルーム", value: '1ルーム'}, 
				{label: "1K", value: '1k'},
				{label: "1DK", value: '1dk'},
				{label: "1LDK", value: '1ldk'},
				{label: "2K", value: '2k'},
				{label: "2DK", value: '2dk'},
				{label: "2LDK", value: '2ldk'},
				{label: "3K", value: '3k'},
				{label: "3DK", value: '3dk'},
				{label: "3LDK", value: '3ldk'},
				{label: "4K~", value: '4k'},
			],
			input: {},
		},
	],
	6: [
		{
			title: "価格",
			name: ["price_bottom", "price_top"],
			type: "selectRange",
			values: [
				["指定なし", "1", "2"], 
				["指定なし", "3", "4"]
			],
			input: {"price_bottom": "指定なし", "price_top": "指定なし"},
			desc: ["万円～", "万円"]
		},
		{
			title: "専有面積",
			name: ["area_bottom", "area_top"],
			type: "selectRange",
			values: [
				["指定なし", "", ""], 
				["指定なし", "", ""]
			],
			input: {"area_bottom": "指定なし", "area_top": "指定なし"},
			desc: ["m²～", "m²"]
		},
		{
			title: "駅徒歩",
			name: ["station_time_bottom", "station_time_top"],
			type: "selectRange",
			values: [
				["指定なし", "5", "10", "15", "20", "25"], 
				["指定なし", "5", "10", "15", "20", "25"]
			],
			input: {"station_time_bottom": "指定なし", "station_time_top": "指定なし"},
			desc: ["分～", "分"]
		},
		{
			title: "間取り",
			name: "layout",
			type: "checkbox",
			values: [
				{label: "1ルーム", value: '1ルーム'}, 
				{label: "1K", value: '1k'},
				{label: "1DK", value: '1dk'},
				{label: "1LDK", value: '1ldk'},
				{label: "2K", value: '2k'},
				{label: "2DK", value: '2dk'},
				{label: "2LDK", value: '2ldk'},
				{label: "3K", value: '3k'},
				{label: "3DK", value: '3dk'},
				{label: "3LDK", value: '3ldk'},
				{label: "4K~", value: '4k'},
			],
			input: {},
		},
	],
	7: [
		{
			title: "価格",
			name: ["price_bottom", "price_top"],
			type: "selectRange",
			values: [
				["指定なし", "1", "2"], 
				["指定なし", "3", "4"]
			],
			input: {"price_bottom": "指定なし", "price_top": "指定なし"},
			desc: ["万円～", "万円"]
		},
		{
			title: "土地面積",
			name: ["area_bottom", "area_top"],
			type: "selectRange",
			values: [
				["指定なし", "", ""], 
				["指定なし", "", ""]
			],
			input: {"area_bottom": "指定なし", "area_top": "指定なし"},
			desc: ["m²～", "m²"]
		},
		{
			title: "駅徒歩",
			name: ["station_time_bottom", "station_time_top"],
			type: "selectRange",
			values: [
				["指定なし", "5", "10", "15", "20", "25"], 
				["指定なし", "5", "10", "15", "20", "25"]
			],
			input: {"station_time_bottom": "指定なし", "station_time_top": "指定なし"},
			desc: ["分～", "分"]
		},
	],
}

condition.moreConditionsSelect = {
    1: [
		{
			title: "築年数",
			name: "house_age",
			values: ["指定なし", "1年未満", "3年以内", "5年以内", "7年以内", "10年以内", "15年以内", "20年以内", "25年以内", "30年以内", "30年以上"],
			input: {"house_age": "指定なし"},
		},
		{
			title: "フロア",
			name: "number_of_floors",
			values: ["指定なし", "1階", "2階以上", "5階以上", "10階以上", "15階以上", "20階以上", "地下"],
			input: {"number_of_floors": "指定なし"},
		},
		{
			title: "建物規模",
			name: "building_scale",
			values: ["指定なし", "総戸数30戸未満", "総戸数30戸以上", "総戸数100戸以上", "3階建て以下", "10階建て以上", "20階建て以上"],
			input: {"building_scale": "指定なし"},
		},
		{
			title: "向き",
			name: "house_facing",
			values: ["指定なし", "東", "西", "南", "北"],
			input: {"house_facing": "指定なし"},
		},
		{
			title: "构造",
			name: "house_struction",
			values: ["指定なし", "", "", "", "", "", ""],
			input: {"house_struction": "指定なし"},
		},
	],
    2: [
		{
			title: "フロア",
			name: "number_of_floors",
			values: ["指定なし", "1階", "2階以上", "5階以上", "10階以上", "15階以上", "20階以上", "地下"],
			input: {"number_of_floors": "指定なし"},
		},
		{
			title: "建物規模",
			name: "building_scale",
			values: ["指定なし", "総戸数30戸未満", "総戸数30戸以上", "総戸数100戸以上", "3階建て以下", "10階建て以上", "20階建て以上"],
			input: {"building_scale": "指定なし"},
		},
		{
			title: "向き",
			name: "house_facing",
			values: ["指定なし", "東", "西", "南", "北"],
			input: {"house_facing": "指定なし"},
		},
		{
			title: "构造",
			name: "house_struction",
			values: ["指定なし", "", "", "", "", "", ""],
			input: {"house_struction": "指定なし"},
		},
	],
    3: [
		{
			title: "築年数",
			name: "house_age",
			values: ["指定なし", "1年未満", "3年以内", "5年以内", "7年以内", "10年以内", "15年以内", "20年以内", "25年以内", "30年以内", "30年以上"],
			input: {"house_age": "指定なし"},
		},
		{
			title: "构造",
			name: "house_struction",
			values: ["指定なし", "", "", "", "", "", ""],
			input: {"house_struction": "指定なし"},
		},
	],
    4: [
		{
			title: "构造",
			name: "house_struction",
			values: ["指定なし", "", "", "", "", "", ""],
			input: {"house_struction": "指定なし"},
		},
	],
    5: [
		{
			title: "築年数",
			name: "house_age",
			values: ["指定なし", "1年未満", "3年以内", "5年以内", "7年以内", "10年以内", "15年以内", "20年以内", "25年以内", "30年以内", "30年以上"],
			input: {"house_age": "指定なし"},
		},
		{
			title: "フロア",
			name: "number_of_floors",
			values: ["指定なし", "1階", "2階以上", "5階以上", "10階以上", "15階以上", "20階以上", "地下"],
			input: {"number_of_floors": "指定なし"},
		},
		{
			title: "建物規模",
			name: "building_scale",
			values: ["指定なし", "総戸数30戸未満", "総戸数30戸以上", "総戸数100戸以上", "3階建て以下", "10階建て以上", "20階建て以上"],
			input: {"building_scale": "指定なし"},
		},
		{
			title: "向き",
			name: "house_facing",
			values: ["指定なし", "東", "西", "南", "北"],
			input: {"house_facing": "指定なし"},
		},
		{
			title: "构造",
			name: "house_struction",
			values: ["指定なし", "", "", "", "", "", ""],
			input: {"house_struction": "指定なし"},
		},
	],
    6: [
		{
			title: "築年数",
			name: "house_age",
			values: ["指定なし", "1年未満", "3年以内", "5年以内", "7年以内", "10年以内", "15年以内", "20年以内", "25年以内", "30年以内", "30年以上"],
			input: {"house_age": "指定なし"},
		},
		{
			title: "构造",
			name: "house_struction",
			values: ["指定なし", "", "", "", "", "", ""],
			input: {"house_struction": "指定なし"},
		},
	],
}

condition.moreConditionsCheckBox = {
    1: [
		{
			title: "室内設備",
			name: "indoorFacility",
			type: "checkbox",
			values: [
				{label: "室内洗濯機置き場", value: 'has_indoor_laundry_space'}, 
				{label: "ウォークインクローゼット", value: 'has_walk_in_closet'},
				{label: "シューズボックス", value: 'has_shoes_box'},
				{label: "床暖房", value: 'has_underfloor_heating'},
				{label: "家具家電付き", value: 'is_furniture_included'},
			],
			input: {},
		},
		{
			title: "建物設備",
			name: "buildingFacility",
			values: [
				{label: "バルコニー", value: 'has_balcony'}, 
				{label: "エレベーター", value: 'has_elevator'},
				{label: "敷地内ゴミ置き場", value: 'has_on_site_trash_space'},
				{label: "駐車場", value: 'has_parking_lot'},
				{label: "バイク置き場", value: 'has_motocycle_parking_lot'},
				{label: "専用庭", value: 'has_private_garden'},
				{label: "都市ガス", value: 'has_city_gas'},
			],
			input: {},
		},
		{
			title: "キッチン",
			name: "kitchen",
			values: [
				{label: "システムキッチン", value: 'has_system_kitchen1r'}, 
				{label: "カウンターキッチン", value: 'has_counter_kitchen'},
				{label: "2口コンロ二個以上", value: 'has_two_more_burners'},
				{label: "食器洗い機", value: 'has_dishwasher'},
			],
			input: {},
		},
		{
			title: "バス・トイレ",
			name: "bathToilet",
			values: [
				{label: "バストイレ別", value: 'is_separate_bath_and_toilet'}, 
				{label: "洗面所独立", value: 'is_independent_washroom'},
				{label: "温水洗浄便座", value: 'has_bidet'},
				{label: "追焚機能", value: 'has_reheating_bath'},
				{label: "浴室乾燥機", value: 'has_bathroom_dryer'},
			],
			input: {},
		},
		{
			title: "特徴・立地",
			name: "specific",
			values: [
				{label: "角部屋", value: 'is_corner_room'}, 
				{label: "フローリング", value: 'has_flooring'},
				{label: "ロフト", value: 'is_loft'},
				{label: "最上階", value: 'is_top_floor'},
			],
			input: {},
		},
		{
			title: "テレビ・通信",
			name: "television",
			values: [
				{label: "インターネット対応", value: 'is_internet_applicable'}, 
			],
			input: {},
		},
		{
			title: "セキュリティ",
			name: "security",
			values: [
				{label: "オートロック", value: 'has_autolock'}, 
				{label: "モニター付きインターホン", value: 'has_intercom_with_monitor'},
				{label: "防犯カメラ", value: 'has_security_camera'},
			],
			input: {},
		},
		{
			title: "その他",
			name: "other",
			values: [
				{label: "内装リフォーム済み", value: 'is_reformed'}, 
				{label: "保証人不要", value: 'is_no_guarantor_required'},
			],
			input: {},
		},
	],
    2: [
		{
			title: "室内設備",
			name: "indoorFacility",
			type: "checkbox",
			values: [
				{label: "室内洗濯機置き場", value: 'has_indoor_laundry_space'}, 
				{label: "ウォークインクローゼット", value: 'has_walk_in_closet'},
				{label: "シューズボックス", value: 'has_shoes_box'},
				{label: "床暖房", value: 'has_underfloor_heating'},
				{label: "家具家電付き", value: 'is_furniture_included'},
			],
			input: {},
		},
		{
			title: "建物設備",
			name: "buildingFacility",
			values: [
				{label: "バルコニー", value: 'has_balcony'}, 
				{label: "エレベーター", value: 'has_elevator'},
				{label: "敷地内ゴミ置き場", value: 'has_on_site_trash_space'},
				{label: "駐車場", value: 'has_parking_lot'},
				{label: "バイク置き場", value: 'has_motocycle_parking_lot'},
				{label: "専用庭", value: 'has_private_garden'},
				{label: "都市ガス", value: 'has_city_gas'},
			],
			input: {},
		},
		{
			title: "キッチン",
			name: "kitchen",
			values: [
				{label: "システムキッチン", value: 'has_system_kitchen1r'}, 
				{label: "カウンターキッチン", value: 'has_counter_kitchen'},
				{label: "2口コンロ二個以上", value: 'has_two_more_burners'},
				{label: "食器洗い機", value: 'has_dishwasher'},
			],
			input: {},
		},
		{
			title: "バス・トイレ",
			name: "bathToilet",
			values: [
				{label: "バストイレ別", value: 'is_separate_bath_and_toilet'}, 
				{label: "洗面所独立", value: 'is_independent_washroom'},
				{label: "温水洗浄便座", value: 'has_bidet'},
				{label: "追焚機能", value: 'has_reheating_bath'},
				{label: "浴室乾燥機", value: 'has_bathroom_dryer'},
			],
			input: {},
		},
		{
			title: "特徴・立地",
			name: "specific",
			values: [
				{label: "角部屋", value: 'is_corner_room'}, 
				{label: "フローリング", value: 'has_flooring'},
				{label: "ロフト", value: 'is_loft'},
				{label: "最上階", value: 'is_top_floor'},
			],
			input: {},
		},
		{
			title: "テレビ・通信",
			name: "television",
			values: [
				{label: "インターネット対応", value: 'is_internet_applicable'}, 
			],
			input: {},
		},
		{
			title: "セキュリティ",
			name: "security",
			values: [
				{label: "オートロック", value: 'has_autolock'}, 
				{label: "モニター付きインターホン", value: 'has_intercom_with_monitor'},
				{label: "防犯カメラ", value: 'has_security_camera'},
			],
			input: {},
		},
		{
			title: "その他",
			name: "other",
			values: [
				{label: "保証人不要", value: 'is_no_guarantor_required'},
			],
			input: {},
		},
	],
    3: [
		{
			title: "室内設備",
			name: "indoorFacility",
			type: "checkbox",
			values: [
				{label: "室内洗濯機置き場", value: 'has_indoor_laundry_space'}, 
				{label: "ウォークインクローゼット", value: 'has_walk_in_closet'},
				{label: "シューズボックス", value: 'has_shoes_box'},
				{label: "床暖房", value: 'has_underfloor_heating'},
				{label: "家具家電付き", value: 'is_furniture_included'},
			],
			input: {},
		},
		{
			title: "建物設備",
			name: "buildingFacility",
			values: [
				{label: "バルコニー", value: 'has_balcony'}, 
				{label: "エレベーター", value: 'has_elevator'},
				{label: "敷地内ゴミ置き場", value: 'has_on_site_trash_space'},
				{label: "駐車場", value: 'has_parking_lot'},
				{label: "バイク置き場", value: 'has_motocycle_parking_lot'},
				{label: "専用庭", value: 'has_private_garden'},
				{label: "都市ガス", value: 'has_city_gas'},
			],
			input: {},
		},
		{
			title: "キッチン",
			name: "kitchen",
			values: [
				{label: "システムキッチン", value: 'has_system_kitchen1r'}, 
				{label: "カウンターキッチン", value: 'has_counter_kitchen'},
				{label: "2口コンロ二個以上", value: 'has_two_more_burners'},
				{label: "食器洗い機", value: 'has_dishwasher'},
			],
			input: {},
		},
		{
			title: "バス・トイレ",
			name: "bathToilet",
			values: [
				{label: "バストイレ別", value: 'is_separate_bath_and_toilet'}, 
				{label: "洗面所独立", value: 'is_independent_washroom'},
				{label: "温水洗浄便座", value: 'has_bidet'},
				{label: "追焚機能", value: 'has_reheating_bath'},
				{label: "浴室乾燥機", value: 'has_bathroom_dryer'},
			],
			input: {},
		},
		{
			title: "特徴・立地",
			name: "specific",
			values: [
				{label: "フローリング", value: 'has_flooring'},
			],
			input: {},
		},
		{
			title: "テレビ・通信",
			name: "television",
			values: [
				{label: "インターネット対応", value: 'is_internet_applicable'}, 
			],
			input: {},
		},
		{
			title: "セキュリティ",
			name: "security",
			values: [
				{label: "オートロック", value: 'has_autolock'}, 
				{label: "モニター付きインターホン", value: 'has_intercom_with_monitor'},
				{label: "防犯カメラ", value: 'has_security_camera'},
			],
			input: {},
		},
		{
			title: "その他",
			name: "other",
			values: [
				{label: "内装リフォーム済み", value: 'is_reformed'}, 
				{label: "保証人不要", value: 'is_no_guarantor_required'},
			],
			input: {},
		},
	],
    4: [
		{
			title: "室内設備",
			name: "indoorFacility",
			type: "checkbox",
			values: [
				{label: "室内洗濯機置き場", value: 'has_indoor_laundry_space'}, 
				{label: "ウォークインクローゼット", value: 'has_walk_in_closet'},
				{label: "シューズボックス", value: 'has_shoes_box'},
				{label: "床暖房", value: 'has_underfloor_heating'},
				{label: "家具家電付き", value: 'is_furniture_included'},
			],
			input: {},
		},
		{
			title: "建物設備",
			name: "buildingFacility",
			values: [
				{label: "バルコニー", value: 'has_balcony'}, 
				{label: "エレベーター", value: 'has_elevator'},
				{label: "敷地内ゴミ置き場", value: 'has_on_site_trash_space'},
				{label: "駐車場", value: 'has_parking_lot'},
				{label: "バイク置き場", value: 'has_motocycle_parking_lot'},
				{label: "専用庭", value: 'has_private_garden'},
				{label: "都市ガス", value: 'has_city_gas'},
			],
			input: {},
		},
		{
			title: "キッチン",
			name: "kitchen",
			values: [
				{label: "システムキッチン", value: 'has_system_kitchen1r'}, 
				{label: "カウンターキッチン", value: 'has_counter_kitchen'},
				{label: "2口コンロ二個以上", value: 'has_two_more_burners'},
				{label: "食器洗い機", value: 'has_dishwasher'},
			],
			input: {},
		},
		{
			title: "バス・トイレ",
			name: "bathToilet",
			values: [
				{label: "バストイレ別", value: 'is_separate_bath_and_toilet'}, 
				{label: "洗面所独立", value: 'is_independent_washroom'},
				{label: "温水洗浄便座", value: 'has_bidet'},
				{label: "追焚機能", value: 'has_reheating_bath'},
				{label: "浴室乾燥機", value: 'has_bathroom_dryer'},
			],
			input: {},
		},
		{
			title: "特徴・立地",
			name: "specific",
			values: [
				{label: "フローリング", value: 'has_flooring'},
			],
			input: {},
		},
		{
			title: "テレビ・通信",
			name: "television",
			values: [
				{label: "インターネット対応", value: 'is_internet_applicable'}, 
			],
			input: {},
		},
		{
			title: "セキュリティ",
			name: "security",
			values: [
				{label: "オートロック", value: 'has_autolock'}, 
				{label: "モニター付きインターホン", value: 'has_intercom_with_monitor'},
				{label: "防犯カメラ", value: 'has_security_camera'},
			],
			input: {},
		},
		{
			title: "その他",
			name: "other",
			values: [
				{label: "保証人不要", value: 'is_no_guarantor_required'},
			],
			input: {},
		},
	],
    5: [
		{
			title: "室内設備",
			name: "indoorFacility",
			type: "checkbox",
			values: [
				{label: "室内洗濯機置き場", value: 'has_indoor_laundry_space'}, 
				{label: "ウォークインクローゼット", value: 'has_walk_in_closet'},
				{label: "シューズボックス", value: 'has_shoes_box'},
				{label: "床暖房", value: 'has_underfloor_heating'},
				{label: "家具家電付き", value: 'is_furniture_included'},
			],
			input: {},
		},
		{
			title: "建物設備",
			name: "buildingFacility",
			values: [
				{label: "バルコニー", value: 'has_balcony'}, 
				{label: "エレベーター", value: 'has_elevator'},
				{label: "敷地内ゴミ置き場", value: 'has_on_site_trash_space'},
				{label: "駐車場", value: 'has_parking_lot'},
				{label: "バイク置き場", value: 'has_motocycle_parking_lot'},
				{label: "専用庭", value: 'has_private_garden'},
				{label: "都市ガス", value: 'has_city_gas'},
			],
			input: {},
		},
		{
			title: "キッチン",
			name: "kitchen",
			values: [
				{label: "システムキッチン", value: 'has_system_kitchen1r'}, 
				{label: "カウンターキッチン", value: 'has_counter_kitchen'},
				{label: "2口コンロ二個以上", value: 'has_two_more_burners'},
				{label: "食器洗い機", value: 'has_dishwasher'},
			],
			input: {},
		},
		{
			title: "バス・トイレ",
			name: "bathToilet",
			values: [
				{label: "バストイレ別", value: 'is_separate_bath_and_toilet'}, 
				{label: "洗面所独立", value: 'is_independent_washroom'},
				{label: "温水洗浄便座", value: 'has_bidet'},
				{label: "追焚機能", value: 'has_reheating_bath'},
				{label: "浴室乾燥機", value: 'has_bathroom_dryer'},
			],
			input: {},
		},
		{
			title: "特徴・立地",
			name: "specific",
			values: [
				{label: "角部屋", value: 'is_corner_room'}, 
				{label: "フローリング", value: 'has_flooring'},
				{label: "ロフト", value: 'is_loft'},
				{label: "最上階", value: 'is_top_floor'},
			],
			input: {},
		},
		{
			title: "テレビ・通信",
			name: "television",
			values: [
				{label: "インターネット対応", value: 'is_internet_applicable'}, 
			],
			input: {},
		},
		{
			title: "セキュリティ",
			name: "security",
			values: [
				{label: "オートロック", value: 'has_autolock'}, 
				{label: "モニター付きインターホン", value: 'has_intercom_with_monitor'},
				{label: "防犯カメラ", value: 'has_security_camera'},
			],
			input: {},
		},
		{
			title: "入居条件",
			name: "condition",
			values: [
				{label: "即入居可", value: 'is_available_for_immediate_move_in'}, 
				{label: "ペット相談可", value: 'is_pets_negotiable'},
				{label: "女性限定", value: 'is_only_women'},
				{label: "ルームシェア可", value: 'is_available_for_roomshare'},
			],
			input: {},
		},
		{
			title: "その他",
			name: "other",
			values: [
				{label: "内装リフォーム済み", value: 'is_reformed'}, 
				{label: "保証人不要", value: 'is_no_guarantor_required'},
			],
			input: {},
		},
	],
    6: [
		{
			title: "室内設備",
			name: "indoorFacility",
			type: "checkbox",
			values: [
				{label: "室内洗濯機置き場", value: 'has_indoor_laundry_space'}, 
				{label: "ウォークインクローゼット", value: 'has_walk_in_closet'},
				{label: "シューズボックス", value: 'has_shoes_box'},
				{label: "床暖房", value: 'has_underfloor_heating'},
				{label: "家具家電付き", value: 'is_furniture_included'},
			],
			input: {},
		},
		{
			title: "建物設備",
			name: "buildingFacility",
			values: [
				{label: "バルコニー", value: 'has_balcony'}, 
				{label: "エレベーター", value: 'has_elevator'},
				{label: "敷地内ゴミ置き場", value: 'has_on_site_trash_space'},
				{label: "駐車場", value: 'has_parking_lot'},
				{label: "バイク置き場", value: 'has_motocycle_parking_lot'},
				{label: "専用庭", value: 'has_private_garden'},
				{label: "都市ガス", value: 'has_city_gas'},
			],
			input: {},
		},
		{
			title: "キッチン",
			name: "kitchen",
			values: [
				{label: "システムキッチン", value: 'has_system_kitchen1r'}, 
				{label: "カウンターキッチン", value: 'has_counter_kitchen'},
				{label: "2口コンロ二個以上", value: 'has_two_more_burners'},
				{label: "食器洗い機", value: 'has_dishwasher'},
			],
			input: {},
		},
		{
			title: "バス・トイレ",
			name: "bathToilet",
			values: [
				{label: "バストイレ別", value: 'is_separate_bath_and_toilet'}, 
				{label: "洗面所独立", value: 'is_independent_washroom'},
				{label: "温水洗浄便座", value: 'has_bidet'},
				{label: "追焚機能", value: 'has_reheating_bath'},
				{label: "浴室乾燥機", value: 'has_bathroom_dryer'},
			],
			input: {},
		},
		{
			title: "特徴・立地",
			name: "specific",
			values: [
				{label: "フローリング", value: 'has_flooring'},
			],
			input: {},
		},
		{
			title: "テレビ・通信",
			name: "television",
			values: [
				{label: "インターネット対応", value: 'is_internet_applicable'}, 
			],
			input: {},
		},
		{
			title: "セキュリティ",
			name: "security",
			values: [
				{label: "オートロック", value: 'has_autolock'}, 
				{label: "モニター付きインターホン", value: 'has_intercom_with_monitor'},
				{label: "防犯カメラ", value: 'has_security_camera'},
			],
			input: {},
		},
		{
			title: "入居条件",
			name: "condition",
			values: [
				{label: "即入居可", value: 'is_available_for_immediate_move_in'}, 
				{label: "ペット相談可", value: 'is_pets_negotiable'},
				{label: "女性限定", value: 'is_only_women'},
				{label: "ルームシェア可", value: 'is_available_for_roomshare'},
			],
			input: {},
		},
		{
			title: "その他",
			name: "other",
			values: [
				{label: "内装リフォーム済み", value: 'is_reformed'}, 
				{label: "保証人不要", value: 'is_no_guarantor_required'},
			],
			input: {},
		},
	],
}

export default condition