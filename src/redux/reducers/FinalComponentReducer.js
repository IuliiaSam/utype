const finalObj ={
    score:0,
    acuracy:0,
}

function finalResult (state=finalObj,action){
    switch (action.type){
        case 'FINALACTION':
        return {score:action.value,acuracy:action.acuracy}
        default:
        return state
    }
}

export default finalResult