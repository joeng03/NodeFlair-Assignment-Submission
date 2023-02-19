import { setJobs } from "./reducer";
import { IJob } from "../types";
import { AppThunk } from "..";
import jobService from "../../services/jobs";
import type { PayloadAction } from "@reduxjs/toolkit";

export const acSetJobs = (): AppThunk<Promise<PayloadAction<IJob[]>>> => {
    return async (dispatch) => {
        const jobs = await jobService.readAll();
        return dispatch(setJobs(jobs));
    };
};

// export const acCreateJob = (job: FormData): AppThunk<Promise<PayloadAction<IJob>>> => {
//     return async (dispatch) => {
//         const createdJob = await jobService.create(job);
//         return dispatch(createJob(createdJob));
//     };
// };
// export const acUpdateJob = (job: FormData, job_id: number): AppThunk<Promise<PayloadAction<IJob>>> => {
//     return async (dispatch) => {
//         const updatedJob = await jobService.update(job, job_id);
//         return dispatch(updateJob(updatedJob));
//     };
// };

// export const acDeleteJob = (job_id: number): AppThunk<Promise<PayloadAction<number>>> => {
//     return async (dispatch) => {
//         await jobService.remove(job_id);
//         return dispatch(deleteJob(job_id));
//     };
// };
