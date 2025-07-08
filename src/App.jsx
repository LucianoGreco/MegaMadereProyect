import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Estilos Globales
import GlobalStyles   from "@/styles/globalStyles";

//Paginas
import Home           from "@/pages/home.jsx";
import Melaminas      from "@/pages/melaminas.jsx";
import Revestimientos from "@/pages/revestimientos.jsx"; 
import Vinilos        from "@/pages/vinilos.jsx";
import Herrajes       from "@/pages/herrajes.jsx";
import Simulador      from "@/pages/simulador.jsx";
import Contactos      from "@/pages/contactos.jsx";

// Components - Políticas
import Cookies        from "@/components/policies/Cookies.jsx";
import Privacidad     from "@/components/policies/Privacidad.jsx";
import Terminos       from "@/components/policies/Terminos.jsx";

// Componentes UI

import Header         from "@/components/layout/Header.jsx";
import Cursor         from "@/data/components/cursor.jsx";
import Footer         from "@/components/layout/Footer.jsx";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Cursor />
      <Router>
        <Header /> 
        <Routes>
          <Route path="/"                   element={<Home />} />
          <Route path="/melaminas"          element={<Melaminas />} />
          <Route path="/herrajes"           element={<Herrajes />} />
          <Route path="/revestimientos"     element={<Revestimientos />} />
          <Route path="/simulador"          element={<Simulador />} />
          <Route path="/vinilos"            element={<Vinilos />} />
          <Route path="/contactos"           element={<Contactos />} />
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