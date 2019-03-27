import {combineReducers} from 'redux';
import inputTracking from './inputTrackingReducer';
import pecherskiyArr from './pecherskiyReducer';

const rootReducer = combineReducers({
   inputTracking,
   pecherskiyArr,
})

export default rootReducer;