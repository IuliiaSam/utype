function userArr (state=[], action){
    switch(action.type) {
        case 'PUSH':
            return [...state, action.obj]
        default:
            return state
    }
}
export default userArr;