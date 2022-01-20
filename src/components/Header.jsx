import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <header className="home" id="home">
            <div
                onClick={toggleNav}
                className={`menu-toggler ${open ? "open" : ""}`}
            >
                <div className="bar half start"></div>
                <div className="bar"></div>
                <div className="bar half end"></div>
            </div>
            <nav className={`top-nav ${open ? "open" : ""}`}>
                <ul className="nav-list">
                    <li>
                        <Link
                            onClick={toggleNav}
                            defaultChecked
                            className="nav-link"
                            activeClass="active-nav-link"
                            to="home"
                            smooth={true}
                            spy={true}
                            duration={2000}
                            delay={20}
                            offset={-70}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={toggleNav}
                            className="nav-link"
                            activeClass="active-nav-link"
                            to="about"
                            smooth={true}
                            spy={true}
                            duration={2000}
                            delay={20}
                            offset={-70}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={toggleNav}
                            className="nav-link"
                            activeClass="active-nav-link"
                            to="services"
                            smooth={true}
                            spy={true}
                            duration={2000}
                            delay={20}
                            offset={-70}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={toggleNav}
                            className="nav-link"
                            activeClass="active-nav-link"
                            to="portfolio"
                            smooth={true}
                            spy={true}
                            duration={2000}
                            delay={20}
                            offset={10}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={toggleNav}
                            className="nav-link"
                            activeClass="active-nav-link"
                            to="experience"
                            smooth={true}
                            spy={true}
                            duration={2000}
                            delay={20}
                            offset={10}
                        >
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={toggleNav}
                            className="nav-link"
                            activeClass="active-nav-link"
                            to="contact"
                            smooth={true}
                            spy={true}
                            duration={2000}
                            delay={20}
                            offset={10}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="landing-text">
                <h1>Panayappan</h1>
                <h6>MERN Stack and a React Native Developer</h6>
            </div>
        </header>
    );
};

export default Header;
