import React from "react";
import { Link } from 'react-router-dom';
import s from "./Navbar.module.css";
import {BsPhone} from 'react-icons/bs'
import TelBar from "./TelBar";

export default function Navbar() {


    return (
        <div className={s.nav}>
            <ul className={s.menu}>
            <li ><Link to="/">Home</Link> </li>
                <li ><Link to="/About">Sobre Mi</Link> </li>
                <li  ><Link to="/Portfolio">Portfolio</Link></li>
                <li ><Link to="Contacto">Contacto</Link></li>               
            </ul>
            <TelBar/>

        </div>

    )

}