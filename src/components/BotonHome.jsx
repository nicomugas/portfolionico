import React from "react";
import { Link } from "react-router-dom";
import s from "./BotonHome.module.css";


export default function BotonHome (){

    return (
        <div className={s.FlexContainerdiv}>
      
            <div className={s.flexhijo}><Link to="/About">Sobre mí</Link></div>
            <div className={s.flexhijo}><Link to="/Portfolio">Portfolio</Link></div>
            
       
        </div>
    
    )
}