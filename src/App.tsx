import "./App.css";
import JobPanel from "components/JobListing/JobPanel";
import { useAppDispatch, useAppSelector } from "store";
import { acSetJobs } from "store/jobs/action";
import React, { useEffect } from "react";

function App() {
    return (
        <>
            <JobPanel />
        </>
    );
}

export default App;
