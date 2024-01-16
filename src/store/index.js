import {combineReducers} from "@reduxjs/toolkit";
import { createStore } from 'redux';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';
import reducer from '../reducers';

const store = createStore(
    combineReducers({heroes, filters}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;