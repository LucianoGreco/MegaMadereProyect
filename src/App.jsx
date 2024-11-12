// App.jsx:
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home       from './pages/home.jsx';
import Novedades  from './pages/novedades.jsx';
import Disenios   from './pages/disenios.jsx';
import Envios     from './pages/envios.jsx';
import Herrajes   from './pages/herrajes.jsx';
import Melaminas  from './pages/melaminas.jsx';
import Muebles    from './pages/muebles.jsx';
import Contactos  from './pages/contactos.jsx'; // Verificar la ruta

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/disenios" element={<Disenios />} />
        <Route path="/envios" element={<Envios />} />
        <Route path="/herrajes" element={<Herrajes />} />
        <Route path="/muebles" element={<Muebles />} />
        <Route path="/melaminas" element={<Melaminas />} />
        <Route path="/contactos" element={<Contactos />} /> 
      </Routes>
    </Router>
  );
};

export default App;
