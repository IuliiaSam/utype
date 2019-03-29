function keysArray(state = [], action) {
  switch (action.type) {
    case 'GETKEYS':
    // console.log('action.keys', action.keys);
    
      return action.keys;

    default:
      return state;
  }
}

export default keysArray;
