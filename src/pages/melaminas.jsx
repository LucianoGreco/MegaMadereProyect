import React, { useState } from "react";
import styled from "styled-components";
import NavItem from "../components/layout/navbar/NavItem";
import Card from "../components/cards/Card";
import menuData from "../data/melaminas";

// Contenedor principal para el layout
const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #121212; /* Fondo oscuro */
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Sombra para el límite */
  margin: 10px 0; /* Separación entre el header y el footer */
  border-radius: 10px; /* Opcional: bordes redondeados para mejorar el diseño */
`;

const Melaminas = () => {
  const [cardData, setCardData] = useState(null);

  return (
    <PageContainer>
      {/* NavItem ocupa el 40% */}
      <NavItem
        menuData={menuData}
        setCardData={setCardData}
        style={{ flexBasis: "40%" }}
      />
      {/* Card ocupa el 60% */}
      <div style={{ flexBasis: "60%", padding: "20px", overflowY: "auto" }}>
        {cardData ? (
          <Card infoCard={cardData} />
        ) : (
          <p>Selecciona una categoría para ver la tarjeta</p>
        )}
      </div>
    </PageContainer>
  );
};

export default Melaminas;
