// src/styles/globalStyles.js
import { createGlobalStyle } from "styled-components";
import "normalize.css";
import backgroundImage from "../assets/Images/background.jpg";

const GlobalStyles = createGlobalStyle`
  /* Reset básico para todos los elementos */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Establece una fuente base y un tamaño que no se verá afectado por el zoom */
  html {
    font-size: 16px; /* Asegura que la raíz tenga un tamaño de fuente constante */
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%; /* Prevenir que se ajuste el tamaño de la fuente en navegadores Webkit */
  }

  body {
    width: 100vw;
    font-family: 'Poppins', sans-serif;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    font-size: 1rem; /* Usamos rem para la fuente base */
    overflow: hidden;
    min-height: 100%;
  }

  /* Enlaces y botones */
  a, button {
    text-decoration: none;
    color: inherit;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    margin-bottom: 20px; /* Espacio de 20px desde el borde inferior de la tarjeta */
    padding: 10px 20px;
    font-weight: bold;
  }

  a:hover, button:hover {
    color: #aaa;
  }

  /* Asegurar que las imágenes se ajusten correctamente */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Evitar que el sitio se agrande o deforme cuando se hace zoom */
  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;
    font-size: 1rem; /* Aseguramos que la fuente no cambie de tamaño */
  }

  /* Prevenir el escalado en dispositivos con zoom */
  html, body {
    touch-action: manipulation;
  }
`;

export default GlobalStyles;
