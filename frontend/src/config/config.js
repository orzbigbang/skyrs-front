const test = true
const baseURL = test? "http://localhost": "https://7cloudhouse.com"

export const mediaURL = `${baseURL}/media/estate/`

export const apiURL = {
    estate: `${baseURL}/api/estate`,
    addFavorate: `${baseURL}/api/favorite/`,
    getUser: `${baseURL}/api/user`,
    query: `${baseURL}/api/contact_info/`,
    upload: `${baseURL}/api/estate-upload/`,
    count: `${baseURL}/api/count/`,
    atbb_bm: `${baseURL}/atbb/buy_mansion`,
    atbb_bo: `${baseURL}/atbb/buy_one`,
    atbb_rmo: `${baseURL}/atbb/rent_mansion_one`,
    atbb_rb: `${baseURL}/atbb/recommend_buy`,
    atbb_rr: `${baseURL}/atbb/recommend_rent`,
}