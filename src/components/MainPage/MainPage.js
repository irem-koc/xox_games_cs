import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import "./MainPage.css";

const MainPage = () => {
    const { day, hour, minute} =
        useContext(Context);
    useEffect(() => {}, []);
    return (
        <div className="middle-section">
            <div className="counter">
                {day} day {hour} hours {minute} minutes.
            </div>
            <input
                className="mail-input"
                type="text"
                placeholder="example@example.com"
            />
            <button className="notify-btn">Get Notified</button>
        </div>
    );
};

export default MainPage;
