
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import s from "./Contacto.module.css";
import ContactBar from "./ContactBar";
//const nodemailer = require("nodemailer");



export default function Conctacto() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_serivicio', 'template_dbzgwcp', form.current, 'E9WpeF3BifsqqLxss')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("mensaje enviado")
          e.target.result.value="hola";
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className={s.container}>
            <div className={s.contenido}>
               
                <div className={s.title}>CONTACTAME</div>
                

                <div>
                <form ref={form} onSubmit={sendEmail}>
                        <input placeholder="Nombre..." type="text" name="user_name"/>
                        <input placeholder="Email..." type="email" name="user_email"/>
                        <textarea placeholder="Mensaje..." name="message"/>
                        <input  type="submit"  className={s.button} value="Enviar"/>
                        <label name="result"></label>

                    </form>
                </div>             
                <div className={s.contactbar}><ContactBar/></div>   
            </div>
        </div>
    )
}
