import {combineReducers} from 'redux';
import counter from './counterReducer';
import userArr from './userArrReducer';
import inputs from './inputReducer';
import inputText from './inputTextReducer';
import choosenLevelReducer from '../../Levels/Reducer/choosenLevelReducer'
import setLevelsReducer from '../../Levels/Reducer/setLevelsReducer';
import toggleFocus from '../reducers/toggleFocusReducer';
import setDevLevelsReducer from '../reducers/setDevLevelsReducer';


const rootReducer = combineReducers({
   inputs,
   inputText,
   levels : setLevelsReducer,
   selected : choosenLevelReducer,
   counter,
   userArr,
   toggleFocus,
   devLevels: setDevLevelsReducer,
})

export default rootReducer;