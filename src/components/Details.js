import React from "react";
import dummyData from "../dummyData.js";
import Card from "./Card";
import "./details.scss";

const Details = () => {
    return (
        <div className="details-container">
            {dummyData.details.map((data) => (
                <Card key={data.id} data={data} />
            ))}
        </div>
    );
};

export default Details;
