import { Specialization } from "store/types";
import React from "react";
import styled from "styled-components";

const SpecializationChipContainer = styled.div`
    margin-left: auto;
    padding-left: 10px;
`;

const SpecializationTag = styled.div`
    color: #1fc76a;
    width: max-content;
    padding: 5px 8px;
    font-weight: 600;
    border-radius: 5px;
    background-color: #ddf7e9;
`;

type SpecializationChipProps = {
    specialization: Specialization;
};

const SpecializationChip = ({ specialization }: SpecializationChipProps) => {
    return (
        <SpecializationChipContainer>
            <SpecializationTag>{specialization}</SpecializationTag>
        </SpecializationChipContainer>
    );
};

export default SpecializationChip;
