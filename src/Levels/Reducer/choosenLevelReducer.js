
const initialstate = JSON.parse(localStorage.getItem("selectedlevel")) || {};

const choosenLevelReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'SELECTED':
      return action.data;
    case 'LEVELFROMSTORAGE':
      return action.data;
    default:
      return state;
  }
};
export default choosenLevelReducer;
