import { useHeader } from '@/composition/userInfo.js'
import { apiURL } from '@/config/config.js'
import axios from 'axios'

export const useAdd2fav = (faved, house_id) => {
    faved.value = !faved.value
    const url = apiURL.addFavorate
    const data = {favorite_estates: [+house_id]}
    const headers = useHeader()
    
    axios.patch(url, data, {headers}).then(
        value => {

        }
    ).catch(
        reason => {
            console.log(reason)
        }
    )
}