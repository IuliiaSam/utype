export const userArr = (key,counter, selected) => ({
    type: 'PUSH',
    key,
    id: counter,
    selected,
})

export const clearUserArr = (selected) => ({
    type: 'CLEARUSERARR',
    selected,
})