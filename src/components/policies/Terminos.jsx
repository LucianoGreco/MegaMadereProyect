import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Contenedor principal de la página de términos
const Container = styled.div`
  padding: 20px;                // Espaciado interno para un mejor diseño
  max-width: 800px;             // Limita el ancho para mayor legibilidad
  margin: 0 auto;               // Centra el contenedor horizontalmente
  font-family: 'Poppins', sans-serif; // Fuente personalizada
`;

// Título de la página
const Title = styled.h1`
  font-size: 2rem;              // Tamaño grande para el título
  margin-bottom: 20px;          // Espaciado inferior
`;

// Estilo para cada sección del contenido
const Section = styled.section`
  margin-bottom: 40px;          // Espaciado entre secciones
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
  transition: background-color 0.3s ease; // Transición de color suave en hover

  &:hover {
    background-color: #333;     // Cambio de color en hover
  }
`;

// Componente principal de términos y condiciones
const Terminos = () => (
  <Container>
    <Title>Términos y Condiciones</Title>
    
    {/* Sección de aceptación de términos */}
    <Section>
      <h2>1. Aceptación de los Términos</h2>
      <p>
        Al utilizar nuestro sitio, acepta estos términos y condiciones en su totalidad.
      </p>

      {/* Uso del sitio web */}
      <h2>2. Uso del Sitio Web</h2>
      <p>
        Debe usar el sitio de acuerdo con la ley y estos términos. No debe dañar el sitio web.
      </p>

      {/* Propiedad intelectual */}
      <h2>3. Propiedad Intelectual</h2>
      <p>
        Todo el contenido del sitio web es propiedad de [Su Empresa] y está protegido por leyes de propiedad intelectual.
      </p>

      {/* Limitación de responsabilidad */}
      <h2>4. Limitación de Responsabilidad</h2>
      <p>
        No somos responsables de ningún daño resultante del uso del sitio web.
      </p>

      {/* Modificaciones de los términos */}
      <h2>5. Modificaciones</h2>
      <p>
        Nos reservamos el derecho de modificar estos términos en cualquier momento.
      </p>
      <p>Última actualización: [Fecha]</p>
    </Section>

    {/* Botón para regresar a la página principal */}
    <BackButton to="/">Volver a la página principal</BackButton>

    {/* Enlaces a otras políticas */}
    <nav>
      <Link to="/privacidad">Política de Privacidad</Link> | 
      <Link to="/cookies">Política de Cookies</Link>
    </nav>
  </Container>
);

export default Terminos;