import {createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers';
import thunk from 'redux-thunk';

let store = null;

export default store = createStore(
    rootReducer, applyMiddleware(thunk)
);
