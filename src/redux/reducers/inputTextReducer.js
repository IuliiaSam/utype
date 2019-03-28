const inputText = (state='', action) => {
    switch (action.type) {
        case 'TYPING':
            const regex = /^.{1}$/;
            const charToRender = action.value.match(regex) ? action.value : '';
            return state + charToRender;    
        default:
            return state;
    }
 }

 export default inputText;