import React from "react";

const SearchBar = () => {
    return (
        <form>
            <input
                name="search"
                type="text"
                // value="search"
                placeholder="Search"
            />
            <i className="fas fa-search"></i>
        </form>
    );
};

export default SearchBar;
