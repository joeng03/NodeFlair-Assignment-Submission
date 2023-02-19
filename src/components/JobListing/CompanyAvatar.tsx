import React from "react";
import styled from "styled-components";

const CompanyAvatarContainer = styled.div`
    width: max-content;
    height: max-content;
    margin: 0 10px 0 0;
`;

const CompanyAvatarImg = styled.img`
    float: left;
    width: 45px;
    height: 45px;
    border-radius: 4px;
`;

type CompanyAvatarProps = {
    logoUrl: string;
    alt: string;
};

const CompanyAvatar = ({ logoUrl, alt }: CompanyAvatarProps) => {
    return (
        <CompanyAvatarContainer>
            <CompanyAvatarImg src={logoUrl} alt={alt} />
        </CompanyAvatarContainer>
    );
};

export default CompanyAvatar;
