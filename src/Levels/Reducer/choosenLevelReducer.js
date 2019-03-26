const choosenLevelReducer = (state = {}, action) => {
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
