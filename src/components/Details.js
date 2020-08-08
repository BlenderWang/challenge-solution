import React from "react";
import Card from "./Card";
import "./details.scss";

const Details = ({ details, location }) => {
    return (
        <div className="details-container">
            {details
                .filter((data) => {
                    return data.location.toLowerCase().includes(location);
                })
                .map((data) => (
                    <Card key={data.id} data={data} />
                ))}
        </div>
    );
};

export default Details;
