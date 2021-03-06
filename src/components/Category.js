import React from "react";

const Category = ({ category, onClick }) => {
    return (
        <>
            <h3 className="category-name" onClick={onClick}>
                {category.name}
            </h3>
        </>
    );
};

export default Category;
