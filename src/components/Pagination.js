import React, { useState } from "react";
/* import {
    next,
    prev,
    jump,
    currentData,
    currentPage,
    maxPage,
} from ("./usePagination"); */
import "./pagination.scss";

const pageNumbers = [1, 2, 3, 4, 5, 6];

const Pagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const next = () => {
        console.log(currentPage);
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    };

    const prev = () => {
        console.log(currentPage);
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    };

    const jump = (page) => {
        const pageNumber = Math.max(1, page);
        setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
    };

    return (
        <div className="pagination">
            <h4>PAGE</h4>
            <button
                onClick={() => {
                    prev();
                }}
                className="previous"
            >
                &laquo;
            </button>
            <div className="page-numbers-container">
                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        onClick={() => {
                            console.log("jump to", page);
                            jump(page);
                        }}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <button
                onClick={() => {
                    next();
                }}
                className="next"
            >
                &raquo;
            </button>
        </div>
    );
};

export default Pagination;
