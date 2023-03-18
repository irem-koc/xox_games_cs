import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [day, setDay] = useState(30);
    const [hour, setHour] = useState(23);
    const [minute, setMinute] = useState(59);
    const [second, setSecond] = useState(59);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(false);
    const values = {
        day,
        hour,
        minute,
        setDay,
        error,
        setError,
        setHour,
        setMinute,
        email,
        setEmail,
        second,
        setSecond,
        show,
        setShow,
        success,
        setSuccess,
    };
    return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default ContextProvider;
