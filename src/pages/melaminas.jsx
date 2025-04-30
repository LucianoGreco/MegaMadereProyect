
import React, { useState }  from 'react';
import dataMelamina from '@/data/pages/dataMelamina';
import MenuBar              from '@/components/layout/navbar/MenuBar';
import Grilla               from '@/components/ui/Grilla';

//src\data\pages\dataMelamina.js

const Melaminas = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  return (
    <div style={{ display: 'flex' }}>
      <MenuBar
  productos={Object.values(dataMelamina)}
  onSeleccionarProducto={setProductoSeleccionado}
/>
      <div style={{ flex: 1 }}>
        {productoSeleccionado ? (
          <Grilla items={[productoSeleccionado]} />
        ) : (
          <p style={{ padding: '20px' }}>Selecciona un producto del menú.</p>
        )}
      </div>
    </div>
  );
};

export default Melaminas;
