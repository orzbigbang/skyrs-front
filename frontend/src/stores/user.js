import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
    const user_id = ref('')

    // const getUserInfo = (url, params, headers) => {
    //     axios.get(url, {params, headers}).then(
    //         value => {
    //             const { search_criteria, favorite_estates, view_history } = value.data
    //         }
    //     ).catch(
    //         reason => {
    //             console.log(reason)
    //         }
    //     )
    // }

    return {
        user_id
    }
})