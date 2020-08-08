import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AppContext from "./context";
import reducer from "./reducer";

const Root = () => {
    const initialState = useContext(AppContext);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <Router>
                <App />
            </Router>
        </AppContext.Provider>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
