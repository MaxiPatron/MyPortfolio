import React from 'react';
import './Proyects.css';
import logoSmile from '../assets/logito.png';
import logoPC from '../assets/LogoSinFondoa.png';

const Proyectos = () => {
    return (
        <div className="home-proyect-section" id="proyect">
            <h1 className="proyect-title">Proyectos</h1>
            <div className="proyects-container">
                <div className="proyects-box">
                <img src={logoSmile} alt="Everyone Needs Smile logo" className="proyect-logo" />
                    <ul className="proyects-text">
                        <p>
                            Proyecto en desarrollo orientado al crowdfunding solidario, donde los usuarios podrán contribuir a distintas causas mediante donaciones. Está siendo construido con tecnologías como .NET, C#, EJS y servicios en la nube mediante AWS.
                        </p>
                    </ul>
                </div>
                <div className="proyects-box">
                <img src={logoPC} alt="PC-Soluciones logo" className="proyect-logo-circle" />
                    <ul>
                        <p>
                            Sitio web para nuestro emprendimiento de venta de componentes y mantenimiento de PCs (Aún en desarrollo). Desarrollado con React, Bootstrap y una base de datos en Supabase (PostgreSQL), ya se encuentra online en:
                            <br />
                            <a href="https://pcvassoluciones.netlify.app" target="_blank" rel="noreferrer">
                                pcvassoluciones.netlify.app
                            </a>
                        </p>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;
