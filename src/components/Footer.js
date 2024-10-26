import "./FooterStyle.css";
import React, { forwardRef } from "react";
import { FaHome, FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = forwardRef((props, ref) => {
    return (
        <div className="Footer" ref={ref}>
            <div className="FooterContent">
                <div className="left">
                    <div className="Loc">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <p>Argentina, Córdoba</p>
                    </div>
                    <div className="Email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />maximo.patron2003@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <Link to="/" className="btn">
                        Descargar CV
                    </Link>
                </div>
            </div>
        </div>


    );
});
export default Footer;