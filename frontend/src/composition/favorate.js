import { useUserStore } from "@/stores/user"
import axios from 'axios'

export const useAdd2fav = (faved, url, house_id) => {
    const userStore = useUserStore()
    const headers = {Authorization: userStore.user_id}
    faved.value = !faved.value
    const data = {house_id}

	;(() => {
        axios.post(url, data, {headers}).then(
            data => {
                console.log(data.value)
            }
        ).catch(
            reason => {
                console.log(reason)
            }
        )
    })()
}