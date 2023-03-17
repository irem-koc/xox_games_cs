import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import "./MainPage.css";

const MainPage = () => {
    const {
        day,
        hour,
        minute,
        email,
        second,
        setDay,
        setHour,
        setMinute,
        setSecond,
        setEmail,
    } = useContext(Context);
    var timer;
    useEffect(() => {
      timer = setInterval(() => {
        setSecond(second-1);
        if(second===0){
          setMinute(minute-1)
          setSecond(59)
        }
        if(minute===0){
          setHour(hour-1)
          setMinute(59)
        }
        if(hour===0){
          setDay(hour-1)
          setHour(23)
          
        }
        if(day===0){
          setSecond(0)
          setMinute(0)
          setHour(0)
          setDay(0)
        }
      }, 1000);
      return ()=> clearInterval(timer)
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://78.188.150.116:6566/xoxTask";
        const data = {
            email: email,
        };
        try {
            const response = await axios.post(url, data);
            console.log(response.data);
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
                {day} days {hour} hours {minute} minutes {second} seconds.
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
