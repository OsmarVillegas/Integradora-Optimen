import React, { useState, useEffect } from "react";
import "../../estilos/Pagina/pagina.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export function PaginaVista() {
  const [leng, setLeng] = useState({});

  const Idioma = () => {
    setLeng(!leng);
  };

  return (
    <div className="PaginaVista">
      <div className="PaginaVista-Contenido-Imagen">
        <img
          className="PaginaVista-Imagen"
          src={cookies.get("img")}
          alt={cookies.get("nameNoticiaEsp")}
        />
      </div>
      <div className="PaginaVista-Contenido">
        <div className="PaginaVista-Contenido-texto">
          <h1 className="PaginaVista-Contenido-nameNoticia">
            {leng
              ? cookies.get("nameNoticiaEng")
              : cookies.get("nameNoticiaEsp")}
          </h1>
          <p className="PaginaVista-Contenido-contenido">
            {leng ? cookies.get("contenidoEsp") : cookies.get("contenidoEng")}
          </p>
        </div>
        <p className="PaginaVista-Contenido-fecha">
          {new Date(cookies.get("fechaCreacion")).toDateString()}
        </p>
        <button className="btn btn-success" onClick={() => Idioma()} style={{fontSize:"1em"}}>
          {leng ? "Español" : "English"}
        </button>
      </div>
    </div>
  );
}
