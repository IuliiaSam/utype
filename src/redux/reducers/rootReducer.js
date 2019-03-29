import {combineReducers} from 'redux';
import speedprogression from '../reducers/staticReducer'
import correctinput from '../reducers/correctReducer'

import inputTracking from './inputTrackingReducer';
import counter from './counterReducer';
import userArr from './userArrReducer';
import inputs from './inputReducer';
import inputText from './inputTextReducer';
import choosenLevelReducer from '../../Levels/Reducer/choosenLevelReducer'
import setLevelsReducer from '../../Levels/Reducer/setLevelsReducer';
import toggleFocus from '../reducers/toggleFocusReducer';
import setDevLevelsReducer from '../reducers/setDevLevelsReducer';
import userStatisticsReducer from '../reducers/userStatisticsReducer';
import keysArray from '../reducers/keysArrayReducer';

const rootReducer = combineReducers({
   inputs,
   inputText,
   levels : setLevelsReducer,
   selected : choosenLevelReducer,
   counter,
   userArr,
   toggleFocus,
   inputTracking,
   devLevels: setDevLevelsReducer,
   speedprogression,
   correctinput,
   userStatistics: userStatisticsReducer,
   keysArray,
})

export default rootReducer;