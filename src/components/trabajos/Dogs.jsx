import React from "react";
import s from "./Dogs.module.css";
import {IoLogoChrome, IoLogoGithub} from "react-icons/io"


export default function Dogs() {

    return (

        <div className={s.container}>
            <p className={s.title}>DOGS</p>

            <div className={s.content}>

                <p> Aplicación SPA en la cual se pueder ver distintas razas de perro junto con información relevante de las mismas utilizando la api externa (https://thedogapi.com) .</p>
                <p>
                    La misma permite:
                    <ul>
                        <li>Buscar razas </li>
                        <li>Filtrarlos / Ordenarlos</li>
                        <li> Agregar nuevos perros que se guardan en Base de datos. </li>
                    </ul>
                </p>
                <p className={s.tecnologias}>
                    Tecnologias utilizadas:
                    React | Redux | Express | Sequelize | Postgres Sql | Css Modules
                </p>

                <p>
                   

                    <a href="https://pi-dogs-rose.vercel.app/" target="_blank"><IoLogoChrome className={s.iconitos} size="40px" /></a>
                    <a href="https://github.com/nicomugas/PI-DOGS" target="_blank"><IoLogoGithub className={s.iconitos} size="40px" /></a>

                </p>
            </div>
        </div>

    )
}




