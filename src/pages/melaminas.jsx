import React, { useState } from "react";
import NavItem from "../components/layout/navbar/NavItem";
import styled from "styled-components";
import Card from "../components/cards/Card";
import menuData from "../data/melaminas"; // Importar los datos desde melaminas.js

// Este contenedor garantiza que el contenido principal no interfiera con el Footer
const MelaminasContainer = styled.div`
  min-height: calc(100vh - 200px); /* 200px se ajusta a la altura aproximada del Header y Footer */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

const ContainerMain = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  padding: 0 50px;
`;

const CardContainer = styled.div`
  position: fixed;
  top: 165px;
  right: 10%;
  transform: translateY(-50%);
  z-index: 10;
`;

const Melaminas = () => {
  const [cardData, setCardData] = useState(null);

  return (
    <MelaminasContainer>
      <ContainerMain>
        <NavItem menuData={menuData} setCardData={setCardData} />
        <CardContainer>
          <Card infoCard={cardData} />
        </CardContainer>
      </ContainerMain>
    </MelaminasContainer>
  );
};

export default Melaminas;
