import { useEffect } from "react";
import {Recuadro} from "./Reusable/Recuadro"
import Cookies from "universal-cookie";

const cookies = new Cookies();

export function MenuAdmin() {

  useEffect(() => {
    if (cookies.get("token").length < 0) {
      console.log(cookies.get("token").length)
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="liderContenido">
      <h2 className="liderContenido-titulo">Administrador</h2>
      <div className="liderContenido-contenido">
        <Recuadro
          titulo="Usuarios"
          desc="Administrar a los usuarios del proyecto"
          link="/Admin/Usuarios"
        >
          <ul>
            <li>Consultar a los usuarios del proyecto</li>
            <li>Generar nuevos usuarios</li>
            <li>Editar información de los usuarios</li>
            <li>Eliminar integrantes</li>
          </ul>
        </Recuadro>
        <Recuadro
          titulo="Noticias y eventos"
          desc="Gestionar las noticias y eventos generados"
          link="/Admin/EventosYNoticias"
        >
          <ul>
            <li>Consultar las noticias y eventos generados</li>
            <li>Generar noticia o evento</li>
            <li>Editar noticia o evento</li>
            <li>Eliminar noticia o evento</li>
          </ul>
        </Recuadro>
      </div>
    </div>
  );
}
