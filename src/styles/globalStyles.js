import { createGlobalStyle } from "styled-components";
import "normalize.css"; // Normaliza los estilos predeterminados del navegador para garantizar consistencia.
// import backgroundImage from "../assets/Images/background.jpg"; // Importa la imagen de fondo que se usará globalmente.
import { backgroundPage } from "../data/palcas/imagenes.js";

// Importa las fuentes necesarias desde Google Fonts.
import "@fontsource/playfair-display"; // Fuente para títulos
import "@fontsource/montserrat"; // Fuente para textos secundarios




const GlobalStyles = createGlobalStyle`
                                                                  /* Variables globales */
:root {
    --text-color:               rgba(255, 255, 255, 0.8);         /* Define el color del texto con opacidad. */
    --hover-background-color:   rgba(255, 255, 255, 0.8);         /* Fondo claro para estados hover. */
    --hover-text-color:         rgba(0, 0, 0, 0.9);               /* Color del texto cuando el usuario pasa el mouse por encima. */
    --background-color:         rgba(0, 0, 0, 0.8);               /* Fondo oscuro semitransparente. */
    --shadow: 1px 1px 3px       rgba(0, 0, 0, 0.5);               /* Define una sombra sutil para dar profundidad. */
    --border-radius: 5px;                                         /* Esquinas redondeadas para elementos como botones. */
  }

                                                                  /* Reset básico */
  * {
    margin: 0;                                                    /* Elimina los márgenes predeterminados de todos los elementos. */
    padding: 0;                                                   /* Elimina el relleno predeterminado de todos los elementos. */
    box-sizing: border-box;                                       /* Hace que el tamaño de los elementos incluya bordes y relleno. */
  }

                                                                 /* Configuración base */
  html, body {
    background: url(${backgroundPage.Home}) center/cover fixed no-repeat; /* Imagen de fondo centrada, que ocupa todo el espacio y no se repite. */
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));          /* Capa opaca para dar efecto de transparencia. */
    background-attachment: fixed;                                     /* Mantiene el fondo fijo mientras se desplaza. */
    color: var(--text-color);                                         /* Aplica el color de texto definido en las variables globales. */
    font-family: 'Montserrat', sans-serif;                            /* Define la tipografía base para el cuerpo del texto. */
    font-size: 11px;                                                  /* Define el tamaño base del texto. */
    height: 100%;                                                     /* Hace que el cuerpo ocupe el 100% de la altura de la ventana. */
    //  overflow-x: hidden;                  /* Oculta el desplazamiento horizontal.  <- Este no funciona  ❌ */
    text-shadow: var(--shadow);                                       /* Aplica una sombra al texto global. */
    touch-action: manipulation;                                       /* Optimiza interacciones táctiles. */
    width: 100%;   
    text-shadow: var(--shadow);              /* Hace que el cuerpo ocupe el 100% del ancho de la ventana. */  
  font-family: 'Playfair Display', serif; /* Para títulos */
font-family: 'Montserrat', sans-serif; /* Para texto base */
    }

  /* Estilo para títulos */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;   /* Aplica la fuente para títulos. */
    color: var(--text-color);
    text-shadow: var(--shadow);
  }

  /* Estilo de enlaces y botones */
  button, li, Link {
  backdrop-filter: blur(10px);                    // Aplica un desenfoque al fondo del botón para un efecto visual.
  background-color: var(--background-color);  /* Fondo oscuro semitransparente. */
  border-radius: var(--border-radius);        /* Aplica bordes redondeados. */
  color: var(--text-color);                   /* Color del texto. */
  font-weight: bold;                          /* Hace que el texto sea negrita. */
  text-decoration: none;                      /* Elimina subrayados en enlaces. */
  padding: 5px 10px;                         /* Añade relleno interno. */
  text-shadow: var(--shadow);                 /* Aplica una sombra sutil al texto. */
  list-style-type: none;
  text-decoration: none; 
  cursor: pointer;                                // Cambia el cursor a un puntero para indicar que es clickeable.
border: none;   
}

/* Estilo de hover para enlaces, botones, y enlaces de navegación */
 button:hover,  li:hover,  {
  color: var(--background-color);            /* Invierte el color del texto al pasar el mouse. */
  background-color: var(--text-color);       /* Invierte el fondo al pasar el mouse. */
}

  /* Imágenes responsivas */
  img {
    max-width: 100%;                                            /* Asegura que las imágenes no excedan el ancho de su contenedor. */
    height: auto;                                               /* Mantiene las proporciones originales de la imagen. */
    display: block;                                             /* Elimina el espacio inferior causado por el comportamiento inline de las imágenes. */
  }

  /* Configuración general de la aplicación */
  .App {
    display: flex;                                              /* Usa un modelo de caja flexible para los hijos. */
    flex-direction: column;                                     /* Ordena los hijos en una columna. */
    min-height: 100vh;                                          /* Asegura que la aplicación ocupe al menos toda la altura de la ventana. */
    width: 100%;                                                /* Asegura que la aplicación ocupe todo el ancho de la ventana. */
  }
`;

export default GlobalStyles;                                   // Exporta los estilos globales para usarlos en toda la aplicación.
