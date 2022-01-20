import React from "react";
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaDribbbleSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaEnvelopeSquare,
    FaDownload,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import profile from "../assets/images/mypic-4jpg.jpg";
import code from "../assets/images/code.png";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div
                    className="profile-img"
                    data-aos="fade-right"
                    data-aos-delay="300"
                >
                    <img src={profile} alt="my-image" />
                </div>
                <div
                    className="about-details"
                    data-aos="fade-left"
                    data-aos-delay="600"
                >
                    <div className="about-heading">
                        <h1>About</h1>
                        <h6>Myself</h6>
                    </div>
                    <p className="about-description">
                        Problem Solver and a Developer who wishes to enhance my
                        skill and to learn new one's from the community.with a
                        1.6 years working experience in the development field.
                        Interested in solving business Problems{" "}
                        <span className="icon-text">
                            through
                            <img src={code} alt="code" className="code" />
                        </span>
                    </p>
                    <div className="social-media">
                        <ul className="nav-list">
                            <li>
                                <a
                                    href="https://github.com/panayappan01/"
                                    className="icon-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaGithubSquare className="fb" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/panayappan_lakshmanan/"
                                    className="icon-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaInstagramSquare className="twitter" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:panayappan02@gmail.com"
                                    className="icon-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaEnvelopeSquare className="dribble" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="resume-container">
                        <Link
                            to="/files/Resume.pdf"
                            target="_blank"
                            download
                            className="resume-btn"
                        >
                            <FaDownload />
                            RESUME
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
