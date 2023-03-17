import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [first, setfirst] = useState(second)
    const values= {}
    return <Context.Provider>{children}</Context.Provider>;
};
