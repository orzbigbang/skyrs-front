import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { apiURL } from '@/config/config.js'

export const useQueryStore = defineStore('query', () => {
    const queryType = ref("")
    const url = apiURL.query
    const postQuery = (body, headers) => {
        axios.post(url, body, {headers}).then(
            value => {
                console.log(value.data)
            }
        ).catch(
            reason => {
                console.log(reason)
            }
        )
    }

    const getQuery = (headers) => {
        axios.get(url, {headers}).then(
            value => {
                console.log(value.data)
            }
        ).catch(
            reason => {
                console.log(reason)
            }
        )
    }

    const getQueryAdmin = (params, headers=null) => {
        const config = headers? {params, headers}: {params}
        axios.get(url, config).then(
            value => {
                console.log(value.data)
            }
        ).catch(
            reason => {
                console.log(reason)
            }
        )
    }

    return {
        queryType,
        postQuery,
        getQuery,
        getQueryAdmin
    }
})