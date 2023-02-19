import JobListingCard from "./JobListingCard";
import JobInformationDetails from "./JobInformationDetails";
import { IJob } from "store/types";
import { useAppDispatch, useAppSelector } from "store";
import { acSetJobs } from "store/jobs/action";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const JobListingContainer = styled.div`
    flex-shrink: 0;
    padding-top: 5px;
    > div {
        padding: 5px;
    }
    width: 427px;
`;

const JobPanelContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
`;

const JobPanel = () => {
    const handleSelectCard = (job: IJob) => {
        console.log(job);
        setSelectedJob(job);
    };

    const [selectedJob, setSelectedJob] = useState<IJob>();

    const jobs = useAppSelector((state) => state.jobs);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(acSetJobs());
    }, []);

    return (
        <JobPanelContainer>
            <JobListingContainer>
                {jobs &&
                    jobs.map((job, idx) => (
                        <JobListingCard
                            key={idx}
                            job={job}
                            selected={selectedJob !== undefined && job.id === selectedJob.id}
                            handleSelectCard={() => handleSelectCard(job)}
                        />
                    ))}
            </JobListingContainer>
            {selectedJob && <JobInformationDetails jobTitle={selectedJob.jobTitle} />}
        </JobPanelContainer>
    );
};

export default JobPanel;
