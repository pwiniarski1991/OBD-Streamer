import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import root from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(root,{},composeEnhancers(applyMiddleware(thunk)));
