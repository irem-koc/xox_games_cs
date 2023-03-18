import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./Alert.css";
const Alert = () => {
    const { email, error, show, setShow } = useContext(Context);

    return show ? (
        <div className="alert">
            <span className="closebtn" onClick={() => setShow(!show)}>
                &times;
            </span>
            
            {error}
        </div>
    ) : (
        ""
    );
};

export default Alert;
