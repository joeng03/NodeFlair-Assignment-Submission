import JobListingCard from "./JobListingCard";
import { IJob } from "store/types";
import React from "react";
import styled from "styled-components";

const JobListingContainer = styled.div`
    width: 100%;
    flex-shrink: 0;
    padding-top: 5px;
    > div {
        padding: 5px;
    }
`;

type JobListingProps = {
    jobs: IJob[];
    selectedJob: IJob;
    handleSelectCard: (job: IJob) => void;
};

const JobListing = ({ jobs, selectedJob, handleSelectCard }: JobListingProps) => {
    return (
        <JobListingContainer>
            {jobs &&
                jobs.map((job, idx) => (
                    <div key={idx}>
                        <JobListingCard
                            job={job}
                            selected={selectedJob && job.id === selectedJob.id}
                            handleSelectCard={() => handleSelectCard(job)}
                        />
                    </div>
                ))}
        </JobListingContainer>
    );
};

export default JobListing;
