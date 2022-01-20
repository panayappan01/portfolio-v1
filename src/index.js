import React from "react";
import ReactDOM from "react-dom";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
