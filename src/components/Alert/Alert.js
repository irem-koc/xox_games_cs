import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "./Alert.css";
const Alert = () => {
    const { error, show, setShow, success } = useContext(Context);

    return show ? (
        <div>
            {
                <div className={success ? "success" : "alert"}>
                    <span className="closebtn" onClick={() => setShow(!show)}>
                        &times;
                    </span>
                    {error}
                </div>
            }
        </div>
    ) : (
        ""
    );
};

export default Alert;
