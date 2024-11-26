import React, { useState } from "react";
import styled from "styled-components";
import NavItem from "../components/layout/navbar/NavItem.jsx";
import Simulador from "../components/ui/Simulador.jsx";
import menuData from "../data/melaminas.js";
import data from "../data/data.js";

const fondoAmaranto = {
  imagenGrande: "ruta/a/la/imagen/amaranto.png",
  nombre: "Amaranto",
};

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  /* Media Query para dispositivos móviles */
  @media (max-width: 768px) {
    flex-direction: column; /* Cambia la dirección a columna en móviles */
  }
`;

const SimuladorPage = () => {
  const [fondoSeleccionado, setFondoSeleccionado] = useState(fondoAmaranto);

  return (
    <PageContainer>
      {/* Muestra el NavItem como menú hamburguesa */}
      <NavItem
        menuData={menuData}
        setCardData={setFondoSeleccionado}
        style={{ width: "100%" }}
      />
      {/* El simulador ocupa el 100% de la pantalla en móvil */}
      <Simulador
        background={data.secciones.Simulador.backgroundPagina}
        fondoSeleccionado={fondoSeleccionado}
        style={{
          width: "100%",
          height: "100%",
          flexGrow: 1,
          display: "block", // Aseguramos que el simulador ocupe toda la pantalla
        }}
      />
    </PageContainer>
  );
};

export default SimuladorPage;
