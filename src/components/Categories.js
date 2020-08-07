import React, { useState } from "react";
import dummyData from "../dummyData";
import Category from "./Category";
// import DefinitionParagraph from "./DefinitionParagraph";
import "./categories.scss";
import "./definition.scss";

const Categories = ({ title, children }) => {
    const [showDefinition, setShowDefinition] = useState(false);
    const [showDefinitionText, setDefinitionText] = useState("");

    const toggleDefinition = () => {
        setShowDefinition(!showDefinition);
    };

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
                    {showDefinitionText}
                    {/* {dummyData.categories.map((category) => (
                        <DefinitionParagraph
                            paragraph={category.definition}
                            key={category.id}
                            showParagraph={showDefinition}
                        />
                    ))} */}
                </div>
            </div>
        </>
    );
};

export default Categories;
