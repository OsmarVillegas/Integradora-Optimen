/*
  Autor: Osmar Israel Villegas Martínez
*/

/* Importa los componentes que se utilizaran para la vista de la pantalla VistaAdmin*/
import React from "react";
import {MenuCreador} from "../../componentes/VistaCreador/VistaCreadorComponent"
import {HeaderAdmin} from "../../componentes/VistaAdmin/Reusable/Header"

/* Se imprime el contenido de la pantalla News y se ordena la presentación de los elementos*/
class VistaCreador extends React.Component {
    render(){
        return (
            <div className="VistaCreador">
                < HeaderAdmin signOut={true} link="/login" titulo="Menú Creador" />
                < MenuCreador />
            </div>
        )
    }
}

export default VistaCreador;