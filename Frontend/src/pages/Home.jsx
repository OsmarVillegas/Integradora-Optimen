/*
  Autor: Osmar Israel Villegas Martínez
*/

/* Importa los componentes que se utilizaran para la vista de la pantalla Home*/
import React from "react";
import { Header, Caracteristicas, Services, NewsAndUpdates, Colaboradores, AwardsAndCertifications, AWorldGlobal } from '../componentes/Home/home';
import { Navbar, Footer} from '../componentes/Home/headerAndNavbar';

/* Se imprime el contenido de la pantalla Home y se ordena la presentación de los elementos*/
class Home extends React.Component {
    render(){
        return (
            <div className="Home">
                < Navbar />
                    <Header />
                    <Caracteristicas />
                    <AWorldGlobal />
                    <Services />
                    <NewsAndUpdates />
                    <Colaboradores />
                    <AwardsAndCertifications />
                < Footer />
            </div>
        )
    }
}

export default Home;