import { createStore,compose,applyMiddleware } from "redux";
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk';
import root from './models/root'
import storePages from './models/storePages'

const reducer = combineReducers({
  root,
  storePages

})


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

