import React from "react";
import s from './SkillsBar.module.css';
import {SiJavascript, SiTypescript,SiReact, SiRedux, SiHtml5 ,SiCss3, SiMysql, SiPostgresql,SiGithub, SiVisualstudiocode, SiExpress, SiSequelize} from 'react-icons/si';
import {FaNode} from 'react-icons/fa';

export default function SkillsBar () {


    return (

        <div className={s.sub_div}>
        <div>
            <SiJavascript className={s.iconitos} size="25px" />
            <SiTypescript className={s.iconitos} size="25px" />
            <FaNode className={s.iconitos} size="25px" />
            <SiReact className={s.iconitos} size="25px" />
            <SiRedux className={s.iconitos} size="25px" />
            <SiHtml5 className={s.iconitos} size="25px" />
            <SiCss3 className={s.iconitos} size="25px" />
            <SiMysql className={s.iconitos} size="25px" />
            <SiPostgresql className={s.iconitos} size="25px" />
            <SiGithub className={s.iconitos} size="25px" />
            <SiVisualstudiocode className={s.iconitos} size="25px" />
            <SiExpress className={s.iconitos} size="25px" />
            <SiSequelize className={s.iconitos} size="25px" />

            

            
            
            
          
        </div>
       

    </div>
    )


}