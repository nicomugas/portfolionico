import React from "react";
import BotonHome from "./BotonHome";
import s from "./Home.module.css";
import ContactBar from "./ContactBar";

export default function Home() {



    return (
        <div className={s.container}>

            <div className={s.contenido}>
                <div className={s.nombre}>NICOLÁS </div>
                <div className={s.apellido}>MUGAS</div>
                <div className={s.que}>F u l l &nbsp;  S t a c k &nbsp;  D e v e l o p e r</div>
                <div className={s.que}>A n a l i s t a  &nbsp; d e&nbsp;   S i s t e m a s</div>
                <div ><BotonHome /> </div>
            </div>

            <div><ContactBar /></div>

        </div>
    )
}