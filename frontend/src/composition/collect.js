export const useCollectSelect = (userInput, item) => {
    userInput.value = {...userInput.value, ...item.input}
}
export const useCollectCheckbox = (userInput, item, name) => {
    const collectList = []
    Object.keys(item.input).forEach((key) => {
        if (item.input[key]) {
            collectList.push(key)
        }
    })
    userInput.value[name] = collectList
}