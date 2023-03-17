import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import "./MainPage.css";

const MainPage = () => {
    const { day, hour, minute, email, setEmail } = useContext(Context);
    useEffect(() => {}, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://78.188.150.116:6566/xoxTask";
        const data = {
            email: email,
        };
        try {
            const response = await axios.post(url, data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    return (
        <div className="middle-section">
            <div className="counter">
                {day} days {hour} hours {minute} minutes.
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleEmailChange}
                    value={email}
                    className="mail-input"
                    type="text"
                    placeholder="example@example.com"
                />
                <button className="notify-btn" type="submit">
                    Get Notified
                </button>
            </form>
        </div>
    );
};

export default MainPage;
