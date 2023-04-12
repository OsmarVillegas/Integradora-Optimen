/*
  Autor: Osmar Israel Villegas Martínez
*/

/* Importa los componentes que se utilizaran para la vista de la pantalla Usuarios del administrador */
import React from "react"
import {FormularioUsuariosAdmin} from "../../componentes/VistaAdmin/UsuariosAdmin"
import {HeaderAdmin} from "../../componentes/VistaAdmin/Reusable/Header"

/* Se imprime el contenido de la pantalla Usuarios del administrador, ordena la presentación de los elementos*/
class UsuariosAdmin extends React.Component {
    render(){
        return (
            <div className="NoticiasYEventos">
                <HeaderAdmin signOut={false} link="/Admin/Vista" titulo="Vista Administrador" />
                <FormularioUsuariosAdmin />
            </div>
        )
    }
}

export default UsuariosAdmin;