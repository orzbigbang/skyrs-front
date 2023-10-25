import axios from 'axios'

// export const updateHouse = axios.patch(url, data, config={}).then(
//     value => {
//         console.log(value.data)
//     }
// ).catch(
//     reason => {
//         console.log(reason)
//     }
// )

export const uploadZip = (zipFile, url) => {
    if (zipFile) {
        const headers = {
            'Content-Type': 'multipart/form-data'
          }
        const formData = new FormData()
        formData.append('zip_file', zipFile)
        axios.post(url, formData, {headers}).then(
            value => {
                console.log(value.data)
                return true
            }
        ).catch(
            reason => {
                console.log(reason)
                return false
            }
        )
    }
}
