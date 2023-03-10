import { IJob } from "store/types";
import axios from "axios";

const readAll = async (): Promise<IJob[]> => {
    const response = await axios.get("/jobsData.json");
    return response.data;
};

const jobService = { readAll };
export default jobService;
