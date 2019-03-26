
const initialstate = JSON.parse(localStorage.getItem("selectedLevel")) || {};

const choosenLevelReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'SELECTED':
      return action.data; 
    default:
      return state;
  }
};
export default choosenLevelReducer;
