import React from 'react'; // Importamos React

import '../../estilos/Customers/customers2.css'; // Importamos los estilos CSS para este componente

// Definimos la función Cuadros1 como un componente de React que toma las propiedades imagen1, imagen2, ..., imagen8
export function Cuadros1(props) {
  return (
    // Este es el contenedor que va a envolver todos los cuadros
    <div className="contenedor">
      {/* Este es el primer cuadro, que muestra la imagen1 */}
      <div className="cuadro">
        <img className="imagen" 
          src={require(`../../imagenes/uno/${props.imagen1}.png`)} // Cargamos la imagen1 desde el directorio '../../imagenes/uno'
          alt='Optimen' // Este es el texto alternativo que se muestra en caso de que la imagen no se cargue
        />
      </div>
      {/* Repetimos el mismo patrón para los cuadros 2 a 8 */}
      <div className="cuadro">
        <img className="imagen" 
          src={require(`../../imagenes/uno/${props.imagen2}.png`)}
          alt='Optimen' 
        />
      </div>
      <div className="cuadro">
        <img className="imagen" 
          src={require(`../../imagenes/uno/${props.imagen3}.png`)}
          alt='Optimen' 
        />
      </div>
      <div className="cuadro">
        <img className="imagen" 
          src={require(`../../imagenes/uno/${props.imagen4}.png`)}
          alt='Optimen' 
        />
      </div>
      <div className="cuadro">
        <img className="imagen" 
          src={require(`../../imagenes/uno/${props.imagen5}.png`)}
          alt='Optimen' 
        />
      </div>
      <div className="cuadro">
        <img className="imagen" 
          src={require(`../../imagenes/uno/${props.imagen6}.png`)}
          alt='Optimen' 
        />
      </div>
      <div className="cuadro">
        <img className="imagen" 
          src={require(`../../imagenes/uno/${props.imagen7}.png`)}
          alt='Optimen' 
        />
      </div>
      <div className="cuadro">
        <img className="imagen" 
          src={require(`../../imagenes/uno/${props.imagen8}.png`)}
          alt='Optimen' 
        />
      </div>
    </div>
  );
}
// Define una función de componente de React llamada Cuadros2 y toma un objeto de propiedades (props) como entrada
export function Cuadros2(props) {
  // Retorna un elemento React que representa una serie de 8 imágenes
  return (
    // Renderiza las imágenes dentro de un elemento HTML div con una clase de "contenedor"
    <div class="contenedor">
     
      <div class="cuadro">
       
        <img className='imagen' 
          src={require(`../../imagenes/dos/${props.imagen1}.png`)}
          alt='Optimen' />
      </div>

      <div class="cuadro">
        <img className='imagen' 
          src={require(`../../imagenes/dos/${props.imagen2}.png`)}
          alt='Optimen' />
      </div>
      <div class="cuadro">
        <img className='imagen' 
          src={require(`../../imagenes/dos/${props.imagen3}.png`)}
          alt='Optimen' />
      </div>
      <div class="cuadro">
        <img className='imagen' 
          src={require(`../../imagenes/dos/${props.imagen4}.png`)}
          alt='Optimen' />
      </div>
      <div class="cuadro">
        <img className='imagen' 
          src={require(`../../imagenes/dos/${props.imagen5}.png`)}
          alt='Optimen' />
      </div>
      <div class="cuadro">
        <img className='imagen' 
          src={require(`../../imagenes/dos/${props.imagen6}.png`)}
          alt='Optimen' />
      </div>
      <div class="cuadro">
        <img className='imagen' 
          src={require(`../../imagenes/dos/${props.imagen7}.png`)}
          alt='Optimen' />
      </div>
      <div class="cuadro">
        <img className='imagen' 
          src={require(`../../imagenes/dos/${props.imagen8}.png`)}
          alt='Optimen' />
      </div>
    </div>
  );
}

// Autor: Mario Alberto Rangel Márquez
//GDS0451