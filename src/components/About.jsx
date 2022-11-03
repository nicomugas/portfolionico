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
                <div className={s.title2}>
                    
                Full Stack Developer, desarrollador Front end y Back end. Poseo experiencia trabajando en desarrollos API
REST utilizando tecnologías como Javascript, TypeScript, NodeJS, React, Redux, SQL entre otras.
Experiencia en la creación de Ecommerce y también liderando proyectos con personas a cargo. Me
considero creativo, resolutivo y siempre comprometido con los proyectos desde el trabajo y el aporte de
ideas. Amplia experiencia en administración de empresas. Me interesaría seguir desarrollándome en las
tecnologías mencionadas, sobre la base de mi carrera informática adquirida.</div>
                     <div className={s.title2}>
                     Tengo experiencia en desarrollo de sistemas, como así tambíen en otras industrias. 

                    Soy una persona que se compromete con los proyectos aportando mucha dedicación e ideas. Me gusta el trabajo en equipo y lo creo necesario para que los proyectos se lleven a cabo.
                </div>

                <div className={s.title2}>
                     Te dejo mas info en mi CV, descargalo <a href="https://drive.google.com/file/d/1uQaM95kv_5HLEHxz5oxW51T_hdhz6T46/view?usp=share_link" target="_blank" >acá</a>.
                </div>

                <div><h3>Skills</h3></div>

                <div>
                    <SkillsBar />
                </div>
            </div>
            {/* <div className={s.hijo2}> <img src={foto} alt="nn" width="400px" /></div> */}



        </div>
    )
}