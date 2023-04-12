import React from "react";
import { Link } from "react-router-dom";
import "../../../estilos/Back/header.css";
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export function HeaderAdmin(props) {
  const cerrarSesion = () => {
    cookies.remove('rol', {path:"/"});
    cookies.remove('token', {path:"/"});
  }

  return (
    <header className="HeaderAdmin-header">
      <Link to={props.link}>
        {props.signOut === true ? (
          <i class="fa-solid fa-right-from-bracket HeaderAdmin-back" onClick={ () => cerrarSesion() }></i>
        ) : (
          <i class="fa-sharp fa-regular fa-circle-left HeaderAdmin-return" />
        )}
      </Link>
      <h3 className="HeaderAdmin-Titulo">{props.titulo}</h3>
    </header>
  );
}
