import React from "react";

const LocationBtn = ({ text, onClick }) => {
    return (
        <div className="btn-group">
            <i className="fas fa-circle"></i>
            <button className="btn" onClick={onClick}>
                {text}
            </button>
        </div>
    );
};

export default LocationBtn;
