import "./BackImgStyle.css";
import IntroImg from "../assets/Prog.jpg";
const BackImg = () => {
    return (<div className="imghome">
        <div className="mask">
            <img id="Home" className="into-Img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p style={{ color: "#fff" }}>Hola, soy Máximo</p>
            <h1 style={{ color: "#000" }}>Desarrollador Web</h1>
            <p className="hero-subtitle">Creando experiencias web modernas</p>
            <div>
            </div>
        </div>
    </div>)
};
export default BackImg;