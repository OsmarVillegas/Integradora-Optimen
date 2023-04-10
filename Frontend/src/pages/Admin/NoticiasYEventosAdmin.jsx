/*
  Autor: Osmar Israel Villegas Martínez
*/

/* Importa los componentes que se utilizaran para la vista de la pantalla Eventos y Noticias del creador */
import React from "react"
import {NoticiasForm, EventosForm} from "../../componentes/Back/NewForm";
import {HeaderAdmin} from "../../componentes/VistaAdmin/Reusable/Header"

/* Se imprime el contenido de la pantalla Eventos y Noticias del creador lider, ordena la presentación de los elementos*/
class NoticiasYEventosAdmin extends React.Component {
    render(){
        return (
            <div className="NoticiasYEventos">
                <HeaderAdmin signOut={false} link="/Admin/Vista" titulo="Vista Administrador" />
                <NoticiasForm />
                <EventosForm />
            </div>
        )
    }
}

export default NoticiasYEventosAdmin;