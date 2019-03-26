const OBJ = {
    email:"",
    username:"",
    password:"",
    confirm_password:"",
};
function lookWhatInInput (state=OBJ, action) {
    switch (action.type) {
        case `${action.type}`:
            return {...state, [action.type]: action[action.type]};
        default:
            return state;
    }
}
export default lookWhatInInput;