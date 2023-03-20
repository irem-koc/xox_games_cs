import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import Alert from "../Alert/Alert";
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
        error,
        setError,
        setShow,
        setSuccess,
    } = useContext(Context);

     // eslint-disable-line
    useEffect(() => {
        const timer = setInterval(() => {
            setSecond(second - 1);
            if (second === 0) {
                setMinute(minute - 1);
                setSecond(59);
            }
            if (minute === 0) {
                setHour(hour - 1);
                setMinute(59);
            }
            if (hour === 0) {
                setDay(hour - 1);
                setHour(23);
            }
            if (day === 0) {
                setSecond(0);
                setMinute(0);
                setHour(0);
                setDay(0);
                return false;
            }
        }, 1000);
        return () => clearInterval(timer);
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://78.188.150.116:6566/xoxTask";
        const data = {
            email: email,
        };

        if (!email.includes("@")) {
            setShow(true);
            setError(
                `Girmiş olduğunuz email '${email}' geçerli değildir. '@' içermiyor.`
            );
            setSuccess(false);
        } else if (!email.includes(".com")) {
            setShow(true);
            setError(
                `Girmiş olduğunuz email '${email}' geçerli değildir. '.com' içermiyor .`
            );
            setSuccess(false);
        } else {
            setShow(true);
            setError(`Başarılı bir şekilde ${email} kaydedilmiştir.`);
            try {
                const response = await axios.post(url, data);
                if (response.request.status === 200) {
                    setSuccess(true);
                    setError(`Başarılı bir şekilde ${email} kaydedilmiştir.`);
                }
            } catch (error) {
                setError(
                    `${email} kaydedilmemiştir ${error} alınıyor. Daha sonra tekrar deneyiniz.`
                );
            }
            setEmail("");
        }
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    return (
        <div className="middle-section">
            <div className="counter">
                {day > 0 || hour > 0 || minute > 0 || second > 0 ? (
                    <div>
                        {day} days {hour} hours {minute} minutes {second}{" "}
                        seconds.
                    </div>
                ) : (
                    <div>Finished!</div>
                )}
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
            {error ? <Alert /> : ""}
        </div>
    );
};

export default MainPage;
