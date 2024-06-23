import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Burger } from "./Burger";
import BrowseSkills from "../img/profile-main-browse-skills.png";

import "./header.scss";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <ul className="ul-left">
                <li>
                    <Link to="/">
                        <i className="fas fa-hashtag"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <img src={BrowseSkills} alt="browse skills" />
                    </Link>
                </li>
            </ul>

            <Burger open={open} setOpen={setOpen} />

            <ul className={open ? "ul-right open" : "ul-right"}>
                <li>
                    <Link to="/">
                        <i className="fab fa-instagram"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <i className="fab fa-twitter-square"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <h4>
                            Login
                            <i className="fas fa-sign-in-alt"></i>
                        </h4>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
