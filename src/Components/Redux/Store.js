import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AlertSlice from './AlertSlice';
import AuthSlice from './AuthSlice';
import UsersSlice from './UsersSlice';
import LoaderSlice from "./LoaderSlice"
import counterSlice from './counterSlice';

const reducers = combineReducers({
    Alert: AlertSlice,
    Auth: AuthSlice,
    userList: UsersSlice,
    counter:counterSlice,
    Loader:LoaderSlice
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;