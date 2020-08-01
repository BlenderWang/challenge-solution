import React, { useState } from "react";
import BrowseSkills from "../img/profile-main-browse-skills.png";
import InstagramIcon from "../img/profile-details-------------instagram---fontawesome@2x.png";

import "./header.scss";

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        console.log("toggle");
        setCollapsed(!collapsed);
        setIsOpen(!isOpen);
    };

    return (
        <div className="header">
            <div className="header--left">
                <i className="fas fa-hashtag"></i>
                <img
                    src={BrowseSkills}
                    alt="browse skills"
                    className="header--img"
                />
            </div>
            <div className="header--right">
                <div className="header--icon-burger" onClick={toggle}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>

            <div className={isOpen ? "header--menu" : `header--menu hidden`}>
                <img
                    src={InstagramIcon}
                    alt="browse skills"
                    className="header--icon-instagram"
                />
                <i className="fab fa-twitter-square"></i>
                <h4>
                    Login
                    <i className="fas fa-sign-in-alt"></i>
                </h4>
            </div>
        </div>
    );
};

export default Header;
