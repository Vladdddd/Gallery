import {applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import { compose } from 'redux';
import listReducer from "./list-reducer";

const { createStore } = require("redux");

let reducers = combineReducers({ 
    list: listReducer, 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware))); 

export default store;