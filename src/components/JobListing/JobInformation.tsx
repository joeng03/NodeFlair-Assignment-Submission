import CompanyAvatar from "./CompanyAvatar";
import React from "react";
import styled from "styled-components";

const JobInformationContainer = styled.div`
    flex-basis: auto !important;
    margin-top: 0 !important;
    flex-shrink: 1;
`;

const JobTitleContainer = styled.h2`
    font-size: 16px;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    line-height: 1.5em;
    margin-bottom: 0px;
    display: -webkit-box;
    overflow: hidden;
    white-space: initial;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
`;

type JobInformationProps = {
    companyName: string;
    companyRating: number;
    jobTitle: string;
};

const JobInformation = ({ companyName, companyRating, jobTitle }: JobInformationProps) => {
    return (
        <JobInformationContainer>
            <p style={{ whiteSpace: "pre-wrap" }}>
                <span>
                    {companyName}
                    {"   "}
                </span>
                <span> {companyRating}&nbsp;★</span>
            </p>
            <JobTitleContainer>{jobTitle}</JobTitleContainer>
        </JobInformationContainer>
    );
};

export default JobInformation;
