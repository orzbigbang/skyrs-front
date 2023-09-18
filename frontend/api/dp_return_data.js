// 1: 中古マンション　2: 新築マンション　3: 中古一戸建て　4: 新築一戸建て　5: 賃貸マンション　6: 賃貸一戸建て 7:土地

// request的参数为 headers{Authorization: "uuid"} params{house_id: int}

// 根据house_index 返回下面对应的数据
// 同时把house_id记录到user的浏览历史表里
const dp1 = {
    highlights: {
        selling_price: "160,000円",  // 千分位逗号分隔，后面加“円”
        management_fee: "15,000円", // 千分位逗号分隔，后面加“円”
        layout: "1LDK",
        exclusive_area: "40.83㎡"  // 后面加“㎡”
    },  
    bases: {
        other_fee: "xxx 16,000円 xxx 1,000円",
        repair_reserve_gold: "160,000円",  // 千分位逗号分隔，后面加“円”。
        repair_reserve_fund: "160,000円",  // 千分位逗号分隔，后面加“円”。
        layout_detail: "洋6.5 洋5.1 LDK13.5",
        completion_date: "2000年11月",  // YYYY年mm月
        move_in_date: "2023年08月",  // YYYY年mm月
        house_facing: "南",
        total_number_of_floors: "3階",  // 后面加“階”
        number_of_floors: "3階",  // 后面加“階”
        house_struction: "木造",
        address: "東京都江東区 北砂７丁目９－５",
        station: "湘南新宿ライン高海/新町駅 歩22分, 東武伊勢崎線/東武動物公園駅 車38分(15.2km), ＪＲ宇都宮線/栗橋駅 車30分(12.1km)",  // 线路1/站点1 时间1， 线路2/站点2 时间2， 线路3/站点3 时间3
    },
    bulletpoints: {
        brief_title: "text",
        brief_desc: "text",
        bullet_point_1: "text",
        bullet_point_2: "text",
        bullet_point_3: "text",
        bullet_point_4: "text",
        bullet_point_5: "text",
        bullet_point_6: "text",
        bullet_point_7: "text",
        bullet_point_8: "text",
        bullet_point_9: "text",
        bullet_point_10: "text",

    },
    icons: [
        "has_elevator",
        "has_city_gas",
        "has_underfloor_heating",
        "has_delivery_box",
        "has_security_camera",
        "has_autolock",
        "is_reformed",
    ],    // 遍历icon-list。 把true的项目列表返回（得定义一个icon-list）
    otherInfoTable: {
        land_usage_type: "text",
        land_category: "text",
        land_ownership: "text",
        management_type: "text",
        balcony_area: "10.83㎡",  // 后面加“㎡”
        other_area: "text",
        parking_lot: "text",
        bicycle_parking_lot: "text",
        motocycle_parking_lot: "text",
        mini_motocycle_parking_lot: "text",
        striction: "text",
        other_brief: "text",
        construction_company: "text",
        information_date: "2023年08月05日",  // YYYY年mm月dd日
    },
    otherInfoList: [
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
    ],  // 遍历other-info-list。 把true的项目转换成日文列表返回（得定义一个other-info-list 和 eng:jpn 的字典）
}

const dp2 = {
    highlights: {
        selling_price: "160,000円",  // 千分位逗号分隔，后面加“円”
        management_fee: "15,000円", // 千分位逗号分隔，后面加“円”
        layout: "1LDK",
        exclusive_area: "40.83㎡"  // 后面加“㎡”
    },
    bases: {
        other_fee: "xxx 16,000円 xxx 1,000円",
        repair_reserve_gold: "160,000円",  // 千分位逗号分隔，后面加“円”。
        repair_reserve_fund: "160,000円",  // 千分位逗号分隔，后面加“円”。
        layout_detail: "洋6.5 洋5.1 LDK13.5",
        completion_date: "2000年11月",  // YYYY年mm月
        move_in_date: "2023年08月",  // YYYY年mm月
        house_facing: "南",
        total_number_of_floors: "3階",  // 后面加“階”
        number_of_floors: "3階",  // 后面加“階”
        house_struction: "木造",
        address: "東京都江東区 北砂７丁目９－５",
        station: "湘南新宿ライン高海/新町駅 歩22分, 東武伊勢崎線/東武動物公園駅 車38分(15.2km), ＪＲ宇都宮線/栗橋駅 車30分(12.1km)",  // 线路1/站点1 时间1， 线路2/站点2 时间2， 线路3/站点3 时间3
    },
    bulletpoints: {
        brief_title: "text",
        brief_desc: "text",
        bullet_point_1: "text",
        bullet_point_2: "text",
        bullet_point_3: "text",
        bullet_point_4: "text",
        bullet_point_5: "text",
        bullet_point_6: "text",
        bullet_point_7: "text",
        bullet_point_8: "text",
        bullet_point_9: "text",
        bullet_point_10: "text",

    },
    icons: [
        "has_elevator",
        "has_city_gas",
        "has_underfloor_heating",
        "has_delivery_box",
        "has_security_camera",
        "has_autolock",
        "is_reformed",
    ],    // 遍历icon-list。 把true的项目列表返回（得定义一个icon-list）
    otherInfoTable: {
        land_usage_type: "text",
        land_category: "text",
        land_ownership: "text",
        management_type: "text",
        balcony_area: "10.83㎡",  // 后面加“㎡”
        other_area: "text",
        parking_lot: "text",
        bicycle_parking_lot: "text",
        motocycle_parking_lot: "text",
        mini_motocycle_parking_lot: "text",
        striction: "text",
        other_brief: "text",
        construction_company: "text",
        information_date: "2023年08月05日",  // YYYY年mm月dd日
    },
    otherInfoList: [
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
    ],  // 遍历other-info-list。 把true的项目转换成日文列表返回（得定义一个other-info-list 和 eng:jpn 的字典）
}

const dp3 = {
    highlights: {
        selling_price: "160,000円",  // 千分位逗号分隔，后面加“円”
        layout: "1LDK",
        total_building_area: "40.83㎡"  // 后面加“㎡”
    },
    bases: {
        other_fee: "xxx 16,000円 xxx 1,000円",
        private_road: "道路幅：4ｍ・4.6ｍ、私道負担有り（私道：68.00m2持ち分1/6づつ、未利用地：約4.48m2持ち分1/6づつ）",
        layout_detail: "洋6.5 洋5.1 LDK13.5",
        completion_date: "2000年11月",  // YYYY年mm月
        move_in_date: "2023年08月",  // YYYY年mm月
        house_facing: "南",
        total_number_of_floors: "3階",  // 后面加“階”
        number_of_floors: "3階",  // 后面加“階”
        house_struction: "木造",
        address: "東京都江東区 北砂７丁目９－５",
        station: "湘南新宿ライン高海/新町駅 歩22分, 東武伊勢崎線/東武動物公園駅 車38分(15.2km), ＪＲ宇都宮線/栗橋駅 車30分(12.1km)",  // 线路1/站点1 时间1， 线路2/站点2 时间2， 线路3/站点3 时间3
    },
    bulletpoints: {
        brief_title: "text",
        brief_desc: "text",
        bullet_point_1: "text",
        bullet_point_2: "text",
        bullet_point_3: "text",
        bullet_point_4: "text",
        bullet_point_5: "text",
        bullet_point_6: "text",
        bullet_point_7: "text",
        bullet_point_8: "text",
        bullet_point_9: "text",
        bullet_point_10: "text",

    },
    icons: [
        "has_elevator",
        "has_city_gas",
        "has_underfloor_heating",
        "has_delivery_box",
        "has_security_camera",
        "has_autolock",
        "is_reformed",
    ],    // 遍历icon-list。 把true的项目列表返回（得定义一个icon-list）
    otherInfoTable: {
        land_usage_type: "text",
        land_category: "text",
        land_ownership: "text",
        management_type: "text",
        balcony_area: "10.83㎡",  // 后面加“㎡”
        other_area: "text",
        land_area: "40.83㎡",  // 后面加“㎡”
        building_coverage_ratio: "text",
        striction: "text",
        other_brief: "text",
        construction_company: "text",
        information_date: "2023年08月05日",  // YYYY年mm月dd日
    },
    otherInfoList: [
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
    ],  // 遍历other-info-list。 把true的项目转换成日文列表返回（得定义一个other-info-list 和 eng:jpn 的字典）
}

const dp4 = {
    highlights: {
        selling_price: "160,000円",  // 千分位逗号分隔，后面加“円”
        layout: "1LDK",
        total_building_area: "40.83㎡"  // 后面加“㎡”
    },
    bases: {
        other_fee: "xxx 16,000円 xxx 1,000円",
        private_road: "道路幅：4ｍ・4.6ｍ、私道負担有り（私道：68.00m2持ち分1/6づつ、未利用地：約4.48m2持ち分1/6づつ）",
        layout_detail: "洋6.5 洋5.1 LDK13.5",
        completion_date: "2000年11月",  // YYYY年mm月
        move_in_date: "2023年08月",  // YYYY年mm月
        house_facing: "南",
        total_number_of_floors: "3階",  // 后面加“階”
        number_of_floors: "3階",  // 后面加“階”
        house_struction: "木造",
        address: "東京都江東区 北砂７丁目９－５",
        station: "湘南新宿ライン高海/新町駅 歩22分, 東武伊勢崎線/東武動物公園駅 車38分(15.2km), ＪＲ宇都宮線/栗橋駅 車30分(12.1km)",  // 线路1/站点1 时间1， 线路2/站点2 时间2， 线路3/站点3 时间3
    },
    bulletpoints: {
        brief_title: "text",
        brief_desc: "text",
        bullet_point_1: "text",
        bullet_point_2: "text",
        bullet_point_3: "text",
        bullet_point_4: "text",
        bullet_point_5: "text",
        bullet_point_6: "text",
        bullet_point_7: "text",
        bullet_point_8: "text",
        bullet_point_9: "text",
        bullet_point_10: "text",

    },
    icons: [
        "has_elevator",
        "has_city_gas",
        "has_underfloor_heating",
        "has_delivery_box",
        "has_security_camera",
        "has_autolock",
        "is_reformed",
    ],    // 遍历icon-list。 把true的项目列表返回（得定义一个icon-list）
    otherInfoTable: {
        land_usage_type: "text",
        land_category: "text",
        land_ownership: "text",
        management_type: "text",
        balcony_area: "10.83㎡",  // 后面加“㎡”
        other_area: "text",
        land_area: "40.83㎡",  // 后面加“㎡”
        building_coverage_ratio: "text",
        striction: "text",
        other_brief: "text",
        construction_company: "text",
        information_date: "2023年08月05日",  // YYYY年mm月dd日
    },
    otherInfoList: [
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
    ],  // 遍历other-info-list。 把true的项目转换成日文列表返回（得定义一个other-info-list 和 eng:jpn 的字典）
}

const dp5 = {
    highlights: {
        renting_price: "160,000円", // 千分位逗号分隔，后面加“円”
        management_fee: "15,000円", // 千分位逗号分隔，后面加“円”
        layout: "1LDK",
        exclusive_area: "40.83㎡"  // 后面加“㎡”
    },
    bases: {
        deposit: "160,000円",  // 千分位逗号分隔，后面加“円”。
        key_money: "160,000円",  // 千分位逗号分隔，后面加“円”。
        security_deposit: "160,000円",  // 千分位逗号分隔，后面加“円”。
        quotation_fee: "160,000円",  // 千分位逗号分隔，后面加“円”。
        amortization_fee: "160,000円",  // 千分位逗号分隔，后面加“円”。
        layout_detail: "洋6.5 洋5.1 LDK13.5",
        completion_date: "2000年11月",  // YYYY年mm月
        house_facing: "南",
        total_number_of_floors: "3階",  // 后面加“階”
        number_of_floors: "3階",  // 后面加“階”
        house_struction: "木造",
        address: "東京都江東区 北砂７丁目９－５",
        station: "湘南新宿ライン高海/新町駅 歩22分, 東武伊勢崎線/東武動物公園駅 車38分(15.2km), ＪＲ宇都宮線/栗橋駅 車30分(12.1km)",  // 线路1/站点1 时间1， 线路2/站点2 时间2， 线路3/站点3 时间3
    },
    bulletpoints: {
        brief_title: "text",
        brief_desc: "text",
        bullet_point_1: "text",
        bullet_point_2: "text",
        bullet_point_3: "text",
        bullet_point_4: "text",
        bullet_point_5: "text",
        bullet_point_6: "text",
        bullet_point_7: "text",
        bullet_point_8: "text",
        bullet_point_9: "text",
        bullet_point_10: "text",

    },
    icons: [
        "has_elevator",
        "has_city_gas",
        "has_underfloor_heating",
        "has_delivery_box",
        "has_security_camera",
        "has_autolock",
        "is_reformed",
    ],    // 遍历icon-list。 把true的项目列表返回（得定义一个icon-list）
    otherInfoTable: {
        land_usage_type: "text",
        land_category: "text",
        land_ownership: "text",
        management_type: "text",
        balcony_area: "10.83㎡",  // 后面加“㎡”
        other_area: "text",
        parking_lot: "text",
        bicycle_parking_lot: "text",
        motocycle_parking_lot: "text",
        mini_motocycle_parking_lot: "text",
        striction: "text",
        other_brief: "text",
        construction_company: "text",
        information_date: "2023年08月05日",  // YYYY年mm月dd日
    },
    otherInfoList: [
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
    ],  // 遍历other-info-list。 把true的项目转换成日文列表返回（得定义一个other-info-list 和 eng:jpn 的字典）
}

const dp6 = {
    highlights: {
        renting_price: "160,000円", // 千分位逗号分隔，后面加“円”
        management_fee: "15,000円", // 千分位逗号分隔，后面加“円”
        layout: "1LDK",
        exclusive_area: "40.83㎡"  // 后面加“㎡”
    },
    bases: {
        deposit: "160,000円",  // 千分位逗号分隔，后面加“円”。
        key_money: "160,000円",  // 千分位逗号分隔，后面加“円”。
        security_deposit: "160,000円",  // 千分位逗号分隔，后面加“円”。
        quotation_fee: "160,000円",  // 千分位逗号分隔，后面加“円”。
        amortization_fee: "160,000円",  // 千分位逗号分隔，后面加“円”。
        layout_detail: "洋6.5 洋5.1 LDK13.5",
        completion_date: "2000年11月",  // YYYY年mm月
        house_facing: "南",
        total_number_of_floors: "3階",  // 后面加“階”
        number_of_floors: "3階",  // 后面加“階”
        house_struction: "木造",
        address: "東京都江東区 北砂７丁目９－５",
        station: "湘南新宿ライン高海/新町駅 歩22分, 東武伊勢崎線/東武動物公園駅 車38分(15.2km), ＪＲ宇都宮線/栗橋駅 車30分(12.1km)",  // 线路1/站点1 时间1， 线路2/站点2 时间2， 线路3/站点3 时间3
    },
    bulletpoints: {
        brief_title: "text",
        brief_desc: "text",
        bullet_point_1: "text",
        bullet_point_2: "text",
        bullet_point_3: "text",
        bullet_point_4: "text",
        bullet_point_5: "text",
        bullet_point_6: "text",
        bullet_point_7: "text",
        bullet_point_8: "text",
        bullet_point_9: "text",
        bullet_point_10: "text",

    },
    icons: [
        "has_elevator",
        "has_city_gas",
        "has_underfloor_heating",
        "has_delivery_box",
        "has_security_camera",
        "has_autolock",
        "is_reformed",
    ],    // 遍历icon-list。 把true的项目列表返回（得定义一个icon-list）
    otherInfoTable: {
        land_usage_type: "text",
        land_category: "text",
        land_ownership: "text",
        management_type: "text",
        balcony_area: "10.83㎡",  // 后面加“㎡”
        other_area: "text",
        land_area: "40.83㎡",  // 后面加“㎡”
        building_coverage_ratio: "text",
        striction: "text",
        other_brief: "text",
        construction_company: "text",
        information_date: "2023年08月05日",  // YYYY年mm月dd日
    },
    otherInfoList: [
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
    ],  // 遍历other-info-list。 把true的项目转换成日文列表返回（得定义一个other-info-list 和 eng:jpn 的字典）
}