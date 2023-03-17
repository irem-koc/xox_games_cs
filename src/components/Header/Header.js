import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./../../image/xoxLogo.png";
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="brand-logo" />
            <button className="who-btn">
                <Link to={"https://xoxgames.io/"} target="_blank">Who Are We?</Link>
            </button>
        </div>
    );
};

export default Header;
