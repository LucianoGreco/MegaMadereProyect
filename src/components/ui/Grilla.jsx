import React from 'react';
import Card from '@/components/cards/Card';

const Grilla = ({ items, paginaActual, setPaginaActual, onItemClick }) => {
  const itemsPorPagina = 12;
  const totalPaginas = Math.ceil(items.length / itemsPorPagina);
  const inicio = (paginaActual - 1) * itemsPorPagina;
  const itemsPagina = items.slice(inicio, inicio + itemsPorPagina);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {itemsPagina.map((item, index) => (
          <Card key={index} producto={item} onClick={() => onItemClick(item)} />
        ))}
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPaginas }, (_, i) => (
          <button
            key={i}
            onClick={() => setPaginaActual(i + 1)}
            className={`px-3 py-1 rounded ${
              paginaActual === i + 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-300 text-black'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Grilla;
