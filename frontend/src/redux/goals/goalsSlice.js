import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import goalsService from "./goalsService";

const initialState = {
    goals: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
};

export const createGoal = createAsyncThunk(
    "goals/create",
    async (goalData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await goalsService.createGoal(goalData, token);
        } catch (error) {
            const message =
                error?.response?.data?.message ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getGoals = createAsyncThunk(
    "goals/getAll",
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await goalsService.getGoals(token);
        } catch (error) {
            const message =
                error?.response?.data?.message ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const deleteGoal = createAsyncThunk(
    "goals/delete",
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await goalsService.deleteGoal(id, token);
        } catch (error) {
            const message =
                error?.response?.data?.message ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const goalsSlice = createSlice({
    name: "goals",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getGoals.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getGoals.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.goals = action.payload;
                console.log(action.payload);
            })
            .addCase(getGoals.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload;
            })
            .addCase(createGoal.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createGoal.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.goals.push(action.payload);
                console.log(action.payload);
            })
            .addCase(createGoal.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload;
            })
            .addCase(deleteGoal.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(deleteGoal.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.goals = state.goals.filter(
                    (goal) => goal._id !== action.payload
                );
                console.log(action.payload);
            })
            .addCase(deleteGoal.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload;
            }),
});

export const { reset } = goalsSlice.actions;
export default goalsSlice.reducer;
