import React from "react";
import Card from "./Card";
import "./details.scss";

const Details = ({ details }) => {
    return (
        <div className="details-container">
            {details.map((data) => (
                <Card key={data.id} data={data} />
            ))}
        </div>
    );
};

export default Details;
