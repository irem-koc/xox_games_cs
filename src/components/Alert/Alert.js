import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./Alert.css";
const Alert = () => {
    const { email, error, show, setShow, success } = useContext(Context);

    return show ? (
        success ? (
            <div className="success">
                <span className="closebtn" onClick={() => setShow(!show)}>
                    &times;
                </span>

                Başarılı bir şekilde {email} kaydedilmiştir.
            </div>
        ) : (
            <div className="alert">
                <span className="closebtn" onClick={() => setShow(!show)}>
                    &times;
                </span>

                {error}
            </div>
        )
    ) : (
        ""
    );
};

export default Alert;
