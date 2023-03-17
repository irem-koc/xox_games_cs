import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(null);
    const values = { counter, setCounter };
    return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default ContextProvider;
