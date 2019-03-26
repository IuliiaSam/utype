import {combineReducers} from 'redux';
import testReducer from './testReducer';

import setLevelsReducer from '../../Levels/Reducer/setLevelsReducer';


const rootReducer = combineReducers({
   testReducer,
   levels : setLevelsReducer,
})

export default rootReducer;