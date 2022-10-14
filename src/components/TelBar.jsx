import React from "react";
import {BsPhone} from 'react-icons/bs';
import s from "./TelBar.module.css";


export default function TelBar() {
    return (

        <div className={s.sub_div}>
            <div><BsPhone className={s.iconitos} size="30px" /><span>54.11.5769.6527</span></div>
                  

        </div>
    )
}