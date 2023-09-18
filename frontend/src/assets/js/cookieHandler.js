import { v4 as uuid4 } from 'uuid'

const cookieHandle = {}

// 获取cookie
cookieHandle.getCookie = (name) => {
	const cookieString = document.cookie
	if (cookieString) {
		const cookies = cookieString.split("; ")

		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].split("=")
			const cookieName = decodeURIComponent(cookie[0])
			const cookieValue = decodeURIComponent(cookie[1])

			if (cookieName === name) {
				return cookieValue
			}
		}
	} 
    // 如果找不到指定名称的 Cookie 或者没有cookieString，则新创建一个uuid并setcookie
	const userID =uuid4()
    cookieHandle.setCookie("user_id", userID)
	return userID
}

// 设置cookie
cookieHandle.setCookie = (name, value) => {
	document.cookie = name + "=" + value
}

export default cookieHandle


// 过期时间
// const date = new Date();
// date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // 设置过期时间
// const expires = "expires=" + date.toUTCString();