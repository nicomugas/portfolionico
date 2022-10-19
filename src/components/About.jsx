import React from "react";
import s from "./About.module.css";
import SkillsBar from "./SkillsBar";
import foto from "./img/foto.png"

export default function About() {



    return (
        <div className={s.container}>
            <div className={s.hijo}>
                <h1>SOBRE MI</h1>
                <h4>nicomugas@gmail.com</h4>
                <p><h2>Hola soy Nico Mugas</h2></p>
                <p>ANALISTA DE SISTEMAS || FULL STACK WEB DEVELOPER</p>
                <p>Me gusta mucho la tecnología, y estar en continuo aprendizaje.  </p>
                <p>Recientemente he finalizado una capacitación en Node JS - <br /> JavaScript - React Redux, y actualmente me interesaría seguir<br /> desarrollandome en dichas tecnologias, sobre la base de mi<br /> carrera informática adquirida.</p>
                <p>   Altamente comprometido con los proyectos y el trabajo en equipo. </p>

                <p>
                    <h3>Skills</h3>
                </p>
                {/* <img src={skills} width="750px"></img> */}
                <p>
                    <SkillsBar />
                </p>
            </div>
            <div className={s.hijo2}> <img src={foto} alt="nn" width="512px" /></div>
       


        </div>
    )
}