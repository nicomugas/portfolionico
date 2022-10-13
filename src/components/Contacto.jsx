import React from "react";
import s from "./Contacto.module.css";
import linkedin from "./img/linkedin.png";
import git from "./img/github.png";
import whats from "./img/whatsapp.jpg";
import gmail from "./img/gmail.png"


export default function Contacto() {

    return (
        <div className={s.container}>
            <div className={s.hijo}>
                <h2>Contactame</h2>
                <p>
                    <a href="https://www.linkedin.com/in/nico-mugas-ok/" ><img src={linkedin} width="100px" /></a>
                    <a href="https://github.com/nicomugas"><img src={git} width="100px" /></a>
                    <a href="https://web.whatsapp.com/send?phone=541157696527" ><img src={whats} width="100px" /></a>
                    <a href="mailto:nicomugas@gmail.com" ><img src={gmail} width="100px" /></a>
                </p>
                

            </div>
        </div>
    )
}