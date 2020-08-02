import React from "react";
import dummyData from "../dummyData.js";
import scoreIcon from "../img/profile-details-------------2bars@2x.png";
import searchResultsIcon from "../img/search-results--filters-brandenburggate1600 2@2x.png";

const Details = () => {
    return (
        <div className="details-container">
            {dummyData.details.map((data) => (
                <section key={data.id}>
                    <img src={data.src} alt={data.id} />
                    <h3>{data.name}</h3>
                    <p>{data.excerpt}</p>
                    <div className="score-group">
                        <img src={scoreIcon} alt="bars" />
                        {data.score}
                    </div>
                    <div className="tags-group">
                        <i className="fas fa-hashtag"></i>
                        {data.tags}
                    </div>
                    <div className="location">
                        <img src={searchResultsIcon} alt="Search Result Icon" />
                        {data.location}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Details;
