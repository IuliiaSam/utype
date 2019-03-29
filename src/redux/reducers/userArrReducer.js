function userArr(state = [], action) {
  switch (action.type) {
    case 'PUSH':
    // console.log(action.keyCode)
      if (action.id < state.length) {
        if (action.key === state[action.id].key) {
          state[action.id].isValid = true;
        } else {
          state[action.id].isValid = false;
        }
      } else {
        // alert('Кабан!!!');
        return state;
      }
      return state;

    case 'SELECTED':
      const userArr = action.data.symbols
        .split('')
        .map((el, idx) => ({ key: el, id: idx, isValid: null }));
      return userArr;

    case 'CLEARUSERARR':
      const x = action.selected.symbols
        .split('')
        .map((el, idx) => ({ key: el, id: idx, isValid: null }));
      return x;
    default:
      return state;
  }
}
export default userArr;
