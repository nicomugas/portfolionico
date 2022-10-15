import React from "react";
import s from "./Contacto.module.css";
import ContactBar from "./ContactBar"


export default function Contacto() {

    return (
        <div className={s.container}>
            <div className={s.hijo}>
                <h1>Contactame</h1>
                <div className={s.contactbar}><ContactBar/></div>                

            </div>
        </div>
    )
}