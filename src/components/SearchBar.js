import React, { useState } from "react";
// import json_data from "../localData.json";
import Card from "./Card";
import "./searchbar.scss";

const jsonData = require("../localData.json");

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const fetchResults = async (e) => {
        e.preventDefault();

        try {
            const res = await jsonData;
            // const data = res.map((result) => result.name);
            // const data = await res.json();
            console.log(res);
            setResults(res);
            setQuery("");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <form className="search-form" onSubmit={fetchResults}>
                <input
                    className="input"
                    type="text"
                    name="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="i.e. John Doe"
                />
                <i className="fas fa-search"></i>
            </form>

            <div className="search-results">
                {results
                    .filter((result) => result.location === "New York, USA")
                    .map((result) => (
                        <Card key={result.id} data={result} />
                    ))}
            </div>
        </>
    );
};

export default SearchBar;
