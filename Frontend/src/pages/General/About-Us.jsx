/*
  Autor: Osmar Israel Villegas Martínez
*/

/* Importa los componentes que se utilizaran para la vista de la pantalla About Us*/
import React from "react";
import { HeaderAbout, AboutVideo, OurStory, InnovationHub, Experience} from "../../componentes/About-Us/aboutUs.jsx"
import { Navbar, Footer } from '../../componentes/Home/headerAndNavbar.jsx';

/* Se imprime el contenido de la pantalla About Us y se ordena la presentación de los elementos*/
class AboutUs extends React.Component {
  render() {
    return (
      <div className="About-Us">
        <Navbar />
          <HeaderAbout />
          <AboutVideo />
          <Experience />
          <OurStory />
          <InnovationHub />
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
