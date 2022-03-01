import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import authReducer from "./auth/authSlice";
import goalsReducer from "./goals/goalsSlice";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        goals: goalsReducer,
    },
});
export const useAuth = () => useSelector((state) => state.auth);
export const useGoals = () => useSelector((state) => state.goals);
