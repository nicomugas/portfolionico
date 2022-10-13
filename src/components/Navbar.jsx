import React from "react";
import { Link } from 'react-router-dom';
import s from "./Navbar.module.css"

export default function Navbar() {


    return (
        <div className={s.nav}>
            <ul className={s.menu}>
                <li class="current"><Link to="/">Sobre Mi</Link> </li>
                <li class=""><Link to="/Portfolio">Portfolio</Link></li>
                <li class=""><Link to="Contacto">Contacto</Link></li>
            </ul>

        </div>

    )

}