import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers/axiosinstance";


export const authenticateUser = createAsyncThunk(
    "user/authenticateUser",
    async ({ formValues, isLogin }, { rejectWithValue }) => {
        try {
            const endpoint = `/users/${isLogin ? "/login" : "/register"}`;
            const { data } = await axiosInstance.post(endpoint, formValues);
            localStorage.setItem("token", data.token);
            localStorage.setItem("refreshToken", data.refreshToken);
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
        logout: (state) => {
            state.userData = null;
            localStorage.removeItem("token");
            localStorage.removeItem("refreshtoken");
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(authenticateUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(authenticateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.userData = action.payload;
        })
        builder.addCase(authenticateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    },
});

export const { reducer: userReducer } = userSlice;
export const { logout, clearError } = userSlice.actions;

// export default userReducer;



