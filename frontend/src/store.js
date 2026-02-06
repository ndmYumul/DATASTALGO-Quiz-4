import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { projectListReducer } from './reducers/projectReducers';

const reducer = combineReducers ({
    projectList: projectListReducer
});

const initialState = {

};

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;