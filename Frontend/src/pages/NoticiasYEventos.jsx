/*
  Autor: Osmar Israel Villegas Martínez
*/

/* Importa los componentes que se utilizaran para la vista de la pantalla Eventos y Noticias del creador lider */
import React from "react";
import {NoticiasForm, EventosForm} from "../componentes/Back/NewForm";

/* Se imprime el contenido de la pantalla Eventos y Noticias del creador lider, ordena la presentación de los elementos*/
class NoticiasYEventos extends React.Component {
    render(){
        return (
            <div className="NoticiasYEventos">
                <NoticiasForm />
                <EventosForm />
            </div>
        )
    }
}

export default NoticiasYEventos;