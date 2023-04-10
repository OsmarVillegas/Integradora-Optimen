import {Recuadro} from "../VistaAdmin/Reusable/Recuadro"

export function MenuCreador() {
  return (
    <div className="liderContenido">
      <h2 className="liderContenido-titulo">Creador de Contenido</h2>
      <div className="liderContenido-contenido">
        <Recuadro
          titulo="Noticias y eventos"
          desc="Gestionar las noticias y eventos generados"
          link="/Creador/EventosYNoticias"
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
