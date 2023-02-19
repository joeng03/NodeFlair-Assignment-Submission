import React from "react";
import styled from "styled-components";

const JobInformationDetailsContainer = styled.div`
    display: block;
    padding: 10px 5px;
    position: sticky;
    flex-grow: 1;
    min-width: 0;
    text-align: center;
    > div {
        padding: 0 5px 50px 0;
        max-height: calc(100vh - 106px);
        overflow-x: hidden;
        overflow-y: scroll;
    }

    p {
        font-size: 16px;
        font-weight: bold;
        line-height: 1.5em;
        margin-bottom: 5px;
    }
`;

type JobInformationDetailsProps = {
    jobTitle: string;
};
const JobInformationDetails = ({ jobTitle }: JobInformationDetailsProps) => {
    return (
        <JobInformationDetailsContainer>
            <div>
                <p>{jobTitle}</p>
            </div>
        </JobInformationDetailsContainer>
    );
};

export default JobInformationDetails;
