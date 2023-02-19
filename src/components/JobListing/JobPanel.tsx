import JobListingCard from "./JobListingCard";
import { IJob } from "store/types";
import { useAppDispatch, useAppSelector } from "store";
import { acSetJobs } from "store/jobs/action";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const JobListingContainer = styled.div`
    flex-shrink: 0;
    padding-top: 5px;
    width: 100%;
    @media screen and (min-width: 1010px) {
        width: 427px;
    }
    > div {
        padding: 5px;
    }
`;

const JobInformationDetailsContainer = styled.div`
    display: none;
    padding: 10px 5px;
    position: sticky;
    top: 20px;
    flex-grow: 1;
    min-width: 0;
    min-height: 100%;
    text-align: center;
    @media screen and (min-width: 1010px) {
        display: block;
    }

    > div {
        padding: 0 5px 50px 0;
        max-height: calc(100vh - 106px);
    }
    p {
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 1.5em;
        margin-bottom: 5px;
    }
`;

const JobPanelContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
`;

const JobPanel = () => {
    const handleSelectCard = (job: IJob) => {
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
            <JobInformationDetailsContainer>
                <div>
                    <p>{selectedJob && selectedJob.title}</p>
                </div>
            </JobInformationDetailsContainer>
        </JobPanelContainer>
    );
};

export default JobPanel;
