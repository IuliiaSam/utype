export const inputAction = (e, userArr) => {

    return {
        type: 'INPUT',
        lastKey: e.key,
        userArr: userArr,
    }

}