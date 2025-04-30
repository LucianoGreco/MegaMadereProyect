import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Estilos Globales
import GlobalStyles             from "@/styles/globalStyles";

// Pages
import Herrajes                 from "@/pages/herrajes.jsx";
import Melaminas                from "@/pages/melaminas.jsx";
import Home                     from "@/pages/home.jsx";
import Muebles                  from "@/pages/muebles.jsx";
import Contactos                from "@/pages/contactos.jsx";


import RevestimientoPiso        from "@/pages/revestimientoPiso.jsx";
import RevestimientoPared       from "@/pages/revestimientoPared.jsx";
import Simulador                from "@/pages/simulador.jsx";
import ViniloMuebles       from "@/pages/viniloMuebles.jsx";
import ViniloVidrios        from "@/pages/viniloVidrios.jsx";

// Components - Políticas
import Cookies from "@/components/policies/Cookies.jsx";
import Privacidad from "@/components/policies/Privacidad.jsx";
import Terminos from "@/components/policies/Terminos.jsx";

// Componentes UI
import Header from "@/components/layout/Header.jsx";
import Cursor from "@/data/components/cursor.js";
import Footer from "@/components/layout/Footer.jsx";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Cursor />
      <Router>

        <Header />

        <Routes>
          <Route path="/"                   element={<Home />} />
          <Route path="/herrajes"           element={<Herrajes />} />
          <Route path="/melaminas"          element={<Melaminas />} />
          <Route path="/muebles"            element={<Muebles />} />
          <Route path="/revestimientoPiso"  element={<RevestimientoPiso />} />
          <Route path="/revestimientoPared" element={<RevestimientoPared />} />
          <Route path="/simulador"          element={<Simulador />} />
          <Route path="/viniloMuebles"       element={<ViniloMuebles />} />
          <Route path="/viniloVidrios"      element={<ViniloVidrios />} />
          <Route path="/contacto"           element={<Contactos />} />
          <Route path="/cookies"            element={<Cookies />} />
          <Route path="/terminos"           element={<Terminos />} />
          <Route path="/privacidad"         element={<Privacidad />} />
          <Route path="*"                   element={<div>Página no encontrada</div>} />
        </Routes>

        <Footer />

      </Router>
    </div>
  );
};

export default App;
