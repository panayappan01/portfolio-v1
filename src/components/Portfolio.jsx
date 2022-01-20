import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import portItem1 from "../assets/images/shareme.png";
import portItem2 from "../assets/images/expense-tracker.png";
import portItem3 from "../assets/images/ai.png";

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-heading">
                    <h1>Portfolio</h1>
                    <h6>View some of my recent work</h6>
                </div>

                <div className="portfolio-item">
                    <div
                        className="portfolio-img has-margin-right"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <img src={portItem1} alt="" />
                    </div>
                    <div
                        className="portfolio-description"
                        data-aos="fade-left"
                        data-aos-delay="600"
                    >
                        <h6>Web Development</h6>
                        <h1>Shareme</h1> {/* Name */}
                        <p>
                            Full Stack Image Sharing Social Media app built with
                            ReactJS as a Front end and Sanity.io as a Backend
                            Service which includes Google Authentication.
                        </p>
                        <a
                            href="https://shareme-connect.netlify.app"
                            className="cta"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit Link
                        </a>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div
                        className="portfolio-description has-margin-right"
                        data-aos="fade-right"
                        data-aos-delay="900"
                    >
                        <h6>Web Development</h6>
                        <h1>Voice Powered Expense Tracker</h1> {/* Name */}
                        <p>
                            An Expense Tracker with Voice Recognition feature
                            powered by Speechly Voice Recognition Service Which
                            Track our Daily Expenses in a Easy Manner built with
                            React JS
                        </p>
                        <a
                            href="https://expense-tracker-react-js.netlify.app"
                            className="cta"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit Link
                        </a>
                    </div>
                    <div
                        className="portfolio-img"
                        data-aos="fade-left"
                        data-aos-delay="1200"
                    >
                        <img src={portItem2} alt="" />
                    </div>
                </div>
                <div className="portfolio-item">
                    <div
                        className="portfolio-img has-margin-right"
                        data-aos="fade-right"
                        data-aos-delay="1500"
                    >
                        <img src={portItem3} alt="" />
                    </div>
                    <div
                        className="portfolio-description"
                        data-aos="fade-left"
                        data-aos-delay="1800"
                    >
                        <h6>Web Development</h6>
                        <h1>AI News Reader</h1> {/* Name */}
                        <p>
                            News Reader Application Built with ReactJS and Alan
                            AI service for Artificial Intelligence that can help
                            us to read different categories of news.
                        </p>
                        <a
                            href="https://chiku-ai-news.netlify.app/"
                            className="cta"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit Link
                        </a>
                    </div>
                </div>
                <div className="view-more-container">
                    <a
                        href="https://github.com/panayappan01/"
                        className="view-more"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View More Projects
                        <RiSendPlane2Fill />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
