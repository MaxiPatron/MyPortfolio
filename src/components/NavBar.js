import "./NavBarStyles.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (<div className="header">
        <Link to="/">
            <h1>My Portfolio</h1>
        </Link>
        <ul className={click ? "navbar active" : "navbar"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
            <li>
                <Link to="/">Projects</Link>
            </li>
        </ul>
        <div className="fabar" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}
        </div>
    </div>)
}
export default NavBar;