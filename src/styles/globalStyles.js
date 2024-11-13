// src/styles/globalStyles.js
import { createGlobalStyle } from "styled-components";
import "normalize.css";
import backgroundImage from "../assets/Images/background.jpg";

const GlobalStyles = createGlobalStyle`
  /* Estilos globales básicos */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;


    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    font-size: 1.2rem;

  }

    a,button,{
     text-decoration: none;
    color: inherit;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    margin-bottom: 20px; // Espacio de 20px desde el borde inferior de la tarjeta
    padding: 10px 20px;
    // font-size: 1,1rem;
    font-weight: bold;
  
    }
     &:hover {
    color: #aaa;
    }

`;

export default GlobalStyles;
