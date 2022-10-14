import React from "react";
import BotonHome from "./BotonHome";
import s from "./Home.module.css";
import ContactBar from "./ContactBar";

export default function Home() {



    return (
        <div className={s.container}>

            <div className={s.main_left_container}>
                <h3>NICOLÁS </h3>
                <h1 className={s.titleApp}>MUGAS</h1>
                <h2>F u l l &nbsp;  S t a c k &nbsp;  D e v e l o p e r</h2>
                <h2>A n a l i s t a  &nbsp; d e&nbsp;   S i s t e m a s</h2>
                <div><BotonHome /> </div>
                
               




            </div>
            <div><ContactBar/></div>    

        </div>
    )
}