import React, { useState, useEffect } from "react";
import dummyData from "../dummyData";
import LocationBtn from "./LocationBtn";
import "./locations.scss";

const Locations = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [color, setColor] = useState(false);
    // const [btnClicked, setBtnClicked] = useState(false);

    const open = () => {
        setIsOpen(!isOpen);
    };

    const changeColor = () => {
        setColor(!color);
    };

    /* const filterLocation = () => {
        // dummyData.details.filter(detail => detail.location)
    }; */

    useEffect(() => {
        //window.addEventListener("click", filterLocation);
    }, []);

    return (
        <div className="location-wrapper">
            <h3>sort results</h3>
            <div className="locations dropdown-menu">
                <div className="locations-title" onClick={open}>
                    <h2>Locations</h2>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div
                    className={
                        isOpen ? "locations-btns open" : "locations-btns"
                    }
                >
                    {dummyData.locations.map((location) => (
                        <LocationBtn
                            key={location}
                            text={location}
                            color={color}
                            onClick={changeColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Locations;
