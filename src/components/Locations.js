import React, { useState, useContext } from "react";
import dummyData from "../dummyData";
import LocationBtn from "./LocationBtn";
import AppContext from "../context";
import "./locations.scss";

const Locations = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLocation, setLocation] = useState("All Cities");
    const { dispatch } = useContext(AppContext);

    const open = () => {
        setIsOpen(!isOpen);
    };

    const filterLocation = (newLocation) => {
        setLocation(newLocation);
        dispatch({ type: "FILTER_LOCATION", payload: newLocation });
    };

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
                    }>
                    {dummyData.locations.map((location) => (
                        <LocationBtn
                            key={location}
                            text={location}
                            color={location === currentLocation ? true : false}
                            onClick={() => filterLocation(location)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Locations;
