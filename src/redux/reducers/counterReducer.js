const counter = (state = 0, action) => {
    switch (action.type) {
        case 'COUNTER':
        return state +1;
        case 'RESETCOUNTER':
        return 0;
        default:
        return state;
    }
 }

 export default counter;