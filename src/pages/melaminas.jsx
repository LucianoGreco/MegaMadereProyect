import React, { useState } from "react";
import styled from "styled-components";
import dataMelamina from "@/data/pages/melaminas";
import { breakpoints } from "@/styles/breakpoints";

const recolectarProductos = () => {
  return Object.values(dataMelamina["Tableros Melaminas"]).flat();
};

const Melaminas = () => {
  const productos = recolectarProductos();
  const [busqueda, setBusqueda] = useState("");
  const [productoActivo, setProductoActivo] = useState(null);

  const productosFiltrados = productos.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <MainContainer>
      <Menu>
        <Busqueda
          placeholder="Buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <TituloMenu>Melaminas</TituloMenu>
        {productosFiltrados.map((producto) => (
          <BotonMenu
            key={producto.codigo}
            onClick={() => setProductoActivo(producto)}
          >
            {producto.nombre}
          </BotonMenu>
        ))}
      </Menu>

      <Contenido>
        <Grid>
          {productosFiltrados.map((producto) => (
            <Card key={producto.codigo}>
              {producto.imagenChica ? (
                <Imagen src={producto.imagenChica} alt={producto.nombre} />
              ) : (
                <FallbackImagen>Imagen no disponible</FallbackImagen>
              )}
              <Nombre>{producto.nombre}</Nombre>
              <Precio>${Number(producto.precio).toLocaleString("es-AR")}</Precio>
              <Estado $disponible={producto.estado === "disponible"}>
                {producto.estado}
              </Estado>
            </Card>
          ))}
        </Grid>
      </Contenido>

      {productoActivo && (
        <Modal onClick={() => setProductoActivo(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {productoActivo.imagenGrande ? (
              <ModalImagen src={productoActivo.imagenGrande} alt={productoActivo.nombre} />
            ) : (
              <FallbackImagen>Imagen grande no disponible</FallbackImagen>
            )}
            <ModalTexto>
              <h2>{productoActivo.nombre}</h2>
              <p>{productoActivo.descripcion}</p>
              <p><strong>Medidas:</strong> {productoActivo.medidas}</p>
              <p><strong>Espesor:</strong> {productoActivo.espesor}</p>
              <p><strong>Peso:</strong> {productoActivo.peso}</p>
              <Precio>${Number(productoActivo.precio).toLocaleString("es-AR")}</Precio>
              <Estado $disponible={productoActivo.estado === "disponible"}>
                {productoActivo.estado}
              </Estado>
              <Cerrar onClick={() => setProductoActivo(null)}>✕ Cerrar</Cerrar>
            </ModalTexto>
          </ModalContent>
        </Modal>
      )}
    </MainContainer>
  );
};

export default Melaminas;

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    height: auto;
  }
`;

const Menu = styled.aside`
  width: 250px;
  background: #f9f9f9;
  padding: 1rem;
  overflow-y: auto;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    position: sticky;
    top: 0;
    background: #f9f9f9;
    z-index: 10;
    border-bottom: 1px solid #ddd;
    padding: 0.5rem 1rem;
  }
`;

const TituloMenu = styled.h2`
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #444;
`;

const BotonMenu = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  background-color: white;
  color: #333;
  border: none;
  border-radius: 6px;
  text-align: left;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Busqueda = styled.input`
  padding: 0.6rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
`;

const Contenido = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 1rem;

    & > * {
      flex: 0 0 80%;
      scroll-snap-align: start;
    }
  }
`;

const Card = styled.div`
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.75rem;
  text-align: center;
  min-width: 200px;
`;

const Imagen = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

const FallbackImagen = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 0.9rem;
`;

const Nombre = styled.h3`
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
  color: #222;
`;

const Precio = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #2e7d32;
`;

const Estado = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  background: ${(p) => (p.$disponible ? "#e8f5e9" : "#ffebee")};
  color: ${(p) => (p.$disponible ? "#2e7d32" : "#c62828")};
`;

const Modal = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    max-height: 100vh;
  }
`;

const ModalImagen = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;

  @media (max-width: ${breakpoints.mobile}) {
    max-height: 40vh;
    object-fit: cover;
  }
`;

const ModalTexto = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.95rem;
    color: #555;
  }
`;

const Cerrar = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1rem;
  color: #219653;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
`;
