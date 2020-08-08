import React from "react";
import Card from "./Card";
import "./details.scss";

const Details = ({ details, location }) => {
    // const location = "Stockholm";

    return (
        <div className="details-container">
            {details
                .filter((data) => {
                    console.log(data.location);
                    return data.location.toLowerCase().includes(location);
                })
                .map((data) => (
                    <Card key={data.id} data={data} />
                ))}
        </div>
    );
};

export default Details;
