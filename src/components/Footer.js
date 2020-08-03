import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="ul-left">
                <li>
                    <Link to="/">
                        <h3>Terms</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <h3>Privacy</h3>
                    </Link>
                </li>
            </ul>

            <ul className="ul-right">
                <li>
                    <Link to="/">
                        <h3>About Skilldar</h3>
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
