import React, { useState } from "react";
import dummyData from "../dummyData";
import Category from "./Category";
import "./categories.scss";
import "./definition.scss";

const Categories = () => {
    const [showDefinitionText, setDefinitionText] = useState("");

    const setDefinition = (defText) => {
        setDefinitionText(defText);
    };

    return (
        <>
            <div className="categories-wrapper">
                <h3 className="title">related searches</h3>
                <div className="category">
                    {dummyData.categories
                        .filter((category) => category.name)
                        .map((category) => (
                            <Category
                                key={category.id}
                                category={category}
                                onClick={() => {
                                    setDefinition(category.definition);
                                }}
                            />
                        ))}
                </div>
            </div>

            <div className="definition">
                <div className="definition--heading">
                    <h6>Definition</h6>
                </div>

                <div className="definition--body">
                    {!showDefinitionText
                        ? dummyData.categories[0].definition
                        : showDefinitionText}
                </div>
            </div>
        </>
    );
};

export default Categories;
