// \src\components\cards\CardHome.jsx:
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "@/data/data";  // Importa los datos

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Dos columnas */
  grid-template-rows: auto auto auto; /* Tres filas */
  grid-template-areas: 
    "novedades simulador"
    "herrajes simulador"
    "melaminas melaminas"
    "muebles contactos"
    "muebles envios";
  gap: 5px;
  padding: 5px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Una sola columna en pantallas pequeñas */
    grid-template-areas: 
      "novedades"
      "simulador"
      "herrajes"
      "melaminas"
      "muebles"
      "contactos"
      "envios";
  }
`;

const Card = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: var(--border-radius);
  padding: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  grid-area: ${(props) => props.area};

  /* Altura de las tarjetas según su área */
  height: ${(props) =>
    props.area === "simulador" || props.area === "muebles" ? "410px" : "200px"};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardHome = () => {
  // Definir las áreas del grid para cada sección
  const areas = {
    novedades: "novedades",
    simulador: "simulador",
    herrajes: "herrajes",
    melaminas: "melaminas",
    muebles: "muebles",
    contactos: "contactos",
    envios: "envios",
  };

  return (
    <Container>
      {Object.values(data.secciones).map((section) => (
        <Card
          background={section.cardHome}  // Asignación dinámica de la imagen de fondo
          key={section.id}
          area={areas[section.nombre.toLowerCase()]}  // Asignación dinámica del área en el grid
        >
          <Link to={`/${section.pagina}`}>{section.nombre}</Link>  {/* Ruta a la página */}
        </Card>
      ))}
    </Container>
  );
};

export default CardHome;
