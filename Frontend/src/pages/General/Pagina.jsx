/*
  Autor: Osmar Israel Villegas Martínez
*/

/* Importa los componentes que se utilizaran para la vista de la pantalla News*/
import React from "react";
import {PaginaVista} from "../../componentes/Pagina/PaginaVistaComponent";
import {Navbar, Footer} from '../../componentes/Home/headerAndNavbar';

/* Se imprime el contenido de la pantalla News y se ordena la presentación de los elementos*/
class Pagina extends React.Component {
    render(){
        return (
            <div className="New">
                < Navbar />
                    <PaginaVista />
                < Footer />
            </div>
        )
    }
}

export default Pagina;