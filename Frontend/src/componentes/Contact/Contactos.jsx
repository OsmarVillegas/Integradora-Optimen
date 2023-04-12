// Importamos los estilos CSS del mapa desde la ubicación relativa '../../estilos/Contact/mapa.css'
import '../../estilos/Contact/mapa.css';

// Importamos los componentes Contact y Mapa desde el archivo './contact-us'
import {Contact, Mapa} from './contact-us';

// Creamos el componente Contactos
function Contactos() {
  return (
    // Creamos un contenedor para los componentes Contact y Mapa, utilizando la clase CSS "Contacts"
    <div className="Contacts" >
      <div className='MapOp' >
    
      <Mapa/>
      </div>
      <div className='Contact'>
      
      <Contact/>
    </div>

    </div>
  );
}

// Exportamos el componente Contactos como el componente por defecto de este archivo
export default Contactos;
// Autor: Mario Alberto Rangel Márquez
//GDS0451