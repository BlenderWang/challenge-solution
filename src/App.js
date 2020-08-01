import React from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import "./app.scss";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="section--top">
                <Logo />
                <SearchBar />
            </div>
        </div>
    );
}

export default App;
