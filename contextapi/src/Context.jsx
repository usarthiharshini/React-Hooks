import { createContext } from "react";

const appContext = createContext();


function AppProvider({children}) {
    return ( 
        <appContext.Provider value='harshi baby'>{children}</appContext.Provider>
     );
}

export { AppProvider,appContext};