import {combineReducers} from 'redux';
<<<<<<< HEAD
import testReducer from './testReducer';
import finalResult from './FinalComponentReducer'

const rootReducer = combineReducers({
   testReducer,
   finalResult,
=======
import counter from './counterReducer';
import userArr from './userArrReducer';
import inputs from './inputReducer';
import inputText from './inputTextReducer';
import choosenLevelReducer from '../../Levels/Reducer/choosenLevelReducer'
import setLevelsReducer from '../../Levels/Reducer/setLevelsReducer';
import toggleFocus from '../../redux/reducers/toggleFocusReducer';


const rootReducer = combineReducers({
   inputs,
   inputText,
   levels : setLevelsReducer,
   selected : choosenLevelReducer,
   counter,
   userArr,
   toggleFocus,
>>>>>>> origin/test_merge
})

export default rootReducer;