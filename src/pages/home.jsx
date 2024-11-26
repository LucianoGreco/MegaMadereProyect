import React, { useState, useEffect } from "react";
import CardHome from "../components/cards/CardHome.jsx";
import Carrusel from "../components/ui/Carrusel.jsx";
import Banner from "../components/layout/Banner.jsx";
import Slider from "../components/ui/Slider.jsx";
import styled from "styled-components";

// Contenedor principal de la página Home
const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`;

const Home = () => {
  const [isMobile, setIsMobile] = useState(false); // Estado para detectar si es móvil

  useEffect(() => {
    const handleResize = () => {
      // Actualiza el estado basado en el ancho de la ventana
      setIsMobile(window.innerWidth <= 768); // Se considera móvil si el ancho es <= 768px
    };

    handleResize(); // Ejecutar la función al montar el componente
    window.addEventListener("resize", handleResize); // Agregar listener al redimensionar la ventana

    return () => window.removeEventListener("resize", handleResize); // Limpiar el evento al desmontar
  }, []);

  return (
    <>
      <ContainerHome>
        {/* El componente Banner solo se renderiza si no es un dispositivo móvil */}
        {!isMobile && <Banner />}
      </ContainerHome>

      {/* El Carrusel siempre se renderiza */}
      <Carrusel />

      {/* El Slider solo se renderiza si no es un dispositivo móvil */}
      {!isMobile && <Slider />}

      {/* Los demás componentes siempre se renderizan */}
      <CardHome />
      <Carrusel />
    </>
  );
};

export default Home;
