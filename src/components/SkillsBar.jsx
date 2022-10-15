import React from "react";
import s from './SkillsBar.module.css';
import {SiJavascript, SiTypescript,SiReact, SiRedux, SiHtml5 ,SiCss3, SiMysql, SiPostgresql,SiGithub, SiVisualstudiocode, SiExpress, SiSequelize} from 'react-icons/si';
import {FaNode} from 'react-icons/fa';

export default function SkillsBar () {


    return (

        <div className={s.sub_div}>
        <div>
            <SiJavascript className={s.iconitos} size="50px" />
            <SiTypescript className={s.iconitos} size="50px" />
            <FaNode className={s.iconitos} size="50px" />
            <SiReact className={s.iconitos} size="50px" />
            <SiRedux className={s.iconitos} size="50px" />
            <SiHtml5 className={s.iconitos} size="50px" />
            <SiCss3 className={s.iconitos} size="50px" />
            <SiMysql className={s.iconitos} size="50px" />
            <SiPostgresql className={s.iconitos} size="50px" />
            <SiGithub className={s.iconitos} size="50px" />
            <SiVisualstudiocode className={s.iconitos} size="50px" />
            <SiExpress className={s.iconitos} size="50px" />
            <SiSequelize className={s.iconitos} size="50px" />

            

            
            
            
          
        </div>
       

    </div>
    )


}