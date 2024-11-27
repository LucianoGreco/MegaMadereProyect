import React, { useState } from "react";
import styled from "styled-components";
import simulador from "@/assets/simulador/simulador1.png";
import simulador2 from "@/assets/simulador/simulador2.png";

const EmuladorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  width: 100%; 
  height: 100%; 
  
/////////////////////////////////// Celulares y Tablet //////////////////////
  @media (max-width: 768px) {
 
  }  
/////////////////////////////////// Celulares y Tablet //////////////////////


`;

const ImagenContainer = styled.div`
  position: relative;
  width: 100%; /* 100% del ancho del contenedor padre */
  height: 100%; /* 100% del alto del contenedor padre */
`;

const ImagenFondo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Ajusta al 100% del contenedor padre */
  height: 100%; /* Ajusta al 100% del contenedor padre */
  object-fit: cover; /* Mantiene las proporciones */
  z-index: 0;
  width: 1200wv; 
`;

const ImagenSimulador = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Ajusta al 100% del contenedor padre */
  height: 100%; /* Ajusta al 100% del contenedor padre */
//   object-fit: contain; /* Mantiene las proporciones */
  z-index: 1;
`;

const BotonCambio = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--text-color);
  color: var(--background-color);
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
  z-index: 3;

  &:hover {
    background-color: var(--background-color);
    color: var(--text-color);
  }
`;

const BotonIzquierdo = styled(BotonCambio)`
  left: 20px;
`;

const BotonDerecho = styled(BotonCambio)`
  right: 20px;
`;

const Simulador = ({ background, fondoSeleccionado }) => {
  const [simuladorActivo, setSimuladorActivo] = useState(simulador2);

  const cambiarSimulador = () => {
    setSimuladorActivo((prev) => (prev === simulador2 ? simulador : simulador2));
  };

  return (
    <EmuladorContainer background={background}>
      <ImagenContainer>
        {fondoSeleccionado && (
          <ImagenFondo
            src={fondoSeleccionado.imagenGrande}
            alt="Fondo seleccionado"
          />
        )}
        <ImagenSimulador src={simuladorActivo} alt="Simulador activo" />
        <BotonIzquierdo onClick={cambiarSimulador}>{"<"}</BotonIzquierdo>
        <BotonDerecho onClick={cambiarSimulador}>{">"}</BotonDerecho>
      </ImagenContainer>
    </EmuladorContainer>
  );
};

export default Simulador;
