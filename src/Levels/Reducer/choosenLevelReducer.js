const selectedLevelFromStorage = JSON.parse(localStorage.getItem('selectedLevel')) || {};

const choosenLevelReducer = (state = selectedLevelFromStorage, action) => {
  switch (action.type) {
    case 'SELECTED':
      return action.data; 
    default:
      return state;
  }
};
export default choosenLevelReducer;
