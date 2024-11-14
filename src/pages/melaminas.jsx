// melaminas.jsx
import React from "react";
import NavItem from "../components/layout/navbar/NavItem";
import styled from "styled-components";
import Card from "../components/cards/Card";
const MelaminasContainer = styled.div`
  min-height: 80vh;
  padding-bottom: 40px; /* Espacio para evitar solaparse con el footer */
`;

const Melaminas = () => {
  return (
    <MelaminasContainer>
      <NavItem />
      <Card />
    </MelaminasContainer>
  );
};

export default Melaminas;
