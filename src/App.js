import React from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import DetailsWrapper from "./components/DetailsWrapper";
import Locations from "./components/Locations";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import "./app.scss";

function App() {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <div className="section--top">
                    <Logo />
                    <SearchBar />
                </div>
                <Locations />
                <Categories />
                <DetailsWrapper />
            </main>
            <Footer />
        </div>
    );
}

export default App;
