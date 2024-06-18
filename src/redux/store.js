import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"; // Adjust the path as needed

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});
