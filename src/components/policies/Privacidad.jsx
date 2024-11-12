import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Contenedor principal de la página de privacidad
const Container = styled.div`
  padding: 20px;                // Espaciado interno para mayor legibilidad
  max-width: 800px;             // Limita el ancho para un diseño más enfocado
  margin: 0 auto;               // Centra el contenedor horizontalmente
  font-family: 'Poppins', sans-serif; // Fuente personalizada
`;

// Estilo del título de la página
const Title = styled.h1`
  font-size: 2rem;              // Tamaño grande para resaltar el título
  margin-bottom: 20px;          // Espaciado inferior
`;

// Estilo para las secciones de contenido
const Section = styled.section`
  margin-bottom: 40px;          // Espaciado entre secciones
`;

// Botón para regresar a la página principal
const BackButton = styled(Link)`
  display: inline-block;        // Se comporta como un botón
  padding: 10px 20px;           // Espaciado interno del botón
  margin-top: 20px;             // Espaciado superior
  background-color: #000;       // Fondo negro para contraste
  color: #fff;                  // Texto blanco
  text-decoration: none;        // Sin subrayado en el texto
  border-radius: 5px;           // Bordes redondeados
  transition: background-color 0.3s ease; // Transición suave en hover

  &:hover {
    background-color: #333;     // Cambio de color en hover
  }
`;

// Componente principal de la política de privacidad
const Privacidad = () => (
  <Container>
    <Title>Política de Privacidad</Title>
    
    {/* Sección de recopilación de información */}
    <Section>
      <h2>1. Información que Recopilamos</h2>
      <p>
        Recopilamos información personal que usted nos proporciona al usar nuestro sitio web, como nombre y correo electrónico.
      </p>

      {/* Uso de la información */}
      <h2>2. Cómo Usamos su Información</h2>
      <p>
        Usamos su información para mejorar nuestros servicios y comunicarnos sobre actualizaciones.
      </p>

      {/* Medidas de seguridad */}
      <h2>3. Seguridad</h2>
      <p>
        Implementamos medidas de seguridad para proteger su información, aunque no podemos garantizar seguridad absoluta.
      </p>

      {/* Modificaciones a la política */}
      <h2>4. Modificaciones</h2>
      <p>
        Podemos actualizar esta política en cualquier momento. Los cambios se publicarán en esta página.
      </p>
      <p>Última actualización: [Fecha]</p>
    </Section>

    {/* Botón para volver a la página principal */}
    <BackButton to="/">Volver a la página principal</BackButton>

    {/* Enlaces a otras políticas */}
    <nav>
      <Link to="/terminos">Términos y Condiciones</Link> | 
      <Link to="/cookies">Política de Cookies</Link>
    </nav>
  </Container>
);

export default Privacidad;