/*
  Autor: Osmar Israel Villegas Martínez
*/

/* Importa los componentes que se utilizaran para la vista de la pantalla Contact Us*/
import React from "react";
import Contactos from "../componentes/Contact/Contactos.jsx";
import {Navbar, Footer} from '../componentes/Home/headerAndNavbar';

/* Se imprime el contenido de la pantalla Contact Us y se ordena la presentación de los elementos*/
class ContactUs extends React.Component {
    render(){
        return (
            <div className="Contactos">
                < Navbar />
                <Contactos />
                < Footer />
            </div>
        )
    }
}

export default ContactUs;