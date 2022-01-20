import React, { useEffect } from "react";
import AOS from "aos";
import { ToastContainer } from "react-toastify";
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
