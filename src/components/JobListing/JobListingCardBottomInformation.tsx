import TechStackChip from "./TechStackChip";
import { TechStackCategory } from "store/types";
import React from "react";
import styled from "styled-components";

const JobListingCardBottomInformationContainer = styled.div`
    width: 100%;
    bottom: 0;
    padding: 0 15px;
    overflow: hidden;
    position: absolute;
    min-height: 40px;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-color: #ffffff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;

type JobListingCardBottomInformationProps = {
    techStacks: TechStackCategory[];
};

const JobListingCardBottomInformation = ({ techStacks }: JobListingCardBottomInformationProps) => {
    return (
        <JobListingCardBottomInformationContainer>
            {techStacks.map((techStack, idx) => (
                <TechStackChip key={idx} techStack={techStack} />
            ))}
        </JobListingCardBottomInformationContainer>
    );
};

export default JobListingCardBottomInformation;
