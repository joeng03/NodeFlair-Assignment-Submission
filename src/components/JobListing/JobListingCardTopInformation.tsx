import CompanyAvatar from "./CompanyAvatar";
import JobInformation from "./JobInformation";
import SpecializationChip from "./SpecializationChip";
import DateAndCountry from "./DateAndCountry";
import Salary from "./Salary";
import { IJob } from "store/types";
import React from "react";
import styled from "styled-components";

const TopPortionContainer = styled.div`
    display: flex;
    flex-wrap: nowrap !important;
    align-items: flex-start;
    justify-content: flex-start;
`;

const BottomPortionContainer = styled.div`
    width: 100%;
    margin-bottom: auto;
    padding-left: 55px;
`;

const JobListingCardTopInformationContainer = styled.div`
    height: 100%;
    display: flex;
    padding: 20px;
    position: relative;
    min-height: 100%;
    flex-direction: column;
    background-color: white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    ::after {
        content: " ";
        display: block;
        margin-top: 10px;
        border-bottom: 1px solid #dfdfdf;
        margin-bottom: -15px;
`;

type JobListingCardTopInformationProps = {
    job: IJob;
};

const JobListingCardTopInformation = ({ job }: JobListingCardTopInformationProps) => {
    return (
        <JobListingCardTopInformationContainer>
            <TopPortionContainer>
                <CompanyAvatar avatar={job.company.avatar} alt={`${job.company.companyname} logo`} />
                <JobInformation
                    companyName={job.company.companyname}
                    companyRating={job.company.rating}
                    jobTitle={job.title}
                />
                <SpecializationChip specialization={job.position} />
            </TopPortionContainer>
            <BottomPortionContainer>
                <DateAndCountry timeAgo={job.time_ago} country={job.location} />
                <Salary
                    formatted_salary_min={job.formatted_salary_min}
                    formatted_salary_max={job.formatted_salary_max}
                    remuneration_frequency={job.remuneration_frequency}
                    is_salary_estimated={job.is_salary_estimated}
                />
            </BottomPortionContainer>
        </JobListingCardTopInformationContainer>
    );
};

export default JobListingCardTopInformation;
