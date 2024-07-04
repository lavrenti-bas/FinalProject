import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import {userReducer} from "./slices/userSlice"; 
import {productReducer} from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user", "cart"]
};

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistedStore = persistStore(store);



