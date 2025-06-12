import React, { useState } from "react";
import styled from "styled-components";
import dataMelamina from "@/data/pages/melaminas";
import { imagenesSimulador, imagenesGrandes } from "@/data/image/gestorImage";
import { breakpoints } from "@/styles/breakpoints";

const recolectarProductos = () => {
  return Object.values(dataMelamina["Tableros Melaminas"]).flat();
};

const Simulador = () => {
  const productos = recolectarProductos();
  const [busqueda, setBusqueda] = useState("");
  const [melaminaSeleccionada, setMelaminaSeleccionada] = useState(null);
  const [muebleSeleccionado, setMuebleSeleccionado] = useState("simulador-1");

  const productosFiltrados = productos.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const imagenFondo = melaminaSeleccionada?.imagenGrande
    ? imagenesGrandes[
        melaminaSeleccionada.imagenGrande
          .split("/")
          .pop()
          .split(".")[0]
          .toLowerCase()
      ]
    : null;

  const imagenMueble = imagenesSimulador[muebleSeleccionado];

  return (
    <MainContainer>
      <Menu>
        <Busqueda
          placeholder="Buscar melamina..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        {melaminaSeleccionada && (
          <QuitarBoton
            onClick={() => {
              setMelaminaSeleccionada(null);
              setBusqueda("");
            }}
            aria-label="Quitar melamina seleccionada"
          >
            ✕ Quitar melamina
          </QuitarBoton>
        )}

        <TituloMenu>Melaminas</TituloMenu>
        {productosFiltrados.map((producto) => (
          <BotonMenu
            key={producto.codigo}
            onClick={() => setMelaminaSeleccionada(producto)}
            $activo={melaminaSeleccionada?.codigo === producto.codigo}
          >
            {producto.nombre}
          </BotonMenu>
        ))}

        <TituloMenu>Muebles</TituloMenu>
        {["simulador-1", "simulador-2"].map((key, i) => (
          <BotonMenu
            key={key}
            onClick={() => setMuebleSeleccionado(key)}
            $activo={muebleSeleccionado === key}
          >
            Mueble {i + 1}
          </BotonMenu>
        ))}
      </Menu>

      <SimuladorArea>
        <SimuladorContenido>
          {imagenFondo && (
            <MelaminaFondo
              src={imagenFondo}
              alt="Fondo melamina"
              loading="lazy"
            />
          )}
          {imagenMueble && <ImagenMueble src={imagenMueble} alt="Mueble" />}
          {!imagenFondo && (
            <Instruccion>Seleccioná una melamina para ver el simulador</Instruccion>
          )}
        </SimuladorContenido>
      </SimuladorArea>
    </MainContainer>
  );
};

export default Simulador;

// =======================
// Estilos
// =======================

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
  background: #f1f1f1;
  padding: 1rem;
  overflow-y: auto;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid #ddd;
  }
`;

const TituloMenu = styled.h2`
  font-size: 1rem;
  margin: 1.5rem 0 0.5rem;
  color: #444;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.25rem;
`;

const BotonMenu = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.25rem;
  background-color: ${({ $activo }) => ($activo ? "#d0eaff" : "white")};
  color: ${({ $activo }) => ($activo ? "#004080" : "#333")};
  border: 1px solid ${({ $activo }) => ($activo ? "#007acc" : "#ccc")};
  border-radius: 6px;
  text-align: left;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const QuitarBoton = styled.button`
  width: 100%;
  margin: 0.8rem 0 0.6rem;
  padding: 0.5rem;
  background-color: #ffdddd;
  color: #b30000;
  border: 1px solid #b30000;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffbbbb;
  }
`;

const Busqueda = styled.input`
  padding: 0.6rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
`;

const SimuladorArea = styled.main`
  flex: 1;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const SimuladorContenido = styled.div`
  position: relative;
  width: 90%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MelaminaFondo = styled.img`
  position: absolute;
  width: 73%;
  max-width: 73%;
  max-height: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(1.05);
  z-index: 1;
`;

const ImagenMueble = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
`;

const Instruccion = styled.p`
  position: relative;
  z-index: 3;
  font-size: 1.1rem;
  color: #555;
  background: rgba(255, 255, 255, 0.85);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-align: center;
`;
