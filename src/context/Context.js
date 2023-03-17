import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [day, setDay] = useState(30);
    const [hour, setHour] = useState(23);
    const [minute, setMinute] = useState(59);
    const values = { day, hour, minute, setDay, setHour, setMinute };
    return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default ContextProvider;
