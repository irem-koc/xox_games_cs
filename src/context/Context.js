import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [date, setDate] = useState(null);
    const values = { date, setDate };
    return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default ContextProvider;
