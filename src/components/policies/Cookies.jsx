import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Contenedor principal de la página
const Container = styled.div`
  padding: 20px;                // Espaciado interno
  max-width: 800px;             // Ancho máximo para mejorar la legibilidad
  margin: 0 auto;               // Centrado horizontal de la página
  font-family: 'Poppins', sans-serif; // Fuente personalizada
`;

// Título de la política de cookies
const Title = styled.h1`
  font-size: 2rem;              // Tamaño de fuente para resaltar el título
  margin-bottom: 20px;          // Espaciado inferior
`;

// Estilos para cada sección de la política de cookies
const Section = styled.section`
  margin-bottom: 40px;          // Espaciado inferior entre secciones
`;

// Botón de regreso a la página principal
const BackButton = styled(Link)`
  display: inline-block;        // Se comporta como un botón
  padding: 10px 20px;           // Espaciado interno del botón
  margin-top: 20px;             // Espaciado superior
  background-color: #000;       // Fondo negro
  color: #fff;                  // Texto blanco
  text-decoration: none;        // Sin subrayado
  border-radius: 5px;           // Bordes redondeados
  transition: background-color 0.3s ease; // Transición de color suave

  &:hover {
    background-color: #333;     // Cambio de color en hover para dar retroalimentación
  }
`;

// Componente de Política de Cookies
const Cookies = () => {
  return (
    <Container>
      <Title>Política de Cookies</Title>
      
      {/* Sección que explica qué son las cookies */}
      <Section>
        <h2>1. ¿Qué son las Cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se colocan en su dispositivo cuando visita nuestro sitio web. Se utilizan para mejorar su experiencia en el sitio.
        </p>
        
        {/* Tipos de cookies utilizadas */}
        <h2>2. Tipos de Cookies que Utilizamos</h2>
        <p>
          Utilizamos cookies para recordar sus preferencias, analizar el tráfico del sitio y mejorar la funcionalidad del sitio web. Esto incluye cookies de sesión y cookies persistentes.
        </p>
        
        {/* Control y gestión de cookies */}
        <h2>3. Cómo Puede Controlar las Cookies</h2>
        <p>
          Puede controlar y gestionar las cookies a través de la configuración de su navegador. Sin embargo, tenga en cuenta que deshabilitar las cookies puede afectar la funcionalidad del sitio web.
        </p>
        
        {/* Modificaciones a la política de cookies */}
        <h2>4. Modificaciones</h2>
        <p>
          Podemos actualizar esta política de cookies en cualquier momento. Los cambios se publicarán en esta página.
        </p>
        <p>Última actualización: [Fecha]</p>
      </Section>
      
      {/* Botón para regresar a la página principal */}
      <BackButton to="/">Volver a la página principal</BackButton>
      
      {/* Enlaces a otras políticas */}
      <nav>
        <Link to="/terminos">Términos y Condiciones</Link> | 
        <Link to="/privacidad">Política de Privacidad</Link>
      </nav>
    </Container>
  );
};

export default Cookies;