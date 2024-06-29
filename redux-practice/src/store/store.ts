import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slides/counterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig ={
    key:'root',
    version:1,
    storage
}

const reducer = combineReducers({counter:counterReducer})
const persitedReducer = persistReducer(persistConfig,reducer)

export const store :any = configureStore({reducer:persitedReducer});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
