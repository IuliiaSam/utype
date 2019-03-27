import {combineReducers} from 'redux';
import testReducer from './testReducer';
import finalResult from './FinalComponentReducer'

const rootReducer = combineReducers({
   testReducer,
   finalResult,
})

export default rootReducer;