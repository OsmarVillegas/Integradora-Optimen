/* Autor: Osmar Israel Villegas Martínez */

/* Se importan los estilos de cada elemento, se importa el archivo json colab para utilizarse en la generación de los elementos en el componente colaboradores
y se importa la etiqueta Link de la libreria react-router-dom. */
import React, { useState, useEffect } from "react";
import "../../estilos/Home/header.css";
import "../../estilos/Home/caracteristicas.css";
import "../../estilos/Home/services.css";
import "../../estilos/Home/NewsAndUpdate.css";
import "../../estilos/Home/colaboradores.css";
import "../../estilos/Home/AWorldGlobal.css";
import "../../estilos/Home/awardsAndCertifications.css";

import colab from "../../base-de-datos/colaboradores.json";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import axios from "axios";

// Genera el primer elemento de la página home, genera una imagen con información que se le sobrepone.
export function Header() {
  return (
    <div className="header-contenido">
      <img
        className="header-img col-12"
        src={require("../../imagenes/cabeza/Home.png")}
        alt="Imagen principal de un avión"
      />
      <h1 className="header-titulo-m col-8">OPTIMEN</h1>
      <p className="header-parrafo col-8">
        <FormattedMessage
          id="app.Introduccion"
          defaultMessage="Unique team of Resources Management and"
        />
        <br />
        <FormattedMessage
          id="app.Introduccion2"
          defaultMessage="Optimization Experts and passionate"
        />
        <br />
        <FormattedMessage
          id="app.Introduccion3"
          defaultMessage=" Software Developers."
        />
      </p>
    </div>
  );
}

// Genera tres recuadros que presentan información relevante de sobre la empresa.
export function Caracteristicas() {
  return (
    <div className="caracteristicas-contenido justify-content-center">
      {/* Primer elemento */}
      <div className="caracteristicas-cuadros col-2">
        <div className="caracteristicas-titulos">
          <h2 className="caracteristicas-titulo">
            <FormattedMessage
              id="app.Home"
              defaultMessage="A World Class Global Enterprise"
            />
          </h2>
        </div>
        <p className="caracteristicas-texto">
          <FormattedMessage
            id="app.Home1.1"
            defaultMessage="Mexican Company with the following experience since 2006: Resource Optimization Consultancy and Configuration Support Services IT Software Solutions Development"
          />
        </p>
      </div>

      {/* Segundo elemento */}
      <div className="caracteristicas-cuadros col-2">
        <div className="caracteristicas-titulos">
          <h2 className="caracteristicas-titulo text">
            <FormattedMessage id="app.Home2" defaultMessage="Capabilities" />
          </h2>
        </div>
        <p className="caracteristicas-texto">
          <FormattedMessage
            id="app.Home2.1"
            defaultMessage="know more about us"
          />
        </p>
        <img
          className="caracteristicas-imagen"
          src={require("../../imagenes/recursos/search.png")}
          alt="caracteristicas-img"
        />
      </div>

      {/* Tercer elemento */}
      <div className="caracteristicas-cuadros caracteristicas-our col-2">
        <div className="caracteristicas-titulos">
          <h2 className="caracteristicas-titulo text">
            <FormattedMessage id="app.Home3" defaultMessage="Our Porpuse" />
          </h2>
        </div>
        <p className="caracteristicas-texto caracteristicas-our">
          <FormattedMessage
            id="app.Home3.1"
            defaultMessage=" Streamline the world mobility"
          />
        </p>
      </div>
    </div>
  );
}

// Imprime el componente que presenta los servicios que ofrece la empresa.
export function Services() {
  return (
    <div className="services-contenido">
      {/* Titulo */}
      <div className="row">
        <h1 className="services-titulo col-12">
          <FormattedMessage id="app.S1" defaultMessage="Our Services" />
        </h1>
      </div>

      {/* Contenido */}
      <div className="contenido row justify-content-center">
        {/* Primer servicio */}
        <div className="services-servicio col-1">
          <img
            src={require("../../imagenes/recursos/implementation.png")}
            alt="Implementation"
            className="services-servicio-imagen"
          />
          <h4 className="services-servicio-nombre">
            <FormattedMessage id="app.S2" defaultMessage="Implementation" />
          </h4>
        </div>

        {/* Segundo servicio */}
        <div className="services-servicio col-1">
          <img
            src={require("../../imagenes/recursos/innovation.png")}
            alt="Innovation"
            className="services-servicio-imagen"
          />
          <h4 className="services-servicio-nombre">
            <FormattedMessage id="app.S3" defaultMessage="Innovation" />
          </h4>
        </div>

        {/* Tercer servicio */}
        <div className="services-servicio col-1">
          <img
            src={require("../../imagenes/recursos/interface_Developmen.png")}
            alt="Interfaces Development"
            className="services-servicio-imagen"
          />
          <h5 className="services-servicio-nombre">
            <FormattedMessage
              id="app.S4"
              defaultMessage="Interfaces Development"
            />
          </h5>
        </div>

        {/* Cuarto servicio */}
        <div className="services-servicio col-1">
          <img
            src={require("../../imagenes/recursos/consultancy.png")}
            alt="Consultancy"
            className="services-servicio-imagen"
          />
          <h4 className="services-servicio-nombre">
            <FormattedMessage id="app.S4" defaultMessage="Consultancy" />
          </h4>
        </div>

        {/* Quito servicio */}
        <div className="services-servicio col-1">
          <img
            src={require("../../imagenes/recursos/business_Rules_Developmen.png")}
            alt="Bussines Rules Developmen"
            className="services-servicio-imagen"
          />
          <h5 className="services-servicio-nombre">
            <FormattedMessage
              id="app.S5"
              defaultMessage="Bussines Rules Development"
            />
          </h5>
        </div>

        {/* Sexto servicio */}
        <div className="services-servicio col-1">
          <img
            src={require("../../imagenes/recursos/auditing.png")}
            alt="Auditing"
            className="services-servicio-imagen"
          />
          <h4 className="services-servicio-nombre">
            <FormattedMessage id="app.S5" defaultMessage="Auditing" />
          </h4>
        </div>
      </div>
    </div>
  );
}

// Imprime el apartado A World Global de la pantalla home, utiliza una imagen sobre otra imagen para generar una mascara que le da textura a la imagen que contiene el texto.
export function AWorldGlobal() {
  return (
    <div className="AWorldGlobal-contenido">
      {/* titulo */}
      <div className="AWorldGlobal-titulo">
        <h5 className="AWorldGlobal-t">
          <FormattedMessage id="app.WO" defaultMessage="Why Choose Us" />
        </h5>
        <h1 className="AWorldGlobal-t">
          <FormattedMessage
            id="app.WO1"
            defaultMessage="A World Class Global Enterprise"
          />
        </h1>
      </div>

      {/* cuerpo  */}
      <div className="AWorldGlobal-contenedor-capabilities">
        <div id="capabilitie" />
      </div>
    </div>
  );
}

// Genera un grupo de noticias que se imprimen en la pantalla Home.
export function NewsAndUpdates() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const getNoticias = async () => {
      const response = await axios.get("http://localhost:4000/api/noticias");
      setNoticias(response.data);
    };
    getNoticias();
  }, []);
  return (
    <div className="div-titulo">
      {/* titulo */}
      <h1 className="Titulo">
        <FormattedMessage id="app.NP" defaultMessage=" News and updates" />
      </h1>

      {/* noticias */}
      <div className="newsAndUpdate-contenido">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="newsAndUpdate-noticias-1 col-2">
            <div className="tarjeta">
              <h3 className="newsAndUpdate-titulo-noticia">
                {noticia.nameNoticias}
              </h3>
              <p className="newsAndUpdate-fecha">{noticia.fechCreacion}</p>
              <p className="newsAndUpdate-texto">{noticia.contenidoEsp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente que genera el apartado Partnerships and Affiliations, en se utiliza el archivo json importado "colab" para imprimer uno por uno y darle el mismo formato
export function Colaboradores() {
  return (
    <div className="colaboradores-contenido">
      {/* titulo */}
      <h1 className="colaboradores-titulo">
        <FormattedMessage
          id="app.COL"
          defaultMessage=" Partnerships and Affiliations"
        />
      </h1>

      {/* Cuerpo que genera cada elemento utilizando una función map en el archivo json importado*/}
      <div className="colaboradores-grupo">
        {colab.map((colab) => {
          const col = colab.direccion;
          return (
            <div className="colaboradores-colab">
              <img
                className="colaboradores-img"
                src={require(`../../imagenes/colaboradores/${col}.png`)}
                alt={colab.direccion}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Componente que imprime el apartado Awards And Certifications, genera 4 elementos.
export function AwardsAndCertifications() {
  return (
    <div className="awardsAndCertifications-contenido">
      {/* Titulo */}
      <div className="awardsAndCertifications-div-titulo">
        <h1 className="awardsAndCertifications-titulo">
          Awards And Certifications
        </h1>
      </div>
      {/* Contenido */}
      <div className="awardsAndCertifications-awards">
        {/* primer elemento */}
        <div className="awardsAndCertifications-award">
          <img
            className="awardsAndCertifications-img"
            src={require("../../imagenes/reconocimientos/logo-Boeing.png")}
            alt="Logo Boeing"
          />
        </div>

        {/* segundo elemento */}
        <div className="awardsAndCertifications-award">
          <img
            className="awardsAndCertifications-img"
            src={require("../../imagenes/reconocimientos/logo-MarcaGuanajuato.png")}
            alt="Logo Marca Guanajuato"
          />
        </div>

        {/* tercer elemento */}
        <div className="awardsAndCertifications-award">
          <img
            className="awardsAndCertifications-img"
            src={require("../../imagenes/reconocimientos/reconocimiento-ESR.png")}
            alt="Reconocimiento ESR"
          />
        </div>

        {/* cuarto elemento */}
        <div className="awardsAndCertifications-award">
          <img
            className="awardsAndCertifications-img"
            src={require("../../imagenes/reconocimientos/reconocimiento-iso.png")}
            alt="Reconocimiento ISO"
          />
        </div>
      </div>
    </div>
  );
}
