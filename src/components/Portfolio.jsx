
import React from "react";
import s from "./Portfolio.module.css";
import Clima from "./trabajos/Clima";
import Dogs from "./trabajos/Dogs";
import Ecommerce from "./trabajos/Ecommerce";

export default function Portfolio() {


    return (
        <div className={s.container}>
            <div className={s.hijo}>
            <h1>PORTFOLIO</h1>
                <div className={s.trabajos}><Dogs/> </div>    
                <div className={s.trabajos}><Ecommerce/> </div>    
                <div className={s.trabajos}><Clima/> </div>            

                

            </div>
        </div>
    )
}