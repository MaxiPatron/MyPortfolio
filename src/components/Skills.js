import React from 'react';
import './SkillsStyle.css';
import { FaJs, FaHtml5, FaCss3, FaReact, FaBootstrap, FaNpm, FaPhp, FaGithub  } from "react-icons/fa";
import { SiPostgresql, SiVisualstudio, SiVisualstudiocode  } from "react-icons/si";
import { FaC } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";

const Skills = () => {
    return (
        <div className="home-Skill-section" id="Skill">
            <h1 className="skill-title">Tecnologías</h1>
            <div className="skills-container">
                <div className="skills-box">
                    <h2 className="skills-box-title">Frontend</h2>
                    <p className="skills-text">
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
                    </p>
                </div>
                <div className="skills-box">
                    <h2 className="skills-box-title">Backend</h2>
                    <li>
                        <a className='icons' style={{ color: "#000" }}><FaNpm /></a>
                    </li>
                    <li>
                        <a className='icons' style={{ color: "#000" }}><FaPhp /></a>
                    </li>
                    <li>
                        <a className='icons' style={{ color: "#000", marginBottom:"12px"}}><span className='icon'><FaC /></span><span className='hash'>#</span></a>
                    </li>
                    <li>
                        <a className='icons' style={{ color: "#000", fontSize:"1.5rem", marginBottom:"12px"}}>ASP.NET</a>
                    </li>
                </div>
                <div className="skills-box">
                    <h2 className="skills-box-title">Otros</h2>
                    <li>
                        <a className='icons' style={{ color: "#000" }}><TbBrandMysql /></a>
                    </li>
                    <li>
                        <a className='icons' style={{ color: "#000" }}> <SiPostgresql /></a>
                    </li>
                    <li>
                        <a className='icons' style={{ color: "#000" }}><FaGithub /></a>
                    </li>
                    <li>
                        <a className='icons' style={{ color: "#000" }}><SiVisualstudio /></a>
                    </li>
                    <li>
                        <a className='icons' style={{ color: "#000" }}><SiVisualstudiocode /></a>
                    </li>
                </div>
            </div>
        </div>
    );
}

export default Skills;