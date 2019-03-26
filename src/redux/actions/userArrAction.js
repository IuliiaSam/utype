export const userArr = (key,counter, symbolsArr) => ({
    type: 'PUSH',
    obj: {
        key,
        id: counter,
        isValid: symbolsArr[0].symbols.split('')[counter]=== key ? true : false,
    },
    
})