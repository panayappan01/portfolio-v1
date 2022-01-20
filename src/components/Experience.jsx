import React from "react";

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="section-heading">
                    <h1>Work Experience</h1>
                    <h6>Past and Current Jobs</h6>
                </div>

                <div
                    className="timeline"
                    data-aos="fade-down"
                    data-aos-delay="300"
                >
                    <ul>
                        <li className="date" data-date="July 2021 - Present">
                            <h1>QpiCloud</h1>
                            <p>Application Developer</p>
                        </li>
                        <li className="date" data-date="June 2020 - May 2021">
                            <h1>Hackowls Software</h1>
                            <p>Full Stack Developer</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
