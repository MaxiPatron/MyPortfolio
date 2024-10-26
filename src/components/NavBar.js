import "./NavBarStyles.css"
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changeColor = () => { if (window.scrollY >= 100) { setColor(true); } else { setColor(false) }; };
    window.addEventListener("scroll", changeColor);
    return (
            <div className={color ? "header header-bg" : "header"}>
                <Link to="/">
                    <h1>Portfolio</h1>
                </Link>
                <ul className={click ? "navbar active" : "navbar"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Me</Link></li>
                </ul>
                <div className="fabar" onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}
                </div>
            </div>
    );
}

export default NavBar;