import React from "react";
import s from "./Clima.module.css";
import {IoLogoChrome, IoLogoGithub} from "react-icons/io"


export default function Clima() {

    return (

        <div className={s.container}>
            <p className={s.title}>WEATHER </p>

            <div className={s.content}>

                <p> APP de prueba.Se consume API api.openweathermap.org. Validacion de formulario de contacto.
Estilos oon CSS modules</p>
                <p>
                    La misma permite:
                    <ul>
                        <li>Buscar Ciudad </li>
                        <li>Mostrar Card con datos de la ciudad</li>
                        <li>Mostrar detalle con mas info del clima. </li>
                    </ul>
                </p>
                <p className={s.tecnologias}>
                    Tecnologias utilizadas:
                    JavaScript | React | Css Modules
                </p>

                <p>
                   

                    {/* <a href="https://pi-dogs-rose.vercel.app/" target="_blank"><IoLogoChrome className={s.iconitos} size="40px" /></a> */}
                    <a href="https://github.com/nicomugas/PI-DOGS" target="_blank"><IoLogoGithub className={s.iconitos} size="40px" /></a>

                </p>
            </div>
        </div>

    )
}




