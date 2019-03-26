const choosenLevelReducer = (state={}, {type, payload})=> {
  switch(type){
    case "SELECTED" : return payload;
    default : return state;
  }
}
export default choosenLevelReducer;