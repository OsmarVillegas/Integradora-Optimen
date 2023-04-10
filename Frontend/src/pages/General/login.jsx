/*
  Autor: Osmar Israel Villegas Martínez
*/

/* Importa los componentes que se utilizaran para la vista de la pantalla Login*/
import React from "react";
import { Login } from "../../componentes/Login/loginComponent";
import { Navbar, Footer} from '../../componentes/Home/headerAndNavbar';

/* Se imprime el contenido de la pantalla Home y se ordena la presentación de los elementos*/
class LogIn extends React.Component {
    render(){
        return (
            <div className="LogIn">
                < Navbar />
                    <Login />
                < Footer />
            </div>
        )
    }
}

export default LogIn;