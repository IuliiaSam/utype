export const userArr = (key,counter, selected, keyCode) => ({
    type: 'PUSH',
    key,
    id: counter,
    selected,
    keyCode
})

export const clearUserArr = (selected) => ({
    type: 'CLEARUSERARR',
    selected,
})