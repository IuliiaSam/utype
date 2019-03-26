function userArr (state=[], action){
    switch(action.type) {
        case 'PUSH':
            return [...state, action.key]
        default:
            return state
    }
}
export default userArr;