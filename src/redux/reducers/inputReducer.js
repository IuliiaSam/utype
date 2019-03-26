const initialState = {
    name: '',
    email: '',
    password: '',
}

const inputs = (state=initialState, action) => {
    switch (action.type) {
        case `${action.name}`:
            return {...state, [action.name]: action.value}    
        default:
            return state;
    }
 }

 export default inputs;