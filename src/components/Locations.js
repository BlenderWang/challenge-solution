import React from "react";
import { Link } from "react-router-dom";
import "./locations.scss";

const Locations = () => {
    return (
        <div className="location-wrapper">
            <h3>sort results</h3>
            <div className="locations dropdown-menu">
                <div className="locations-title">
                    <h2>Locations</h2>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <ul className="locations-list">
                    <li>
                        <Link to="/">All Cities</Link>
                    </li>
                    <li>
                        <Link to="/">Stockholm</Link>
                    </li>
                    <li>
                        <Link to="/">Berlin</Link>
                    </li>
                    <li>
                        <Link to="/">New York</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Locations;
