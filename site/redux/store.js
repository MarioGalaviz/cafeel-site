
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import {combineReducers} from "redux"; 
import sesionReducer from './sliceSesion/sesionSlice';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const reducers = combineReducers({
    sesion: sesionReducer
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});