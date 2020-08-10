import React, { useState, useEffect, useContext } from "react";
import dummyData from "../dummyData";
import Details from "./Details";
import Pagination from "./Pagination";
import AppContext from "../context";

const DetailsWrapper = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const { state } = useContext(AppContext);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filterItems = (details, location) => {
        location = location.toLowerCase();
        if (location === "all cities") location = "";

        const filteredItems = details.filter((data) => {
            return data.location.toLowerCase().includes(location);
        });

        return filteredItems;
    };

    // hop to certain page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const next = () => {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    };

    const prev = () => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    };

    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    const maxPage = Math.ceil(items.length / itemsPerPage);

    useEffect(() => {
        setItems(filterItems(dummyData.details, state.currentLocation));
    }, [state.currentLocation]);

    return (
        <div>
            <Details details={currentItems} />
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={items.length}
                jump={paginate}
                onPrev={prev}
                onNext={next}
            />
        </div>
    );
};

export default DetailsWrapper;
