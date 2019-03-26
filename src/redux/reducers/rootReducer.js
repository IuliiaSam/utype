import {combineReducers} from 'redux';
import inputs from './inputReducer';
import inputText from './inputTextReducer';

import setLevelsReducer from '../../Levels/Reducer/setLevelsReducer';


const rootReducer = combineReducers({
   inputs,
   inputText,
   levels : setLevelsReducer,
})

export default rootReducer;