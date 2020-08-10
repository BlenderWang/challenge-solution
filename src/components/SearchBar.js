import React, { useState } from "react";
import dummyData from "../dummyData";
import Card from "./Card";
import "./searchbar.scss";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const fetchResults = async (e) => {
        e.preventDefault();
        const value = e.target.value;

        try {
            /* const searchResult = await dummyData.details.filter(
                (detail) =>
                    detail.name.toLowerCase().includes(value) ||
                    detail.location.toLowerCase().includes(value)
            ); */
            const searchResult = await dummyData.details.map((name) =>
                console.log(name)
            );
            console.log(value);
            console.log(searchResult);
            setResults(searchResult);
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
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                    placeholder="Search"
                />
                <i className="fas fa-search"></i>
            </form>

            <div className="search-results">
                {results.map((result) => (
                    <Card key={result.id} data={result} />
                ))}
            </div>
        </>
    );
};

export default SearchBar;
