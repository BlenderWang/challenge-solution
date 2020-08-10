import React, { useState, useContext } from "react";
import dummyData from "../dummyData";
import AppContext from "../context";
import Card from "./Card";
import "./searchbar.scss";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const { dispatch } = useContext(AppContext);

    const fetchResults = (e) => {
        e.preventDefault();
        console.log("query: " + query);

        try {
            const searchResult = dummyData.details.filter((detail) => {
                return (
                    detail.name.toLowerCase().includes(query) ||
                    detail.location.toLowerCase().includes(query) ||
                    detail.tags.toString().toLowerCase().includes(query)
                );
            });
            console.log(searchResult);

            // setResults(searchResult);
            dispatch({
                type: "UPDATE_ITEMS",
                payload: searchResult,
            });
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
                        console.log(e.target.value);
                        setQuery(e.target.value);
                    }}
                    placeholder="Search"
                />
                <i className="fas fa-search"></i>
            </form>

            <div>
                {results.map((result) => (
                    <Card key={result.id} data={result} />
                ))}
            </div>
        </>
    );
};

export default SearchBar;
