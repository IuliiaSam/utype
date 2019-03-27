const inputAction = (e, pecherskiyArr) => {

    return {
        type: 'INPUT',
        lastKey: e.key,
        pecherskiyArr: pecherskiyArr,
    }

}

export default inputAction;