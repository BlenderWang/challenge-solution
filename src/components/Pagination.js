import React from "react";
import "./pagination.scss";

const Pagination = ({ itemsPerPage, totalItems, jump, onPrev, onNext }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <h4>PAGE</h4>
            <button
                onClick={() => {
                    onPrev();
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
                            jump(page);
                        }}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <button
                onClick={() => {
                    onNext();
                }}
                className="next"
            >
                &raquo;
            </button>
        </div>
    );
};

export default Pagination;
