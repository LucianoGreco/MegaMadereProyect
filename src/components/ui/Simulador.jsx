import React, { useState } from "react";
import styled from "styled-components";
import simulador from "@/assets/simulador/simulador1.png";
import simulador2 from "@/assets/simulador/simulador2.png";

// Contenedor principal del emulador
const EmuladorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  
  border: 5px solid red;
`;

// Contenedor de las imágenes
const ImagenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Oculta cualquier contenido fuera de los bordes del contenedor */
  
`;

// Imagen de fondo seleccionada
const ImagenFondo = styled.img`
  position: absolute;
  width: 70%;
  height: 85%;
  object-fit: cover;
  z-index: 0;

  /* Estilo inicial para escritorio */
  top: 40px;
  left: 100px;

  /* Estilo responsivo para móviles y tabletas */
  @media (max-width: 1024px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%; /* Ajusta el tamaño en dispositivos más pequeños */
    height: 45%; /* Mantiene proporciones */
  }
`;

// Imagen del simulador
const ImagenSimulador = styled.img`

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* Mantiene las proporciones de la imagen del simulador */
  z-index: 1;
  border-radius: 50px;
`;

// Botones de cambio de simulador
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
  background-color: var(--background-color);
  color: var(--text-color);
  left: 20px;
`;

const BotonDerecho = styled(BotonCambio)`
  background-color: var(--background-color);
  color: var(--text-color);
  right: 20px;
`;

const Simulador = ({ background, fondoSeleccionado }) => {
  const [simuladorActivo, setSimuladorActivo] = useState(simulador2);

  const cambiarSimulador = () => {
    setSimuladorActivo((prev) =>
      prev === simulador2 ? simulador : simulador2
    );
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
