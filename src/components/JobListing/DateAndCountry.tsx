import { Location } from "store/types";
import React from "react";
import styled from "styled-components";

const LocationSVG = () => (
    <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="map-marker-alt"
        className="svg-inline--fa fa-map-marker-alt "
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
    >
        <path
            fill="currentColor"
            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
        ></path>
    </svg>
);
const DateAndCountryContainer = styled.div`
    color: #838383;
    margin: 0 0 6px 0;
    white-space: pre-wrap;
`;

type DateAndCountryProps = {
    timeAgo: string;
    country: Location;
};

const DateAndCountry = ({ timeAgo, country }: DateAndCountryProps) => {
    return (
        <DateAndCountryContainer>
            <span style={{ color: "#1fc76a", fontWeight: "bold", display: "inline-block" }}>
                {`${timeAgo} ago`}
                {"   "}
            </span>
            <div style={{ display: "inline-block" }}>
                <LocationSVG />
                &nbsp;{country}
            </div>
        </DateAndCountryContainer>
    );
};

export default DateAndCountry;
