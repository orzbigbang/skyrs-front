// request的参数为 headers{Authorization: "uuid"} 
// 需要2个api。
// 一个是只带city, mode, house_type, new四个参数。 只返回数据
// 另一个是带更多详细参数的。在返回数据的同时，把搜索条件记录到user的数据库(这个小功能以后再做)
const params = {
    city: 1,
    mode: "sell",
    house_type: "mansion",
    new: "n",
    district: ["千代田区", "中央区"],  // 这三个是三选一
    station: ["曳舟", "原宿"],  // 这三个是三选一
    train_route: ["東急大井町線", "東急東横線"], // 这三个是三选一
    price_bottom: "",  //
    price_top: "",  //
    area_bottom: "",  //
    area_top: "",  //
    station_time_bottom: "",  //
    station_time_top: "",  //
    layout: list,
    house_age: "",  //
    number_of_floors: "",  //
    building_scale: "", //
    house_facing: str,
    house_struction: str,
    has_private_garden: boolean,
    is_top_floor: boolean,
    has_shoes_box: boolean,
    has_counter_kitchen: boolean,
    has_parking_lot: boolean,
    is_only_women: boolean,
    has_indoor_laundry_space: boolean,
    has_motocycle_parking_lot: boolean,
    has_flooring: boolean,
    is_loft: boolean,
    is_furniture_included: boolean,
    is_independent_washroom: boolean,
    is_pets_negotiable: boolean,
    is_available_for_roomshare: boolean,
    is_reformed: boolean,
    has_bathroom_dryer: boolean,
    has_reheating_bath: boolean,
    has_city_gas: boolean,
    has_elevator: boolean,
    has_on_site_trash_space: boolean,
    is_separate_bath_and_toilet: boolean,
    has_intercom_with_monitor: boolean,
    is_no_guarantor_required: boolean,
    has_autolock: boolean,
    has_walk_in_closet: boolean,
    has_dishwasher: boolean,
    has_two_more_burners: boolean,
    has_security_camera: boolean,
    is_internet_applicable: boolean,
    is_corner_room: boolean,
    has_balcony: boolean,
    has_underfloor_heating: boolean,
    has_system_kitchen1r: boolean,
    is_available_for_immediate_move_in: boolean,
}

const response = {
    // 和返回房屋列表的返回值一样
    // 返回的应该是一个列表，列表里面有每个房屋对象，这个对象里加一个favorate的bool值（这个是根据userid，到favorite的表里查询的）
    // 整体再加一个总count
}

