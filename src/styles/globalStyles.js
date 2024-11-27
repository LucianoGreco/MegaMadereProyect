// \src\styles\GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import "normalize.css"; // Normaliza los estilos predeterminados del navegador para garantizar consistencia.
import { backgroundPage } from "../data/palcas/imagenes.js";

// Importa las fuentes necesarias desde Google Fonts.
import "@fontsource/playfair-display"; // Fuente para títulos
import "@fontsource/montserrat"; // Fuente para textos secundarios

const GlobalStyles = createGlobalStyle`
  /* Variables globales */
  :root {
    --text-color: rgba(255, 255, 255, 0.8);
    --hover-background-color: rgba(255, 255, 255, 0.8);
    --hover-text-color: rgba(0, 0, 0, 0.9);
    --background-color: rgba(0, 0, 0, 0.8);
    --shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    --border-radius: 5px;
  }

  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Configuración base */
  html, body {
    background: url(${backgroundPage.Home}) center/cover fixed no-repeat;
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-attachment: fixed;
    color: var(--text-color);
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    height: 100%;
    text-shadow: var(--shadow);
    width: 100%;
  }

  /* Estilo para títulos */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    color: var(--text-color);
    text-shadow: var(--shadow);
  }

  /* Estilo de enlaces y botones */
    a {
    backdrop-filter: blur(10px);
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    color: var(--text-color);
    font-weight: bold;
    text-decoration: none;
    padding: 10px 10px;
    text-shadow: var(--shadow);
    cursor: pointer;
    border: none;
  }

  /* Estilo de hover para enlaces, botones, y enlaces de navegación */
   a:hover, {
    color: var(--background-color);
    background-color: var(--text-color);
  }

  .custom-cursor {
  position: fixed;
  width: 50px; /* Ajusta el tamaño */
  height: 50px;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s linear;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-cursor img {
  width: 100%;
  height: auto;
}

.custom-cursor.rotating {
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

  /* Imágenes responsivas */
  // img {
  //   max-width: 100%;
  //   height: auto;
  //   display: block;
  // }

  /* Configuración general de la aplicación */
  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }
`;

export default GlobalStyles;
