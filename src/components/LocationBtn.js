import React from "react";

const LocationBtn = ({ text, onClick, color }) => {
    return (
        <div className={color ? "btn-group red" : "btn-group"}>
            <i className="fas fa-circle"></i>
            <button className="btn" onClick={onClick}>
                {text}
            </button>
        </div>
    );
};

export default LocationBtn;
