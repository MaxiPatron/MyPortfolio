import React from 'react';
import './SkillsStyle.css';
import { FaJs, FaHtml5, FaCss3, FaReact, FaBootstrap, FaNpm, FaPhp, FaGithub } from "react-icons/fa";
import { SiPostgresql, SiVisualstudio, SiVisualstudiocode } from "react-icons/si";
import { FaC } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";

const Skills = () => {
    return (
        <div className="home-Skill-section" id="Skill">
            <h1 className="skill-title">Tecnologías</h1>
            <div className="skills-container">
                <div className="skills-box">
                    <h2 className="skills-box-title">Frontend</h2>
                    <ul className="skills-text">
                        <li>
                            <a className='icons' style={{ color: "#000" }} href="#"><FaHtml5 /></a>
                        </li>
                        <li>
                            <a className='icons' style={{ color: "#000" }} href="#"><FaCss3 /></a>
                        </li>
                        <li>
                            <a className='icons' style={{ color: "#000" }} href="#"><FaJs /></a>
                        </li>
                        <li>
                            <a className='icons' style={{ color: "#000" }} href="#"><FaReact /></a>
                        </li>
                        <li>
                            <a className='icons' style={{ color: "#000" }} href="#"><FaBootstrap /></a>
                        </li>
                    </ul>
                </div>
                <div className="skills-box">
                    <h2 className="skills-box-title">Backend</h2>
                    <ul>
                        <li>
                            <a className='icons' style={{ color: "#000" }} href="#"><FaNpm /></a>
                        </li>
                        <li>
                            <a className='icons' style={{ color: "#000" }} href="#"><FaPhp /></a>
                        </li>
                        <li>
                            <span className='icons' style={{ color: "#000", marginBottom: "12px" }}>
                                <FaC />
                                <span className='hash'>#</span>
                            </span>
                        </li>
                        <li>
                            <span className='icons' style={{ color: "#000", fontSize: "1.5rem", marginBottom: "12px" }}>ASP.NET</span>
                        </li>
                    </ul>
                </div>
                <div className="skills-box">
                    <h2 className="skills-box-title">Otros</h2>
                    <ul>
                        <li>
                            <a className='icons' style={{ color: "#000" }} href="#"><TbBrandMysql /></a>
                        </li>
                        <li>
                            <a className='icons' style={{ color: "#000" }} href="#"><SiPostgresql /></a>
                        </li>
                        <li>
                            <a className='icons' style={{ color: "#000" }} href="#"><FaGithub /></a>
                        </li>
                        <li>
                            <a className='icons' style={{ color: "#000" }} href="#"><SiVisualstudio /></a>
                        </li>
                        <li>
                            <a className='icons' style={{ color: "#000" }} href="#"><SiVisualstudiocode /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
