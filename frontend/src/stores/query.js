import { defineStore } from 'pinia'
import axios from 'axios'

export const useQueryStore = defineStore('query', () => {
    const postQuery = (url, body, headers) => {
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

    const getQuery = (url, headers) => {
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

    const getQueryAdmin = (url, params, headers=null) => {
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
        postQuery,
        getQuery,
        getQueryAdmin
    }
})