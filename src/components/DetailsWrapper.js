import React, { useState, useEffect, useContext, useReducer } from "react";
import dummyData from "../dummyData";
import Details from "./Details";
import Pagination from "./Pagination";
import AppContext from "../context";
import reducer from "../reducer";

const DetailsWrapper = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [location, setLocation] = useState("");
    const itemsPerPage = 3;

    const state = useContext(AppContext);
    //const [state, dispatch] = useReducer(reducer, istate);

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

    const test = () => {
        //let { state } = state;
        console.log(state.currentLocation);
    };

    return (
        <div>
            fff: {state.state.currentLocation}
            <br />
            sssssss: {test()}
            <Details details={currentItems} location={location} />
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
