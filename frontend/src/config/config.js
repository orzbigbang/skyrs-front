const test = false
const baseURL = test? "http://localhost": "https://7cloudhouse.com"

export const apiURL = {
    estate: `${baseURL}/api/estate`,
    addFavorate: `${baseURL}/api/favorite/`,
    getUser: `${baseURL}/api/user`,
    query: `${baseURL}/api/send_email/`,
    upload: `${baseURL}/api/estate-upload/`,
    count: `${baseURL}/api/count/`,
    atbb_bm: `${baseURL}/atbb/buy_mansion`,
    atbb_bo: `${baseURL}/atbb/buy_one`,
    atbb_rmo: `${baseURL}/atbb/rent_mansion_one`,
    atbb_rb: `${baseURL}/atbb/recommend_buy`,
    atbb_rr: `${baseURL}/atbb/recommend_rent`,
    // mediaURL: `${baseURL}/media/estate/`,
    // mediaAtbbURL: `${baseURL}/media/atbb/`
    mediaURL: `https://7cloudhouse.com/media/estate/`,
    mediaAtbbURL: `https://7cloudhouse.com/media/atbb/`
}