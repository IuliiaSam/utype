<<<<<<< HEAD
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, devTools(applyMiddleware(thunk)));

=======
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'; 
import rootReducer from '../reducers/rootReducer';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, devTools(applyMiddleware(thunk)));

>>>>>>> firebase_setup
export default store;