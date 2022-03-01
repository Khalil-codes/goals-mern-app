import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import authReducer from "./auth/authSlice";
export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
export const useAuth = () => useSelector((state) => state.auth);
