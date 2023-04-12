import React, { useState, useEffect } from "react";
import "../../estilos/News/News.css"; // Importa los estilos CSS de la sección de noticias
import "../../estilos/News/header.css"; // Importa los estilos CSS del encabezado de la sección de noticias
import { FormattedMessage } from "react-intl"; // Importa la función FormattedMessage de la librería react-intl
import { useFetch } from "../Back/useFetch";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function NewsNoticia() {
  // Declara un estado local para controlar la visibilidad de la traducción de las noticias
  const [showTranslation, setShowTranslation] = useState(false);

  // Función que cambia el estado de la visibilidad de la traducción
  const toggleTranslation = () => setShowTranslation(!showTranslation);

  // Declara un estado local para almacenar las noticias
  const { data } = useFetch("api/noticias");

  // Retorna la estructura de la sección de noticias
  const seleccionarNoticia = (val) => {
    cookies.set("nameNoticiaEsp", val.nameNoticiasEsp, { path: "/" });
    cookies.set("nameNoticiaEng", val.nameNoticiasEng, { path: "/" });
    cookies.set("fechaCreacion", val.createdAt, { path: "/" });
    cookies.set("contenidoEsp", val.contenidoEsp, { path: "/" });
    cookies.set("contenidoEng", val.contenidoEng, { path: "/" });
    cookies.set("img", val.img, { path: "/" });
    cookies.set("evento", false, { path: "/" });
    
    window.location.href = "/PaginaVista";
  }

  return (
    <div>
      {data.map(
        (
          noticia /* Itera sobre el arreglo de noticias y muestra cada una */
        ) => (
          /* Crea un contenedor para cada noticia */
          <div key={noticia.id} className="contenedor-testimonio" onClick={() => seleccionarNoticia(noticia)}>
            {/* Muestra el nombre de la noticia */}
            <p className="nombre-testimonio">
              {showTranslation
                ? noticia.nameNoticiasEsp
                : noticia.nameNoticiasEng}
            </p>

            {/* Muestra la fecha de creación de la noticia */}
            <p className="cargo-testimonio">
              {new Date(noticia.createdAt).toDateString()}
            </p>

            {/* Muestra el contenido de la noticia en español o inglés dependiendo de la visibilidad de la traducción */}
            <p className="texto-testimonio">
              {showTranslation ? noticia.contenidoEsp : noticia.contenidoEng}
            </p>

            {/* Muestra la imagen de la noticia */}
            <img
              className="imagen-testimonio"
              src={noticia.img}
              alt="Optimen"
            />

            {/* Muestra un botón para cambiar la visibilidad de la traducción */}
            <button className="ver-traduccion" onClick={toggleTranslation}>
              {showTranslation ? "Ver en inglés" : "Ver en español"}
            </button>
          </div>
        )
      )}
    </div>
  );
}

function NewsEventos() {
  // Declara un estado local para controlar la visibilidad de la traducción de las noticias
  const [showTranslation, setShowTranslation] = useState(false);

  // Función que cambia el estado de la visibilidad de la traducción
  const toggleTranslation = () => setShowTranslation(!showTranslation);

  // Declara un estado local para almacenar las noticias
  const { data } = useFetch("api/eventos");

  const seleccionarEvento = (val) => {
    cookies.set("nameNoticiaEsp", val.nameEventoEsp, { path: "/" });
    cookies.set("nameNoticiaEng", val.nameEventoEng, { path: "/" });
    cookies.set("fechaFin", val.fechaFin, { path: "/" });
    cookies.set("fechaInicio", val.fechaInicio, { path: "/" });
    cookies.set("contenidoEsp", val.contenidoEsp, { path: "/" });
    cookies.set("contenidoEng", val.contenidoEng, { path: "/" });
    cookies.set("img", val.img, { path: "/" });
    cookies.set("evento", true, { path: "/" });

    window.location.href = "/PaginaVista";
  }

  // Retorna la estructura de la sección de noticias
  return (
    <div className="NewsEventos-Eventos">
      {data.map(
        (
          evento /* Itera sobre el arreglo de noticias y muestra cada una */
        ) => (
          /* Crea un contenedor para cada noticia */
          <div key={evento.id} className="contenedor-testimonio" onClick={() => {seleccionarEvento(evento)}}>
            {/* Muestra el nombre de la noticia */}
            <p className="nombre-testimonio">
              {showTranslation ? evento.nameEventoEsp : evento.nameEventoEng}
            </p>

            {/* Muestra la fecha de creación de la noticia */}
            <p className="cargo-testimonio">
              {new Date(evento.createdAt).toDateString()}
            </p>

            {/* Muestra el contenido de la noticia en español o inglés dependiendo de la visibilidad de la traducción */}
            <p className="texto-testimonio">
              {showTranslation ? evento.contenidoEsp : evento.contenidoEng}
            </p>

            {/* Muestra la imagen de la noticia */}
            <img
              className="imagen-testimonio"
              src={evento.img}
              alt="Optimen"
            />

            {/* Muestra un botón para cambiar la visibilidad de la traducción */}
            <button className="ver-traduccion" onClick={toggleTranslation}>
              {showTranslation ? "Ver en inglés" : "Ver en español"}
            </button>
          </div>
        )
      )}
    </div>
  );
}

function News() {
  const { data } = useFetch("api/eventos");

  return (
    <div className="Header">
      <div className="header-contenido">
        <img
          className="header-image"
          src={require("../../imagenes/avion.jpg")}
          alt="Imagen principal de un avión"
        />
        <h1 className="header-titulo">
          <FormattedMessage // Utiliza la función FormattedMessage para obtener el título de la sección de noticias desde un archivo JSON de traducción
            id="app.News"
            defaultMessage="News"
          />
        </h1>
      </div>

      <div className="News-contenido">

        <h1 className="text-center mt-5 News-contenido-titulo">Noticias</h1>
        <NewsNoticia />


        <h1 className="text-center mt-5 News-contenido-titulo">Eventos</h1>
        <NewsEventos />

      </div>
    </div>
  );
}

export default News; // Exporta el componente News para ser utilizado en otros componentes

// Autor: Mario Alberto Rangel Márquez
//GDS0451
