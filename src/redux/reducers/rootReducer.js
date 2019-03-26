import {combineReducers} from 'redux';
import inputs from './inputReducer';
import inputText from './inputTextReducer';
import choosenLevelReducer from '../../Levels/Reducer/choosenLevelReducer'

import setLevelsReducer from '../../Levels/Reducer/setLevelsReducer';


const rootReducer = combineReducers({
   inputs,
   inputText,
   levels : setLevelsReducer,
   selected : choosenLevelReducer,
})

export default rootReducer;