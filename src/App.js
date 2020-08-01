import React from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import "./app.scss";

function App() {
    return (
        <div className="app">
            <Header />
            <div style={{ height: "5rem" }} />
            <Logo />
            <SearchBar />
        </div>
    );
}

export default App;
