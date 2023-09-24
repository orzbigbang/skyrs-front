// post 请求，把以下数据放到user_id

const request = {
    query_type: "",  // ["sell","rent","any"]
    last_name_kana: "",
    first_name_kana: "",
    last_name_kanji: "",
    first_name_kanji: "",
    email: "",
    phone: "",
    contact_type: "",  // ["email","phone","any"]
    query_content: "",
    house_id: "",  // 可选
}

// 后续需要开发一个发送邮件的功能