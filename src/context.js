import { createContext } from "react";

const AppContext = createContext({
    currentLocation: "All Cities",
    items: [],
});

export default AppContext;
