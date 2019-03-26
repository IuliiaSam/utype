import {combineReducers} from 'redux';
import testReducer from './testReducer';
import lookWhatInInput from './inputValueRedusers'

const rootReducer = combineReducers({
   testReducer,
   lookWhatInInput,
})

export default rootReducer;