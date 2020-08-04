import React from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import Definition from "./components/Definition";
import DetailsWrapper from "./components/DetailsWrapper";
// import Details from "./components/Details";
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
                <Definition />
                {/* <Details /> */}
                <DetailsWrapper />
            </main>
            <Footer />
        </div>
    );
}

export default App;
