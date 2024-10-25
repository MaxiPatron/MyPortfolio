import "./BackImgStyle.css";
import IntroImg from "../assets/Programming.png";
import { Link } from "react-router-dom";
const BackImg = () => {
    return (<div className="imghome">
        <div className="mask">
            <img className="into-Img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p style={{color: "#000"}}>Hola, soy Máximo</p>
            <h1 style={{color: "#000"}}>Desarrollador de Software</h1>
            <div>
                <Link to="/" className="btn">
                    Proyectos
                </Link>
                <Link to="/" className="btn btn-light">
                    Contacto
                </Link>
            </div>
        </div>
    </div>)
};
export default BackImg;