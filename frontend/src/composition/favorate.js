import { useHeader } from '@/composition/userInfo.js'
import axios from 'axios'

export const useAdd2fav = (faved, url, house_id) => {
    faved.value = !faved.value
    const data = {favorite_estates: [+house_id]}
    const headers = useHeader()
    
	;(() => {
        axios.patch(url, data, {headers}).then(
            value => {
                console.log(house_id, value.data)
            }
        ).catch(
            reason => {
                console.log(reason)
            }
        )
    })()
}