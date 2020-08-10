import React from "react";
import skillsIcon from "../img/profile-details-------------2bars@2x.png";
import searchResultsIcon from "../img/search-results--filters-brandenburggate1600 2@2x.png";

const Card = ({ data }) => {
    return (
        <section key={data.id}>
            <div
                style={{
                    backgroundImage: `url(${data.src})`,
                    backgroundPosition: "center 25%",
                    backgroundSize: "cover",
                    width: "9rem",
                    height: "9rem",
                    borderRadius: "5px",
                }}
                key={data.id}
                className="img-container"
                id={data.name}
            ></div>
            <h3>{data.name}</h3>
            <p>{data.excerpt}</p>
            <div className="skills-group">
                <img src={skillsIcon} alt="bars" />
                {data.skills}
            </div>

            <div className="dark">
                <div className="tags-group">
                    <i className="fas fa-hashtag"></i>
                    {data.tags}
                </div>
                <div className="location">
                    <img src={searchResultsIcon} alt="Search Result Icon" />
                    {data.location}
                </div>
            </div>
        </section>
    );
};

export default Card;
