/*
  Autor: Osmar Israel Villegas Martínez
*/

/* Importa los componentes que se utilizaran para la vista de la pantalla News*/
import React from "react";
import News from "../../componentes/News/News.jsx";
import {Navbar, Footer} from '../../componentes/Home/headerAndNavbar';

/* Se imprime el contenido de la pantalla News y se ordena la presentación de los elementos*/
class New extends React.Component {
    render(){
        return (
            <div className="New">
                < Navbar />
                    <News />
                < Footer />
            </div>
        )
    }
}

export default New;