import React, { useState, useContext } from "react"; // Importación de los hooks useState y useContext de React
import "../../estilos/Home/headerAndNavbar.css"; // Importación del archivo CSS que contiene los estilos del componente
import { Link } from "react-router-dom"; // Importación del componente Link de react-router-dom para manejar la navegación entre páginas
import { langContext } from '../../context/langContext' // Importación del contexto langContext que contiene el estado del lenguaje seleccionado
import { FormattedMessage } from "react-intl"; // Importación del componente FormattedMessage de la librería react-intl
import Cookies from "universal-cookie";

const cookies = new Cookies();

// Definición del componente Navbar
export function Navbar() {
  const [active, setActive] = useState("nav__menu"); // Estado para manejar la visibilidad de los links de navegación
  const [icon, setIcon] = useState("nav__toggler"); // Estado para manejar la visibilidad del botón de menú
  const navToggle = () => {
    // Función que se ejecuta al hacer clic en el botón de menú
    if (active === "nav__menu") {
      setActive("nav__menu nav__active"); // Si el menú está cerrado, lo abre
    } else setActive("nav__menu"); // Si el menú está abierto, lo cierra

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle"); // Si el menú está cerrado, cambia el ícono a la "X"
    } else setIcon("nav__toggler"); // Si el menú está abierto, cambia el ícono a las tres barras
  };

  return (
    // Estructura HTML del componente Navbar
    <nav className="nav">
      {/* Logo de la empresa */}
      <a className="nav__brand cursor">
        <img
          src={require("../../imagenes/logos/logo-optimen.png")}
          alt="Logo de la empresa"
          href="#"
        />
      </a>
      {/* Lista de elementos de la barra de navegación */}
      <ul className={active} style={{margin:"0"}}>
        {/* Elemento "Home" */}
        <li className="nav__item">
          <Link to="/Home" className="nav__link">
            <FormattedMessage
              id="app.NH"
              defaultMessage="Home"
            />
          </Link>
        </li>
        {/* Elemento "Customers" */}
        <li className="nav__item">
          <Link to="/Customers" className="nav__link">
            <FormattedMessage
              id="app.NC"
              defaultMessage="Customers"
            />
          </Link>
        </li>
        {/* Elemento "About us" */}
        <li className="nav__item">
          <Link to="/About-Us" className="nav__link">
            <FormattedMessage
              id="app.NA"
              defaultMessage="About us"
            />
          </Link>
        </li>
        {/* Elemento "News" */}
        <li className="nav__item">
          <Link to="/News" className="nav__link">
            <FormattedMessage
              id="app.NE"
              defaultMessage="News"
            />
          </Link>
        </li>
        {/* Elemento "Contact us" */}
        <li className="nav__item">
          <Link to="/Contact-Us" className="nav__link">
            <FormattedMessage
              id="app.NCU"
              defaultMessage="Contact us"
            />
          </Link>
        </li>
      </ul>
      {/* Botón para abrir/cerrar la barra de navegación en dispositivos móviles */}
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
  }  

export function Footer() {
  const idioma = useContext(langContext);

  // Estado para controlar la visibilidad de los botones desplegables
  const [mostrarBotones, setMostrarBotones] = useState(false);

  // Función para cambiar el estado de los botones desplegables
  const toggleBotones = () => {
    setMostrarBotones(!mostrarBotones);
  };


  return (
    <footer>
      <p1>Optimen</p1>
      <p>info@mysite.com</p>
      <p>&copy;2023 por Optimen. </p>

      {/* Botón flotante */}
      <button className="boton-flotante" onClick={toggleBotones}>
      <i class="fa-solid fa-language"></i>
      </button>

      {/* Botones desplegables */}
      {mostrarBotones && (
        <div className="botones-desplegables">
          <button onClick={() => {idioma.establecerLenguaje("es-MX");}}>
            <span className="tras">es</span>
          </button>
          <button onClick={() => {idioma.establecerLenguaje("en-US");}}>
            <span className="tras">en</span>
          </button>
        </div>
      )}
    </footer>
  );
}

// Autor: Mario Alberto Rangel Márquez
//GDS0451