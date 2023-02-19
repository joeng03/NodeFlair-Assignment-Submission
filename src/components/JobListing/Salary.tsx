import React from "react";
import styled from "styled-components";

const SalaryContainer = styled.p`
    font-weight: 600;
    white-space: pre-wrap;
    .salary {
        padding-top: 3px;
    }
    .estimatedSalaryTag {
        padding: 3px 7px;
        font-weight: normal;
        border-radius: 5px;
        background-color: #f1f1f1;
    }
`;

type SalaryProps = {
    formatted_salary_min: string;
    formatted_salary_max: string;
    remuneration_frequency: string;
    is_salary_estimated: boolean;
};

const Salary = ({
    formatted_salary_min,
    formatted_salary_max,
    remuneration_frequency,
    is_salary_estimated,
}: SalaryProps) => {
    const period = remuneration_frequency == "Monthly" ? "mth" : "yr.";
    return (
        <div>
            <SalaryContainer>
                {formatted_salary_min && formatted_salary_max && (
                    <>
                        <span className="salary">{`${formatted_salary_min} - ${formatted_salary_max} / ${period} `}</span>
                        <span className="estimatedSalaryTag">{is_salary_estimated && "EST"}</span>
                    </>
                )}
            </SalaryContainer>
        </div>
    );
};

export default Salary;
