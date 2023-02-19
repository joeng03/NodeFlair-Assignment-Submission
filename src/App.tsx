import "./App.css";
import JobPanel from "components/JobListing/JobPanel";
import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-left: auto;
    margin-right: auto;
`;
function App() {
    return (
        <AppContainer>
            <JobPanel />
        </AppContainer>
    );
}

export default App;
