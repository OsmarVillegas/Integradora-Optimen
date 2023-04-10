import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/General/Home";
import New from "./pages/General/News";
import Customers from "./pages/General/Customers";
import ContactUs from "./pages/General/Contact-Us";
import AboutUs from "./pages/General/About-Us";
import LogIn from "./pages/General/login";
import NoticiasYEventosAdmin from "./pages/Admin/NoticiasYEventosAdmin";
import NoticiasYEventosCreador from "./pages/Creador/NoticiasYEventosCreador";
import UsuariosAdmin from "./pages/Admin/UsuariosAdmin"
import VistaAdmin from "./pages/Admin/VistaAdmin";
import VistaCreador from "./pages/Creador/VistaCreador";
import Pagina from "./pages/General/Pagina";

export function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Customers" element={<Customers />} />
          <Route exact path="/About-Us" element={<AboutUs />} />
          <Route exact path="/News" element={<New />} />
          <Route exact path="/PaginaVista" element={<Pagina />} />
          <Route exact path="/Contact-Us" element={<ContactUs />} />
          <Route exact path="/Update" element={<ContactUs />} />
          <Route exact path="/Login" element={<LogIn />} />
          <Route exact path="/Admin/Vista" element={<VistaAdmin />} />
          <Route exact path="/Admin/Usuarios" element={<UsuariosAdmin />} />
          <Route exact path="/Admin/EventosYNoticias" element={<NoticiasYEventosAdmin />} />
          <Route exact path="/Creador/Vista" element={<VistaCreador />} />
          <Route exact path="/Creador/EventosYNoticias" element={<NoticiasYEventosCreador />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
