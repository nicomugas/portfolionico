import React from "react";
import s from "./About.module.css";
import SkillsBar from "./SkillsBar";
import foto from "./img/foto.png"

export default function About() {



    return (
        <div className={s.container}>
            <div className={s.contenido}>
                <div className={s.title}>SOBRE MI</div>
                <div className={s.mail}>nicomugas@gmail.com</div>
                
                <div className={s.saludo}>Hola soy Nico Mugas</div>
                <div className={s.title2}>ANALISTA DE SISTEMAS || FULL STACK WEB DEVELOPER</div>
                <div className={s.title2}>Me gusta mucho la tecnología, y estar en continuo aprendizaje. 
                Recientemente he finalizado una capacitación en Node JS - <br /> JavaScript - React Redux, y actualmente me interesaría seguir<br /> desarrollandome en dichas tecnologias, sobre la base de mi<br /> carrera informática adquirida.
                Altamente comprometido con los proyectos y el trabajo en equipo. </div>

                <div><h3>Skills</h3></div>
               
                <div>
                    <SkillsBar />
                </div>
            </div>
             <div className={s.hijo2}> <img src={foto} alt="nn" width="400px" /></div> 
       


        </div>
    )
}