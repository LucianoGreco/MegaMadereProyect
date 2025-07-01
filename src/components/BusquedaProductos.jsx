import React, { useState } from 'react';
import axios from 'axios';

const BusquedaProductos = () => {
  const [termino, setTermino] = useState('');
  const [resultados, setResultados] = useState([]);
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  const handleBuscar = async () => {
    if (!termino) return;

    setCargando(true);
    setError('');
    try {
      const res = await axios.get(`http://localhost:4000/api/herrajes/buscar?nombre=${termino}`);
      setResultados(res.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('No se encontraron productos.');
      } else {
        setError('Hubo un error al buscar.');
      }
    } finally {
      setCargando(false);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Buscar productos</h2>
      <input
        type="text"
        value={termino}
        onChange={(e) => setTermino(e.target.value)}
        placeholder="Ej: embutida, corredera..."
        style={{ padding: '0.5rem', width: '60%' }}
      />
      <button onClick={handleBuscar} style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
        Buscar
      </button>

      {cargando && <p>Buscando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {resultados.map((prod, idx) => (
          <li key={idx}>
            <strong>{prod.nombre}</strong> — Categoría: {prod.categoria} — Código: {prod.codigo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusquedaProductos;
