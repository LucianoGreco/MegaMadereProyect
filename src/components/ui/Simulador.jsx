// src/components/ui/Simulador.jsx
import React, { useState } from "react";
import styled from "styled-components";
import simulador1 from "@/assets/products/simulador/mueble-simulador.png";

const EmuladorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const ImagenSimulador = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const BotonCambio = styled.button`
  position: absolute;
  top: 50%;
  background-color: var(--text-color);
  color: var(--background-color);
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
  z-index: 3;
`;

const Simulador = () => {
  const [simuladorActivo, setSimuladorActivo] = useState(simulador1);


  return (
    <EmuladorContainer>
      <ImagenSimulador src={simuladorActivo} alt="Simulador activo" />

    </EmuladorContainer>
  );
};

export default Simulador;