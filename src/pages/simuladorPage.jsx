import React, { useState } from "react";
import styled from "styled-components";
import NavItem from "../components/layout/navbar/NavItem.jsx";
import Simulador from "../components/ui/Simulador.jsx";
import menuData from "../data/melaminas.js";
import data from "@/data/data.js";

const fondoAmaranto = {
  imagenGrande: "ruta/a/la/imagen/amaranto.png",
  nombre: "Amaranto",
};

// Contenedor principal de la página
const PageContainer = styled.div`

  display: flex;
  width: auto;
  height: 80vh;

  /* Media Query para dispositivos móviles */
  @media (max-width: 768px) {
    flex-direction: column; /* Cambia a columna en móviles */
    height: auto; /* Ajusta altura automáticamente */
  }
`;

// Contenedor del simulador
const SimuladorContainer = styled.div`
  flex-grow: 1; /* Ocupa el espacio restante en escritorio */
  height: 100%; /* En escritorio ocupa toda la altura */

  /* Media Query para dispositivos móviles */
  @media (max-width: 768px) {
    height: 60vh; /* Ocupa el 60% de la altura de la pantalla */
  }
`;

const SimuladorPage = () => {
  const [fondoSeleccionado, setFondoSeleccionado] = useState(fondoAmaranto);

  return (
    <PageContainer>
      {/* Menú de navegación */}
      <NavItem
        menuData={menuData}
        setCardData={setFondoSeleccionado}
        style={{ width: "100%" }}
      />
      {/* Contenedor del simulador */}
      <SimuladorContainer>
        <Simulador
          background={data.secciones.Simulador.backgroundPagina}
          fondoSeleccionado={fondoSeleccionado}
        />
      </SimuladorContainer>
    </PageContainer>
  );
};

export default SimuladorPage;
