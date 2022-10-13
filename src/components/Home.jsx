import React from "react";
import s from "./Home.module.css";
import skills from "./img/skills.gif"

export default function Home() {



    return (
        <div className={s.container}>
            <div className={s.hijo}>
                <p><h3>SOBRE MI</h3></p>
                <p><h2>Hola soy Nico Mugas</h2></p>
                <p>ANALISTA DE SISTEMAS || FULL STACK WEB DEVELOPER</p>
                <p>Me gusta mucho la tecnología, y estar en continuo aprendizaje.  </p>
                <p>Recientemente he finalizado una capacitación en Node JS - JavaScript - React Redux, y actualmente me interesaría seguir desarrollandome en dichas tecnologias, sobre la base de mi carrera informática adquirida.
                    Altamente comprometido con los proyectos y el trabajo en equipo. </p>
                
                <h3>Skills</h3>
                <img src={skills} width="750px"></img>
            </div>


        </div>
    )
}