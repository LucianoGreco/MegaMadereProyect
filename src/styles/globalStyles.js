// \src\styles\GlobalStyles.js:
import { createGlobalStyle } from "styled-components";
import "normalize.css"; // Normaliza los estilos predeterminados del navegador para garantizar consistencia.
import { backgroundPage } from "@/data/image/gestorImage.js";
// Importa las fuentes necesarias desde Google Fonts.
import "@fontsource/playfair-display"; // Fuente para títulos
import "@fontsource/montserrat"; // Fuente para textos secundarios

const GlobalStyles = createGlobalStyle`

   :root {
    --text-color:             rgba(255, 255, 255, 1);
    --background-color:       rgba(0, 0, 0, 0.5);

    --hover-text-color:       rgba(0, 0, 0, 0.0);
    --hover-background-color: rgba(255, 255, 255, 255);
    
    // --shadow: 1px 1px 3px     rgba(0, 0, 0, 0.9);

  }

  :root {
  --navbar-height: 18vh;
  --navbar-bg: rgba(0, 0, 0, 0.5);
  --navbar-link-radius: 15px;
  --navbar-hover-color: rgba(255, 255, 255, 1);
  --navbar-hover-bg: rgba(0, 0, 0, 1);
}

/* --------------> Reset básico <-------------- */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;

  }


 /* --------------> Configuración base <-------------- */
  html, body {
    height: 100vh;
    width: 100vw;
    // background: url(${backgroundPage.home}) center/cover fixed no-repeat;
    background: rgb(215, 187, 157);

    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-attachment:  fixed;
    color: var(--text-color);
    font-family: 'Montserrat', sans-serif;
    font-size: 8px;
    text-shadow: var(--shadow);
  }


/* --------------> Estilo para títulos <-------------- */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  };


/* --------------> Estilo de enlaces y botones <-------------- */
  a {  
    background-color: var(--background-color);
    color:            var(--text-color);
    border-radius:    15px;
    font-weight:      bold;
    // border:           1px solid var(--text-color);
    text-decoration:  none;
    padding:          6px 10px;
    cursor: none;
    transition:       background-color 0.3s ease, transform 0.3s ease;
    backdrop-filter:  blur(5px); /* Añadir desenfoque en el fondo si se desea */
 };
 a:hover, {
    color:            var(--background-color);
    background-color: var(--text-color);
    transform:        scale(1.1);
  };


/* --------------- Cursor Personalizado <-------------- */
  .custom-cursor {
    position: fixed;
    width: 20px; /* Ajusta el tamaño */
    height: 30px;
    pointer-events: none;
    cursor-pointer: none;
    z-index: 9999;
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
  };


/* --------------- Imágenes responsivas <-------------- */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }


/* --------------- Configuración general de la aplicación <-------------- */
  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }
`;

export default GlobalStyles;
