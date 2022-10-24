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
                    
                Te cuento que me gusta mucho la tecnología y la programación, y esto me obliga a estar en continuo aprendizaje.
                    Recientemente he finalizado una capacitación en Node JS - JavaScript - React - Redux, y  me interesaría seguir
                     desarrollándome en dichas tecnologías, sobre la base de mi carrera informática adquirida.</div>
                     <div className={s.title2}>
                     Tengo experiencia en desarrollo de sistemas, como así tambíen en otras industrias. 

                    Soy una persona que se compromete con los proyectos aportando mucha dedicación e ideas. Me gusta el trabajo en equipo y lo creo necesario para que los proyectos se lleven a cabo.
                </div>

                <div className={s.title2}>
                     Te dejo mas info <a href="https://drive.google.com/file/d/1vgGQ2iw3V1CQ1-LOYzqBvdbB6wO_Otam/view?usp=sharing" target="_blank" >acá</a>
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