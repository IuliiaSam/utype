export const userArr = (key,counter, selected) => ({
    type: 'PUSH',
    obj: {
        key,
        id: counter,
        isValid: selected.symbols.split('')[counter]=== key ? true : false,
    },
    
})