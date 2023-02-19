import { TechStackCategory } from "store/types";
import React from "react";
import styled from "styled-components";

const TechStackChipContainer = styled.span`
    color: #838383;
    display: inline-block;
    padding: 5px 8px;
    overflow: hidden;
    max-width: 90%;
    font-family: "Roboto Mono", "Consolas", monospace;
    font-weight: bold;
    border-radius: 5px;
    text-overflow: ellipsis;
    background-color: #f1f1f1;
`;

type TechStackChipProps = {
    techStack: TechStackCategory;
};

const TechStackChip = ({ techStack }: TechStackChipProps) => {
    return (
        <>
            <TechStackChipContainer>{techStack.name}</TechStackChipContainer>&nbsp;
        </>
    );
};

export default TechStackChip;
