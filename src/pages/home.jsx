import React, { useEffect } from "react";
import CardHome from "../components/cards/CardHome.jsx";
import Carrusel from "../components/ui/Carrusel.jsx";
import Banner from "../components/layout/Banner.jsx";
import Slider from "../components/ui/Slider.jsx";  // Importa el componente Slider
import { createGlobalStyle } from "styled-components"; // Importamos createGlobalStyle
import Footer from "../components/layout/Footer.jsx";
import data from "../data/data.js";  // Importamos el archivo de datos

// Estilo global para eliminar márgenes, padding y bordes
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    border: none;
  }
`;

const Home = () => {
  useEffect(() => {
    // Establecer la imagen de fondo para toda la página usando la ruta desde data.js
    document.body.style.backgroundImage = `url(${data.background})`;
    document.body.style.backgroundSize = "cover"; // Asegura que la imagen cubra toda la pantalla
    document.body.style.backgroundPosition = "center"; // Centra la imagen
    document.body.style.backgroundAttachment = "fixed"; // Hace que la imagen de fondo no se mueva al hacer scroll
  }, []);

  return (
    <>
      <GlobalStyle /> {/* Aplicamos los estilos globales */}
      <Banner />
      <Carrusel />
      <Slider /> {/* Inserta el Slider aquí */}
      <CardHome />
      <Footer />
    </>
  );
};

export default Home;
