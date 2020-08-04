import React from "react";
import skillsIcon from "../img/profile-details-------------2bars@2x.png";
import searchResultsIcon from "../img/search-results--filters-brandenburggate1600 2@2x.png";

function getRandomCategories() {
    const categories = [
        "#3Danimation",
        "#Visualeffects",
        "#MotionCaptureArtist",
        "#SFXcoordinator",
        "CGIartist",
    ];
    return categories
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .join(", ");
}

function getRandomCity(max) {
    const locations = ["Stockholm, Sweden", "Berlin, Germany", "New York, USA"];
    const idx = Math.floor(Math.random() * Math.floor(max));
    return locations[idx];
}

const Card = ({ data }) => {
    return (
        <section key={data.id}>
            <div
                style={{
                    backgroundImage: `url(${data.src})`,
                    backgroundPosition: "center 25%",
                    backgroundSize: "cover",
                    width: "10rem",
                    height: "10rem",
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
                    {getRandomCategories(3)}
                </div>
                <div className="location">
                    <img src={searchResultsIcon} alt="Search Result Icon" />
                    {getRandomCity(3)}
                </div>
            </div>
        </section>
    );
};

export default Card;
