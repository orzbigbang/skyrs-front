// 1: 中古マンション　2: 新築マンション　3: 中古一戸建て　4: 新築一戸建て　5: 賃貸マンション　6: 賃貸一戸建て

const info = {}

info.highlights = {
    1: [
        {
            _key: "価格/管理費",
            _value: {
                selling_price: "160,000円",
                management_fee: "15,000円"
            }
        },
        {
            _key: "間取り/専有面積",
            _value: {
                layout: "1LDK",
                exclusive_area: "40.83㎡"
            }
        },
    ],
    2: [
        {
            _key: "価格/管理費",
            _value: {
                selling_price: "160,000円",
                management_fee: "15,000円"
            }
        },
        {
            _key: "間取り/専有面積",
            _value: {
                layout: "1LDK",
                exclusive_area: "40.83㎡"
            }
        },
    ],
    3: [
        {
            _key: "価格",
            _value: {
                selling_price: "160,000円"
            }
        },
        {
            _key: "間取り/建物面積",
            _value: {
                layout: "1LDK",
                total_building_area: "40.83㎡"
            }
        },
    ],
    4: [
        {
            _key: "価格",
            _value: {
                selling_price: "160,000円"
            }
        },
        {
            _key: "間取り/建物面積",
            _value: {
                layout: "1LDK",
                total_building_area: "40.83㎡"
            }
        },
    ],
    5: [
        {
            _key: "賃料/管理費",
            _value: {
                renting_price: "160,000円",
                management_fee: "15,000円"
            }
        },
        {
            _key: "間取り/専有面積",
            _value: {
                layout: "1LDK",
                exclusive_area: "40.83㎡"
            }
        },
    ],
    6: [
        {
            _key: "賃料/管理費",
            _value: {
                renting_price: "160,000円",
                management_fee: "15,000円"
            }
        },
        {
            _key: "間取り/建物面積",
            _value: {
                layout: "1LDK",
                total_building_area: "40.83㎡"
            }
        },
    ],
}

info.bases = {
    1: [
        {
            _key: "諸費用",
            _value: {
                other_fee: "-",
            }
        },
        {
            _key: "修繕積立金/修繕積立基金",
            _value: {
                repair_reserve_gold: "-",
                repair_reserve_fund: "-",
            }
        },
        {
            _key: "間取り詳細",
            _value: {
                layout_detail: "1LDK",
            }
        },
        {
            _key: "完成時期/引渡可能時期",
            _value: {
                completion_date: "2000年10月",
                move_in_date: "2000年10月",
            }
        },
        {
            _key: "向き",
            _value: {
                house_facing: "南",
            }
        },
        {
            _key: "階建",
            _value: {
                total_number_of_floors: "３階",
                number_of_floors: "３階",
            }
        },
        {
            _key: "建物構造",
            _value: {
                house_struction: "木造",
            }
        },
        {
            _key: "所在地",
            _value: {
                address: "東京都江東区 北砂７丁目９－５",
            }
        },
        {
            _key: "交通",
            _value: {
                station: "湘南新宿ライン高海/新町駅 歩22分, 東武伊勢崎線/東武動物公園駅 車38分(15.2km), ＪＲ宇都宮線/栗橋駅 車30分(12.1km)",
            },
        },
    ],
    2: [
        {
            _key: "諸費用",
            _value: {
                other_fee: "-",
            }
        },
        {
            _key: "修繕積立金/修繕積立基金",
            _value: {
                repair_reserve_gold: "-",
                repair_reserve_fund: "-",
            }
        },
        {
            _key: "間取り詳細",
            _value: {
                layout_detail: "1LDK",
            }
        },
        {
            _key: "完成時期/引渡可能時期",
            _value: {
                completion_date: "2000年10月",
                move_in_date: "2000年10月",
            }
        },
        {
            _key: "向き",
            _value: {
                house_facing: "南",
            }
        },
        {
            _key: "階建",
            _value: {
                total_number_of_floors: "３階",
                number_of_floors: "３階",
            }
        },
        {
            _key: "建物構造",
            _value: {
                house_struction: "木造",
            }
        },
        {
            _key: "所在地",
            _value: {
                address: "東京都江東区 北砂７丁目９－５",
            }
        },
        {
            _key: "交通",
            _value: {
                station: "湘南新宿ライン高海/新町駅 歩22分, 東武伊勢崎線/東武動物公園駅 車38分(15.2km), ＪＲ宇都宮線/栗橋駅 車30分(12.1km)",
            },
        },
    ],
    3: [
        {
            _key: "諸費用",
            _value: {
                other_fee: "-",
            }
        },
        {
            _key: "私道負担・道路",
            _value: {
                private_road: "道路幅：4ｍ・4.6ｍ、私道負担有り（私道：68.00m2持ち分1/6づつ、未利用地：約4.48m2持ち分1/6づつ）",
            }
        },
        {
            _key: "間取り詳細",
            _value: {
                layout_detail: "1LDK",
            }
        },
        {
            _key: "完成時期/引渡可能時期",
            _value: {
                completion_date: "2000年10月",
                move_in_date: "2000年10月",
            }
        },
        {
            _key: "採光方向",
            _value: {
                house_facing: "南",
            }
        },
        {
            _key: "階建",
            _value: {
                total_number_of_floors: "３階",
                number_of_floors: "３階",
            }
        },
        {
            _key: "建物構造",
            _value: {
                house_struction: "木造",
            }
        },
        {
            _key: "所在地",
            _value: {
                address: "東京都江東区 北砂７丁目９－５",
            }
        },
        {
            _key: "交通",
            _value: {
                station: "湘南新宿ライン高海/新町駅 歩22分",
            },
        },
    ],
    4: [
        {
            _key: "諸費用",
            _value: {
                other_fee: "-",
            }
        },
        {
            _key: "私道負担・道路",
            _value: {
                private_road: "-",
            }
        },
        {
            _key: "間取り詳細",
            _value: {
                layout_detail: "1LDK",
            }
        },
        {
            _key: "完成時期/引渡可能時期",
            _value: {
                completion_date: "2000年10月",
                move_in_date: "2000年10月",
            }
        },
        {
            _key: "採光方向",
            _value: {
                house_facing: "南",
            }
        },
        {
            _key: "階建",
            _value: {
                total_number_of_floors: "３階",
                number_of_floors: "３階",
            }
        },
        {
            _key: "建物構造",
            _value: {
                house_struction: "木造",
            }
        },
        {
            _key: "所在地",
            _value: {
                address: "東京都江東区 北砂７丁目９－５",
            }
        },
        {
            _key: "交通",
            _value: {
                station: "湘南新宿ライン高海/新町駅 歩22分",
            },
        },
    ],
    5: [
        {
            _key: "敷金/礼金",
            _value: {
                deposit: "-",
                key_money: "-",
            }
        },
        {
            _key: "保証金/敷引/償却",
            _value: {
                security_deposit: "-",
                quotation_fee: "-",
                amortization_fee: "-",
            }
        },
        {
            _key: "間取り詳細",
            _value: {
                layout_detail: "1LDK",
            }
        },
        {
            _key: "完成時期",
            _value: {
                completion_date: "2000年10月",
            }
        },
        {
            _key: "向き",
            _value: {
                house_facing: "南",
            }
        },
        {
            _key: "階建",
            _value: {
                total_number_of_floors: "３階",
                number_of_floors: "３階",
            }
        },
        {
            _key: "建物構造",
            _value: {
                house_struction: "木造",
            }
        },
        {
            _key: "所在地",
            _value: {
                address: "東京都江東区 北砂７丁目９－５",
            }
        },
        {
            _key: "交通",
            _value: {
                station: "湘南新宿ライン高海/新町駅 歩22分",
            },
        },
    ],
    6: [
        {
            _key: "敷金/礼金",
            _value: {
                deposit: "-",
                key_money: "-",
            }
        },
        {
            _key: "保証金/敷引/償却",
            _value: {
                security_deposit: "-",
                quotation_fee: "-",
                amortization_fee: "-",
            }
        },
        {
            _key: "間取り詳細",
            _value: {
                layout_detail: "1LDK",
            }
        },
        {
            _key: "完成時期",
            _value: {
                completion_date: "2000年10月",
            }
        },
        {
            _key: "採光方向",
            _value: {
                house_facing: "南",
            }
        },
        {
            _key: "階建",
            _value: {
                total_number_of_floors: "３階",
                number_of_floors: "３階",
            }
        },
        {
            _key: "建物構造",
            _value: {
                house_struction: "木造",
            }
        },
        {
            _key: "所在地",
            _value: {
                address: "東京都江東区 北砂７丁目９－５",
            }
        },
        {
            _key: "交通",
            _value: {
                station: "湘南新宿ライン高海/新町駅 歩22分",
            },
        },
    ],
}

info.icons = {
    1: [
        {
            title: "建物設備",
            items:[
                {name: "has_elevator", title:"エレベーター", offset:"-860"},
                {name: "has_city_gas", title:"都市ガス", offset:"-1970"},
                {name: "has_underfloor_heating", title:"床暖房", offset:"-2130"},
                {name: "has_delivery_box", title:"宅配ボックス", offset:"160"},
                {name: "has_security_camera", title:"防犯カメラ", offset:"-920"},
                {name: "has_autolock", title:"オートロック", offset:"80"},
                {name: "is_reformed", title:"リフォーム", offset:"80"},
            ],
        },
        {   
            title: "室内設備",
            items:[
                {name: "is_furniture_included", title:"家具家電付き", offset:"-220"},
                {name: "has_indoor_laundry_space", title:"室内洗濯機置き場", offset:"-1250"},
                {name: "has_aircon", title:"エアコン", offset:"-570"},
                {name: "has_walk_in_closet", title:"ウォークインクローゼット", offset:"-1870"},
                {name: "has_shoes_box", title:"シューズボックス", offset:"-300"},
                {name: "has_balcony", title:"バルコニー", offset:"-2010"},
                {name: "is_internet_applicable", title:"インターネット対応", offset:"-340"},
            ]
        },
        {   
            title: "バス・トイレ・キッチン",
            items:[
                {name: "is_separate_bath_and_toilet", title:"バストイレ別", offset:"-220"},
                {name: "has_reheating_bath", title:"追焚機能", offset:"-1250"},
                {name: "has_bathroom_dryer", title:"浴室乾燥機", offset:"-570"},
                {name: "has_bidet", title:"温水洗浄便座", offset:"-1870"},
                {name: "is_independent_washroom", title:"洗面所独立", offset:"-300"},
                {name: "has_dishwasher", title:"食器洗い乾燥機", offset:""},
                {name: "has_system_kitchen", title:"システムキッチン", offset:""},
            ]
        },
    ],
    2: [
        {
            title: "建物設備",
            items:[
                {name: "has_elevator", title:"エレベーター", offset:"-860"},
                {name: "has_city_gas", title:"都市ガス", offset:"-1970"},
                {name: "has_underfloor_heating", title:"床暖房", offset:"-2130"},
                {name: "has_delivery_box", title:"宅配ボックス", offset:"160"},
                {name: "has_security_camera", title:"防犯カメラ", offset:"-920"},
                {name: "has_autolock", title:"オートロック", offset:"80"},
                {name: "has_on_site_trash_space", title:"敷地内ゴミ置場", offset:"80"},
            ],
        },
        {   
            title: "室内設備",
            items:[
                {name: "is_furniture_included", title:"家具家電付き", offset:"-220"},
                {name: "has_indoor_laundry_space", title:"室内洗濯機置き場", offset:"-1250"},
                {name: "has_aircon", title:"エアコン", offset:"-570"},
                {name: "has_walk_in_closet", title:"ウォークインクローゼット", offset:"-1870"},
                {name: "has_shoes_box", title:"シューズボックス", offset:"-300"},
                {name: "has_balcony", title:"バルコニー", offset:"-2010"},
                {name: "is_internet_applicable", title:"インターネット対応", offset:"-340"},
            ]
        },
        {   
            title: "バス・トイレ・キッチン",
            items:[
                {name: "is_separate_bath_and_toilet", title:"バストイレ別", offset:"-220"},
                {name: "has_reheating_bath", title:"追焚機能", offset:"-1250"},
                {name: "has_bathroom_dryer", title:"浴室乾燥機", offset:"-570"},
                {name: "has_bidet", title:"温水洗浄便座", offset:"-1870"},
                {name: "is_independent_washroom", title:"洗面所独立", offset:"-300"},
                {name: "has_dishwasher", title:"食器洗い乾燥機", offset:""},
                {name: "has_system_kitchen", title:"システムキッチン", offset:""},
            ]
        },
    ],
    3: [
        {
            title: "建物設備",
            items:[
                {name: "has_private_garden", title:"専用庭", offset:"-860"},
                {name: "has_city_gas", title:"都市ガス", offset:"-1970"},
                {name: "has_underfloor_heating", title:"床暖房", offset:"-2130"},
                {name: "has_delivery_box", title:"宅配ボックス", offset:"160"},
                {name: "has_security_camera", title:"防犯カメラ", offset:"-920"},
                {name: "has_autolock", title:"オートロック", offset:"80"},
                {name: "is_reformed", title:"リフォーム", offset:"80"},
            ],
        },
        {   
            title: "室内設備",
            items:[
                {name: "is_furniture_included", title:"家具家電付き", offset:"-220"},
                {name: "has_indoor_laundry_space", title:"室内洗濯機置き場", offset:"-1250"},
                {name: "has_aircon", title:"エアコン", offset:"-570"},
                {name: "has_walk_in_closet", title:"ウォークインクローゼット", offset:"-1870"},
                {name: "has_shoes_box", title:"シューズボックス", offset:"-300"},
                {name: "has_balcony", title:"バルコニー", offset:"-2010"},
                {name: "is_internet_applicable", title:"インターネット対応", offset:"-340"},
            ]
        },
        {   
            title: "バス・トイレ・キッチン",
            items:[
                {name: "is_separate_bath_and_toilet", title:"バストイレ別", offset:"-220"},
                {name: "has_reheating_bath", title:"追焚機能", offset:"-1250"},
                {name: "has_bathroom_dryer", title:"浴室乾燥機", offset:"-570"},
                {name: "has_bidet", title:"温水洗浄便座", offset:"-1870"},
                {name: "is_independent_washroom", title:"洗面所独立", offset:"-300"},
                {name: "has_dishwasher", title:"食器洗い乾燥機", offset:""},
                {name: "has_system_kitchen", title:"システムキッチン", offset:""},
            ]
        },
    ],
    4: [
        {
            title: "建物設備",
            items:[
                {name: "has_private_garden", title:"専用庭", offset:"-860"},
                {name: "has_city_gas", title:"都市ガス", offset:"-1970"},
                {name: "has_underfloor_heating", title:"床暖房", offset:"-2130"},
                {name: "has_delivery_box", title:"宅配ボックス", offset:"160"},
                {name: "has_security_camera", title:"防犯カメラ", offset:"-920"},
                {name: "has_autolock", title:"オートロック", offset:"80"},
                {name: "has_on_site_trash_space", title:"敷地内ゴミ置場", offset:"80"},
            ],
        },
        {   
            title: "室内設備",
            items:[
                {name: "is_furniture_included", title:"家具家電付き", offset:"-220"},
                {name: "has_indoor_laundry_space", title:"室内洗濯機置き場", offset:"-1250"},
                {name: "has_aircon", title:"エアコン", offset:"-570"},
                {name: "has_walk_in_closet", title:"ウォークインクローゼット", offset:"-1870"},
                {name: "has_shoes_box", title:"シューズボックス", offset:"-300"},
                {name: "has_balcony", title:"バルコニー", offset:"-2010"},
                {name: "is_internet_applicable", title:"インターネット対応", offset:"-340"},
            ]
        },
        {   
            title: "バス・トイレ・キッチン",
            items:[
                {name: "is_separate_bath_and_toilet", title:"バストイレ別", offset:"-220"},
                {name: "has_reheating_bath", title:"追焚機能", offset:"-1250"},
                {name: "has_bathroom_dryer", title:"浴室乾燥機", offset:"-570"},
                {name: "has_bidet", title:"温水洗浄便座", offset:"-1870"},
                {name: "is_independent_washroom", title:"洗面所独立", offset:"-300"},
                {name: "has_dishwasher", title:"食器洗い乾燥機", offset:""},
                {name: "has_system_kitchen", title:"システムキッチン", offset:""},
            ]
        },
    ],
    5: [
        {
            title: "建物設備",
            items:[
                {name: "has_elevator", title:"エレベーター", offset:"-860"},
                {name: "has_city_gas", title:"都市ガス", offset:"-1970"},
                {name: "has_underfloor_heating", title:"床暖房", offset:"-2130"},
                {name: "has_delivery_box", title:"宅配ボックス", offset:"160"},
                {name: "has_security_camera", title:"防犯カメラ", offset:"-920"},
                {name: "has_autolock", title:"オートロック", offset:"80"},
                {name: "is_reformed", title:"リフォーム", offset:"80"},
            ],
        },
        {   
            title: "室内設備",
            items:[
                {name: "is_furniture_included", title:"家具家電付き", offset:"-220"},
                {name: "has_indoor_laundry_space", title:"室内洗濯機置き場", offset:"-1250"},
                {name: "has_aircon", title:"エアコン", offset:"-570"},
                {name: "has_walk_in_closet", title:"ウォークインクローゼット", offset:"-1870"},
                {name: "has_shoes_box", title:"シューズボックス", offset:"-300"},
                {name: "has_balcony", title:"バルコニー", offset:"-2010"},
                {name: "is_internet_applicable", title:"インターネット対応", offset:"-340"},
            ]
        },
        {   
            title: "バス・トイレ・キッチン",
            items:[
                {name: "is_separate_bath_and_toilet", title:"バストイレ別", offset:"-220"},
                {name: "has_reheating_bath", title:"追焚機能", offset:"-1250"},
                {name: "has_bathroom_dryer", title:"浴室乾燥機", offset:"-570"},
                {name: "has_bidet", title:"温水洗浄便座", offset:"-1870"},
                {name: "is_independent_washroom", title:"洗面所独立", offset:"-300"},
                {name: "has_dishwasher", title:"食器洗い乾燥機", offset:""},
                {name: "has_system_kitchen", title:"システムキッチン", offset:""},
            ]
        },
    ],
    6: [
        {
            title: "建物設備",
            items:[
                {name: "has_private_garden", title:"専用庭", offset:"-860"},
                {name: "has_city_gas", title:"都市ガス", offset:"-1970"},
                {name: "has_underfloor_heating", title:"床暖房", offset:"-2130"},
                {name: "has_delivery_box", title:"宅配ボックス", offset:"160"},
                {name: "has_security_camera", title:"防犯カメラ", offset:"-920"},
                {name: "has_autolock", title:"オートロック", offset:"80"},
                {name: "is_reformed", title:"リフォーム", offset:"80"},
            ],
        },
        {   
            title: "室内設備",
            items:[
                {name: "is_furniture_included", title:"家具家電付き", offset:"-220"},
                {name: "has_indoor_laundry_space", title:"室内洗濯機置き場", offset:"-1250"},
                {name: "has_aircon", title:"エアコン", offset:"-570"},
                {name: "has_walk_in_closet", title:"ウォークインクローゼット", offset:"-1870"},
                {name: "has_shoes_box", title:"シューズボックス", offset:"-300"},
                {name: "has_balcony", title:"バルコニー", offset:"-2010"},
                {name: "is_internet_applicable", title:"インターネット対応", offset:"-340"},
            ]
        },
        {   
            title: "バス・トイレ・キッチン",
            items:[
                {name: "is_separate_bath_and_toilet", title:"バストイレ別", offset:"-220"},
                {name: "has_reheating_bath", title:"追焚機能", offset:"-1250"},
                {name: "has_bathroom_dryer", title:"浴室乾燥機", offset:"-570"},
                {name: "has_bidet", title:"温水洗浄便座", offset:"-1870"},
                {name: "is_independent_washroom", title:"洗面所独立", offset:"-300"},
                {name: "has_dishwasher", title:"食器洗い乾燥機", offset:""},
                {name: "has_system_kitchen", title:"システムキッチン", offset:""},
            ]
        },
    ],
}

info.otherInfoTable = {
    1: [
        {
            _key1: "用地类型",
            _value1: {land_usage_type: "-"},
            _key2: "地目",
            _value2: {land_category: "-"},
        },
        {
            _key1: "土地所有权",
            _value1: {land_ownership: "-"},
            _key2: "管理形态",
            _value2: {management_type: "-"},
        },
        {
            _key1: "バルコニー面積",
            _value1: {balcony_area: "-"},
            _key2: "その他の面積",
            _value2: {other_area: "-"},
        },
        {
            _key1: "駐車場",
            _value1: {parking_lot: "-"},
            _key2: "駐輪場",
            _value2: {bicycle_parking_lot: "-"},
        },
        {
            _key1: "バイク置き場",
            _value1: {motocycle_parking_lot: "-"},
            _key2: "ミニバイク置き場",
            _value2: {mini_motocycle_parking_lot: "-"},
        },
        {
            _key1: "制限事項",
            _value1: {striction: "-"},
            _key2: "その他の概要",
            _value2: {other_brief: "-"},
        },
        {
            _key1: "施工会社",
            _value1: {construction_company: "-"},
            _key2: "情報提供日",
            _value2: {information_date: "-"},
        },
    ],
    2: [
        {
            _key1: "用地类型",
            _value1: {land_usage_type: "-"},
            _key2: "地目",
            _value2: {land_category: "-"},
        },
        {
            _key1: "土地所有权",
            _value1: {land_ownership: "-"},
            _key2: "管理形态",
            _value2: {management_type: "-"},
        },
        {
            _key1: "バルコニー面積",
            _value1: {balcony_area: "-"},
            _key2: "その他の面積",
            _value2: {other_area: "-"},
        },
        {
            _key1: "駐車場",
            _value1: {parking_lot: "-"},
            _key2: "駐輪場",
            _value2: {bicycle_parking_lot: "-"},
        },
        {
            _key1: "バイク置き場",
            _value1: {motocycle_parking_lot: "-"},
            _key2: "ミニバイク置き場",
            _value2: {mini_motocycle_parking_lot: "-"},
        },
        {
            _key1: "制限事項",
            _value1: {striction: "-"},
            _key2: "その他の概要",
            _value2: {other_brief: "-"},
        },
        {
            _key1: "施工会社",
            _value1: {construction_company: "-"},
            _key2: "情報提供日",
            _value2: {information_date: "-"},
        },
    ],
    3: [
        {
            _key1: "用地类型",
            _value1: {land_usage_type: "-"},
            _key2: "地目",
            _value2: {land_category: "-"},
        },
        {
            _key1: "土地所有权",
            _value1: {land_ownership: "-"},
            _key2: "管理形态",
            _value2: {management_type: "-"},
        },
        {
            _key1: "バルコニー面積",
            _value1: {balcony_area: "-"},
            _key2: "その他の面積",
            _value2: {other_area: "-"},
        },
        {
            _key1: "土地面積",
            _value1: {land_area: "-"},
            _key2: "建ぺい率",
            _value2: {building_coverage_ratio: "-"},
        },
        {
            _key1: "制限事項",
            _value1: {striction: "-"},
            _key2: "その他の概要",
            _value2: {other_brief: "-"},
        },
        {
            _key1: "施工会社",
            _value1: {construction_company: "-"},
            _key2: "情報提供日",
            _value2: {information_date: "-"},
        },
    ],
    4: [
        {
            _key1: "用地类型",
            _value1: {land_usage_type: "-"},
            _key2: "地目",
            _value2: {land_category: "-"},
        },
        {
            _key1: "土地所有权",
            _value1: {land_ownership: "-"},
            _key2: "管理形态",
            _value2: {management_type: "-"},
        },
        {
            _key1: "バルコニー面積",
            _value1: {balcony_area: "-"},
            _key2: "その他の面積",
            _value2: {other_area: "-"},
        },
        {
            _key1: "土地面積",
            _value1: {land_area: "-"},
            _key2: "建ぺい率",
            _value2: {building_coverage_ratio: "-"},
        },
        {
            _key1: "制限事項",
            _value1: {striction: "-"},
            _key2: "その他の概要",
            _value2: {other_brief: "-"},
        },
        {
            _key1: "施工会社",
            _value1: {construction_company: "-"},
            _key2: "情報提供日",
            _value2: {information_date: "-"},
        },
    ],
    5: [
        {
            _key1: "用地类型",
            _value1: {land_usage_type: "-"},
            _key2: "地目",
            _value2: {land_category: "-"},
        },
        {
            _key1: "土地所有权",
            _value1: {land_ownership: "-"},
            _key2: "管理形态",
            _value2: {management_type: "-"},
        },
        {
            _key1: "バルコニー面積",
            _value1: {balcony_area: "-"},
            _key2: "その他の面積",
            _value2: {other_area: "-"},
        },
        {
            _key1: "駐車場",
            _value1: {parking_lot: "-"},
            _key2: "駐輪場",
            _value2: {bicycle_parking_lot: "-"},
        },
        {
            _key1: "バイク置き場",
            _value1: {motocycle_parking_lot: "-"},
            _key2: "ミニバイク置き場",
            _value2: {mini_motocycle_parking_lot: "-"},
        },
        {
            _key1: "制限事項",
            _value1: {striction: "-"},
            _key2: "その他の概要",
            _value2: {other_brief: "-"},
        },
        {
            _key1: "施工会社",
            _value1: {construction_company: "-"},
            _key2: "情報提供日",
            _value2: {information_date: "-"},
        },
    ],
    6: [
        {
            _key1: "用地类型",
            _value1: {land_usage_type: "-"},
            _key2: "地目",
            _value2: {land_category: "-"},
        },
        {
            _key1: "土地所有权",
            _value1: {land_ownership: "-"},
            _key2: "管理形态",
            _value2: {management_type: "-"},
        },
        {
            _key1: "バルコニー面積",
            _value1: {balcony_area: "-"},
            _key2: "その他の面積",
            _value2: {other_area: "-"},
        },
        {
            _key1: "土地面積",
            _value1: {land_area: "-"},
            _key2: "建ぺい率",
            _value2: {building_coverage_ratio: "-"},
        },
        {
            _key1: "制限事項",
            _value1: {striction: "-"},
            _key2: "その他の概要",
            _value2: {other_brief: "-"},
        },
        {
            _key1: "施工会社",
            _value1: {construction_company: "-"},
            _key2: "情報提供日",
            _value2: {information_date: "-"},
        },
    ],
}

export default info