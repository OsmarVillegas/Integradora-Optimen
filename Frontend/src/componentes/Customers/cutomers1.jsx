// Importar librerías y componentes necesarios
import React from 'react';
import '../../estilos/Customers/customers1.css';
import {Customers2, Customers3} from './customers2.jsx'

// Definir el componente Customers1
function Customers1() {
  // Devolver un fragmento de código HTML
  return (
    <div className="header-contenido ">
        <img className="header-img col-12" src={require('../imagenes/optimenv.png')} alt="Imagen principal de un avión" />
        {/* Primera sección */}
        <div className='uno'>
          <strong><h1 className='titulo-texto1'>Our Customers</h1></strong>
          <hr style={{ border: 'none', borderTop: '2px solid rgb(0, 0, 1)', margin: '20px auto', maxWidth: '70%' }} />
          {/* Usar el componente Customers2 */}
          <Customers2/>
        </div>
        {/* Segunda sección */}
        <div className='dos'>
          <h1 className='titulo-texto2'>Our Project Experience</h1>
          <hr style={{ border: 'none', borderTop: '2px solid rgb(0, 0, 1)', margin: '20px auto', maxWidth: '70%' }} />
          {/* Usar el componente Customers3 */}
          <Customers3/>
        </div>
    </div>
  )
}

// Exportar el componente Customers1
export default Customers1;
// Autor: Mario Alberto Rangel Márquez
//GDS0451