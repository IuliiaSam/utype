import {combineReducers} from 'redux';
import counter from './counterReducer';
import userArr from './userArrReducer';

const rootReducer = combineReducers({
   counter,
   userArr,
})

export default rootReducer;