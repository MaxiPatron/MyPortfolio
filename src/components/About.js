import React from "react";
import "./AboutStyle.css";
import AboutImg from "../assets/ftob.jpg";
const About = () => {
    return (
        <div fluid className="home-about-section" id="About">
            <div>
                <div>
                    <h1 style={{ fontSize: "2.6em", textDecoration: "underline" }}>SOBRE MI</h1>
                    <div md={8} className="home-about-description">
                        <div className="left">
                            <div className="AbImg">
                                <img className="into-Img" src={AboutImg} alt="IntroImg" />
                            </div>
                        </div>
                        <div className="right">
                            <p>
                                Mi nombre es Patrón Máximo, tengo 21 años y recientemente finalicé el cursado de la carrera de Analista de Sistemas de Computación en <a href="https://www.cervantes.edu.ar/">Institución Cervantes</a>, quedando pendiente únicamente la realización de la tesis.<br />

                                Comencé mi camino explorando el desarrollo Front-End. Con el tiempo, descubrí un mayor interés por el Back-End, lo que me permitió profundizar mis conocimientos y afianzar mi pasión por el desarrollo de software.<br />

                                Me encuentro constantemente en proceso de aprendizaje, desarrollando proyectos personales y trabajando con tecnologías tanto del entorno web como del desarrollo de sistemas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;
