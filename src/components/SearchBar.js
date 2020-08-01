import React from "react";
import "./searchbar.scss";

const SearchBar = () => {
    return (
        <form className="search-form">
            <input
                className="input"
                name="search"
                type="query"
                // value={query}
                placeholder="Search"
            />
            <i className="fas fa-search"></i>
        </form>
    );
};

export default SearchBar;
