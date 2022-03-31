import React, { useEffect } from "react";
import AOS from "aos";
import { ToastContainer } from "react-toastify";
import ReactGA from "react-ga4";
import {
    Header,
    About,
    Services,
    Portfolio,
    Experience,
    Contact,
    Footer,
} from "./components";

const App = () => {
    useEffect(() => {
        ReactGA.initialize(process.env.REACT_APP_GA);
        ReactGA.send("pageview");
    }, []);

    useEffect(() => {
        AOS.init({
            easing: "ease",
            duration: 1800,
            once: true,
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <ToastContainer />
            <Header />
            <About />
            <Services />
            <Portfolio />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
