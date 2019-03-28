function userStatisticsReducer(state = [], action) {
  switch (action.type) {
    case 'STATISTICS':
      return action.data;
    default:
      return state;
  }
}
export default userStatisticsReducer;
