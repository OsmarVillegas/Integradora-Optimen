/*
  Autor: Osmar Israel Villegas Martínez
*/

/* Importa los componentes que se utilizaran para la vista de la pantalla VistaAdmin*/
import React from "react"
import {MenuAdmin} from "../../componentes/VistaAdmin/VistaAdminComponent"
import {HeaderAdmin} from "../../componentes/VistaAdmin/Reusable/Header"

/* Se imprime el contenido de la pantalla News y se ordena la presentación de los elementos*/
class VistaAdmin extends React.Component {
    render(){
        return (
            <div className="VistaAdmin">
                < HeaderAdmin signOut={true} link="/login" titulo="Menú Administrador" />
                < MenuAdmin />
            </div>
        )
    }
}

export default VistaAdmin;