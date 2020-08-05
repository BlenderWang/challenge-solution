import React from "react";
import dummyData from "../dummyData";
import Category from "./Category";
import "./categories.scss";

const Categories = () => {
    return (
        <div className="categories-wrapper">
            <h3 className="title">related searches</h3>
            <div className="category">
                {dummyData.categories.map((category) => (
                    <Category
                        key={category}
                        category={category}
                        onClick={() => console.log(category)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Categories;
