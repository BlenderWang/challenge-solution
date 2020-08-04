import React from "react";
import PropTypes from "prop-types";
import skillsIcon from "../img/profile-details-------------2bars@2x.png";
import searchResultsIcon from "../img/search-results--filters-brandenburggate1600 2@2x.png";

const Results = ({ data }) => {
    return (
        <section key={data.id}>
            <div
                style={{
                    backgroundImage: `url(${data.url})`,
                    backgroundPosition: "center 25%",
                    backgroundSize: "cover",
                    width: "10rem",
                    height: "10rem",
                    borderRadius: "5px",
                }}
                key={data.id}
                className="img-container"
                id={data.title}
            ></div>
            <h3>{data.title}</h3>
            {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. I’ve worked with many professional film teams.
            </p>
            <div className="skills-group">
                <img src={skillsIcon} alt="bars" />
                665
            </div>

            <div className="dark">
                <div className="tags-group">
                    <i className="fas fa-hashtag"></i>
                    #3Danimation, #Visualeffects, #MotionCaptureArtist
                </div>
                <div className="location">
                    <img src={searchResultsIcon} alt="Search Result Icon" />
                    Berlin, Germany
                </div>
            </div> */}
        </section>
    );
};

Results.propTypes = {};

export default Results;
