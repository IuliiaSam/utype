import {combineReducers} from 'redux';
import testReducer from './testReducer';
import speedprogression from '../reducers/staticReducer'
import correctinput from '../reducers/correctReducer'

const rootReducer = combineReducers({
   testReducer,
   speedprogression,
   correctinput
})

export default rootReducer;