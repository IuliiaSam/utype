import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const persistedState = localStorage.getItem('selectedLevel')
  ? JSON.parse(localStorage.getItem('selectedLevel'))
  : {};

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persistedState,
  devTools(applyMiddleware(thunk))
);

store.subscribe(() =>
  localStorage.setItem(
    'selectedLevel',
    JSON.stringify(store.getState().selected)
  )
);

export default store;
