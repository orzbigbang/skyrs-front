import { useHeader } from '@/composition/userInfo.js'
import { apiURL } from '@/config/config.js'
import axios from 'axios'

export const useAdd2fav = (faved, house_id) => {
    faved.value = !faved.value
    const data = {favorite_estates: [+house_id]}
    const headers = useHeader()
    const url = apiURL.addFavorate
    
    axios.patch(url, data, {headers}).then(
        value => {
            console.log(house_id, value.data)
        }
    ).catch(
        reason => {
            console.log(reason)
        }
    )
}