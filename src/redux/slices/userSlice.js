import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers/axiosinstance";


export const authenticateUser = createAsyncThunk(
    "user/authenticateUser",
    async ({ formValues, isLogin }, { rejectWithValue }) => {
        try {
            const endpoint = isLogin ? "/login" : "/register"; // Fix: Added '/' before 'register'
            const { data } = await axiosInstance.post(endpoint, formValues);
            return data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
);


const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        userData: null,
        error: null,
    },
    reducers: {
        // Define your reducers here
    },
    extraReducers: (builder) => {
        builder.addCase(authenticateUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(authenticateUser.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(authenticateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

const { reducer: userReducer } = userSlice;

export default userReducer;
