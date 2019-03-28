const initialState = [];
  
const setDevLevelsReducer = (state=initialState, {type, payload})=>{
  switch (type){
    case "GETDEVLEVELS" : return [...payload];
    default: return state;
  }
}

export default setDevLevelsReducer; 