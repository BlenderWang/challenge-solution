import React from "react";

const LocationBtn = ({ text, onClick, color }) => {
    return (
        <div
            className={color ? "btn-group red" : "btn-group"}
            onClick={onClick}
        >
            <i className="fas fa-circle"></i>
            <button className="btn">{text}</button>
        </div>
    );
};

export default LocationBtn;
