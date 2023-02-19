import JobListingCardTopInformation from "./JobListingCardTopInformation";
import JobListingCardBottomInformation from "./JobListingCardBottomInformation";
import { IJob } from "store/types";
import React from "react";
import styled from "styled-components";

const JobListingCardContainer = styled.div<{ $selected: boolean }>`
    cursor: pointer;
    height: 100%;
    position: relative;
    font-size: 14px;
    box-shadow: 0px 0px 2px rgb(0 0 0 / 25%);
    transition: 0.2s;
    border-radius: 8px;
    container-type: inline-size;
    padding-bottom: 40px;
    background-color: #f8f8f8;
    ${(props) =>
        props.$selected &&
        `
            outline: 3px solid;
            outline-color: #1fc76a;
        `}

    p {
        margin-bottom: 2px;
    }
`;

type JobListingCardProps = {
    job: IJob;
    selected: boolean;
    handleSelectCard: () => void;
};

const JobListingCard = ({ job, selected, handleSelectCard }: JobListingCardProps) => {
    return (
        <div>
            <JobListingCardContainer $selected={selected} onClick={handleSelectCard}>
                <JobListingCardTopInformation job={job} />
                <JobListingCardBottomInformation techStacks={job.techStacks} />
            </JobListingCardContainer>
        </div>
    );
};

export default JobListingCard;
