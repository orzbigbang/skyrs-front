// request的参数为 headers{Authorization: "uuid"} params{house_id: int}

// api1 post -> 需要把house_id 记录到user的history里

// api2 get -> 根据userid返回以下数据
const response = {
    // 和返回房屋列表的返回值一样
    // 返回的应该是一个列表，列表里面有每个房屋对象，这个对象里加一个favorate的bool值（这个是根据userid，到favorite的表里查询的）
}


