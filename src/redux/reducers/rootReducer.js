import {combineReducers} from 'redux';
import inputs from './inputReducer';
import inputText from './inputTextReducer';

const rootReducer = combineReducers({
   inputs,
   inputText
})

export default rootReducer;