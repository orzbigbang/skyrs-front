export const baseURL = "//localhost:8000/api"

export const mediaURL = "//13.112.28.13:8000"

export const atbbURL = "//localhost:8000"

export const apiURL = {
    estate: `${baseURL}/estate`,
    addFavorate: `${baseURL}/favorite/`,
    getUser: `${baseURL}/user`,
    query: `${baseURL}/contact_info/`,
    upload: `${baseURL}/estate-upload/`,
    count: `${baseURL}/count/`,
    // atbb: `${baseURL}/atbb/`,
    // atbb_bm: `http://35.72.6.170/atbb/buy_mansion`,
    // atbb_bo: `http://35.72.6.170/atbb/buy_one`,
    // atbb_rmo: `http://35.72.6.170/atbb/rent_mansion_one`,
    atbb_bm: `${atbbURL}/atbb/buy_mansion`,
    atbb_bo: `${atbbURL}/atbb/buy_one`,
    atbb_rmo: `${atbbURL}/atbb/rent_mansion_one`,
    atbb_rb: `${atbbURL}/atbb/recommend_buy`,
    atbb_rr: `${atbbURL}/atbb/recommend_rent`,
}