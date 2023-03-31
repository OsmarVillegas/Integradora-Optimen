import React, { useState, useEffect } from "react";
import "../../estilos/News/News.css"; // Importa los estilos CSS de la sección de noticias
import axios from 'axios'; // Importa la librería Axios para realizar peticiones HTTP
import "../../estilos/News/header.css"; // Importa los estilos CSS del encabezado de la sección de noticias
import { FormattedMessage } from "react-intl"; // Importa la función FormattedMessage de la librería react-intl

function News() {
  // Declara un estado local para almacenar las noticias
  const [noticias, setNoticias] = useState([]);

  // Realiza una petición GET al servidor para obtener las noticias
  useEffect(() => {
    const getNoticias = async () => {
      const response = await axios.get('http://localhost:4000/api/noticias');
      setNoticias(response.data);
    };
    getNoticias();
  }, [noticias]);

  // Declara un estado local para controlar la visibilidad de la traducción de las noticias
  const [showTranslation, setShowTranslation] = useState(false);

  // Función que cambia el estado de la visibilidad de la traducción
  const toggleTranslation = () => setShowTranslation(!showTranslation);

  // Retorna la estructura de la sección de noticias
  return (
    <div className="Header"> 
      <div className="header-contenido"> 
        <img className="header-image" src={require("../../imagenes/avion.jpg")} alt="Imagen principal de un avión" /> 
        <h1 className="header-titulo">
          <FormattedMessage // Utiliza la función FormattedMessage para obtener el título de la sección de noticias desde un archivo JSON de traducción
            id="app.News"
            defaultMessage="News"
          />
        </h1>
      </div>
      
      {noticias.map((noticia) => ( /* Itera sobre el arreglo de noticias y muestra cada una */

        /* Crea un contenedor para cada noticia */
        <div key={noticia.id} className="contenedor-testimonio" > 
        
          {/* Muestra el nombre de la noticia */}
          <p className="nombre-testimonio">{noticia.nameNoticias}</p>
          
          {/* Muestra la fecha de creación de la noticia */}
          <p className="cargo-testimonio">{noticia.fechCreacion}</p> 
          
          {/* Muestra el contenido de la noticia en español o inglés dependiendo de la visibilidad de la traducción */}
          <p className="texto-testimonio">{showTranslation ? noticia.contenidoEsp : noticia.contenidoEng}</p> 
          
          {/* Muestra la imagen de la noticia */}
          <img className="imagen-testimonio" src={noticia.img} alt="Optimen" /> 

          {/* Muestra un botón para cambiar la visibilidad de la traducción */}
          <button className="ver-traduccion" onClick={toggleTranslation}>{showTranslation ? 'Ver en inglés' : 'Ver en español'}</button> 
        </div>
      ))}
    </div>
  );
}

export default News; // Exporta el componente News para ser utilizado en otros componentes

// Autor: Mario Alberto Rangel Márquez
//GDS0451