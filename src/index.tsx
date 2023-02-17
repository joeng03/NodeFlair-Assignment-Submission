import "./index.css";
import App from "./App";
import { BASE_URL } from "config/endpoints";
import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

axios.defaults.baseURL = BASE_URL;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
