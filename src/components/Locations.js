import React, { useState, useEffect } from "react";
import dummyData from "../dummyData";
import LocationBtn from "./LocationBtn";
import "./locations.scss";

const Locations = () => {
    const [btnClicked, setBtnClicked] = useState(false);

    const filterLocation = () => {
        // dummyData.details.filter(detail => detail.location)
        console.log("filter");
    };

    useEffect(() => {
        window.addEventListener("click", filterLocation);
    }, []);

    return (
        <div className="location-wrapper">
            <h3>sort results</h3>
            <div className="locations dropdown-menu">
                <div className="locations-title">
                    <h2>Locations</h2>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="locations-btns">
                    {dummyData.locations.map((location) => (
                        <LocationBtn
                            key={location}
                            text={location}
                            onClick={() => setBtnClicked(!btnClicked)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Locations;
