import React, { useState, useEffect } from "react";
import dummyData from "../dummyData";
import Details from "./Details";
import Pagination from "./Pagination";

const DetailsWrapper = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        setItems(dummyData.details);
    }, []);

    // get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // hop to certain page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const maxPage = Math.ceil(items.length / itemsPerPage);

    const next = () => {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    };

    const prev = () => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    };

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
