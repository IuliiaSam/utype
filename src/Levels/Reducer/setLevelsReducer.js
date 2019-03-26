const initialState = [];
  
const setLevelsReducer = (state=initialState, {type, payload})=>{
  switch (type){
    case "GETLEVELS" : return [...payload];
    default: return state;
  }
}

export default setLevelsReducer; 