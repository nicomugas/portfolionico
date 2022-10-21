import React from "react";
import s from "./Ecommerce.module.css";
import {IoLogoChrome, IoLogoGithub, IoLogoYoutube} from "react-icons/io"


export default function Ecommerce() {

    return (

        <div className={s.container}>
            <p className={s.title}>ECOMMERCE</p>

            <div className={s.content}>

                <p> Trabajo Grupal para finalizacion Cursada Henry.
Muestra los productos provenientes de base de datos, pudiendo aplicar filtros, ordenamientos y  acceder a su detalle. (realizado en backend)
Login, registro, olvide mi contraseña, login con google. 
Carrito de Compras, en Base de Datos y Local Storage. 
Posibilidad de pagar con Mercado Pago. 
Administrador del Cliente y Backoffice del administrador (ver las compras realizadas, actualizar datos, hacer reviews de productos, administracion de productos y categorias)</p>
                <p className={s.tecnologias}>
                    Tecnologias utilizadas
                    
                        FRONT: React | Redux | Typescript | styled components  
                        BACK: Express | Typescript Extrict Mode | Prisma | Postgres Sql  
                        LOGIN: Passport | JWT 
                        PAGOS: MercadoPago 
                       

       
                </p>
            

                <p>
                   

                    <a href="https://compustore-ecomerce-henry.vercel.app/home" target="_blank"><IoLogoChrome className={s.iconitos} size="40px" /></a>
                    <a href="https://github.com/AlejandroBalonga/PG-Henry-PT06-01" target="_blank"><IoLogoGithub className={s.iconitos} size="40px" /></a>
                    <a href="https://www.youtube.com/watch?v=ceMT5PM-H6w" target="_blank"><IoLogoYoutube className={s.iconitos} size="40px" /></a>

                    
                </p>
            </div>
        </div>

    )
}




