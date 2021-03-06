import React from "react";
import "./burger.scss";

export const Burger = ({ open, setOpen }) => {
    return (
        <div className="burger" open={open} onClick={() => setOpen(!open)}>
            <div className={open === true ? "open" : ""} />
            <div className={open === true ? "open" : ""} />
            <div className={open === true ? "open" : ""} />
        </div>
    );
};
