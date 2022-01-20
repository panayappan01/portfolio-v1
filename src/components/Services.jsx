import React from "react";
import { FaLayerGroup, FaCode, FaChartLine, FaAndroid } from "react-icons/fa";

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-heading">
                    <h1>Services</h1>
                    <h6>What I can do for you</h6>
                </div>

                <div className="my-skills">
                    <div
                        className="skill"
                        data-aos="fade-in"
                        data-aos-delay="300"
                    >
                        <div className="icon-container">
                            <FaCode />
                        </div>
                        <h1>Web Development</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Aperiam, fugiat. Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Aperiam, fugiat.
                        </p>
                    </div>
                    <div
                        className="skill"
                        data-aos="fade-in"
                        data-aos-delay="600"
                    >
                        <div className="icon-container">
                            <FaAndroid />
                        </div>
                        <h1>Mobile App Development</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Aperiam, fugiat. Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Aperiam, fugiat.
                        </p>
                    </div>
                    <div
                        className="skill"
                        data-aos="fade-in"
                        data-aos-delay="900"
                    >
                        <div className="icon-container">
                            <FaLayerGroup />
                        </div>
                        <h1>Full Stack Development</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Aperiam, fugiat. Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Aperiam, fugiat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
