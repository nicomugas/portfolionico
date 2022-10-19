import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import {BsFullscreen} from 'react-icons/bs';
import {CgMail} from 'react-icons/cg';
import s from './ContactBar.module.css';



export default function ContactBar() {

    return (
        <div className={s.sub_div}>
            <div>
                <a href="https://www.linkedin.com/in/nico-mugas-ok/" target="_blank"><AiFillLinkedin className={s.iconitos} size="25px" /></a>
                <a href="https://github.com/nicomugas" target="_blank"><AiFillGithub className={s.iconitos}  size="25px" /></a>
                <a href="mailto:nicomugas@gmail.com" target="_blank"><CgMail className={s.iconitos}  size="25px"/></a>
                <a href="https://web.whatsapp.com/send?phone=541157696527" target="_blank"><AiOutlineWhatsApp className={s.iconitos}  size="25px"/></a>
                {/* <BsFullscreen className={s.fullscreen}  size="30px"/> */}
            </div>
           

        </div>



    )
}