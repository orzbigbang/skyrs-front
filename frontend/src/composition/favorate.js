import { useUserStore } from "@/stores/user"
import axios from 'axios'

export const useAdd2fav = (faved, url, house_id) => {
    const userStore = useUserStore()
    const headers = {Authorization: userStore.user_id}
    faved.value = !faved.value
    const data = {favorite_estates: [+house_id]}

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