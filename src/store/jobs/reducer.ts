import { IJob } from "../types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialJobsState: IJob[] = [];

const jobssSlice = createSlice({
    name: "jobs",
    initialState: initialJobsState,
    reducers: {
        setJobs(state, action: PayloadAction<IJob[]>) {
            return action.payload;
        },

        // createJob(state, action) {
        //     state.push(action.payload);
        // },
        // updateJob(state, action: PayloadAction<IJob>) {
        //     const updatedJob = action.payload;
        //     state[state.findIndex((post) => post.id === updatedJob.id)] = updatedJob;
        // },
        // deleteJob(state, action: PayloadAction<number>) {
        //     const deletedJob_id = action.payload;
        //     state.splice(
        //         state.findIndex((post) => post.id === deletedJob_id),
        //         1,
        //     );
        // },
    },
});
export const { setJobs } = jobssSlice.actions;

export default jobssSlice.reducer;
