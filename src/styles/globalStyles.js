// src/styles/globalStyles.js
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
    color: #333;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
