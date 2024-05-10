import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import boardReducer from "./slices/boardSlice";
import cardReducer from "./slices/cardSlice";
import listReducer from "./slices/listSlice"
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";


const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

// const rootReducer = combineReducers({
//     user:userReducer,
//     board:boardReducer,
//     card:cardReducer,
//     list:cardReducer
//   });

//   const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const persistor = persistStore(store);
