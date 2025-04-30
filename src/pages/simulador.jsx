// import React, { useState } from "react";
// import styled from "styled-components";
// import NavItem from "../components/layout/navbar/NavItem.jsx";
// import Simulador from "../components/ui/Simulador.jsx";
// import menuData from "@/data/components/melaminas.js";
// import data from "@/data/data.js";

// const fondoAmaranto = {
//   imagenGrande: "ruta/a/la/imagen/amaranto.png",
//   nombre: "Amaranto",
// };

// // Contenedor principal de la página
// const PageContainer = styled.div`
//   display: flex;
//   width: 100%; /* Asegura que ocupe el ancho completo */
//   height: 80vh;
//   background-color: #f5f5f5; /* Fondo claro para contraste */

//   @media (max-width: 768px) {
//     flex-direction: column; /* Cambia a disposición vertical en móviles */
//     height: auto; /* Ajusta la altura automáticamente */
//   }
// `;

// // Contenedor del simulador
// const SimuladorContainer = styled.div`
//   flex-grow: 1; /* Ocupa el espacio restante */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #eaeaea; /* Fondo para destacar el simulador */
//   border-left: 2px solid #ddd; /* Añade una separación entre menú y simulador */

//   @media (max-width: 768px) {
//     height: 60vh; /* Ajusta la altura en dispositivos móviles */
//     border-left: none; /* Quita la separación en móviles */
//     border-top: 2px solid #ddd; /* Añade separación superior */
//   }
// `;

// const simulador = () => {
//   const [fondoSeleccionado, setFondoSeleccionado] = useState(fondoAmaranto);

//   return (
//     <PageContainer>
//       {/* Menú de navegación */}
//       <NavItem
//         menuData={Object.values(menuData)} // Asegúrate de convertir el objeto en array
//         setCardData={setFondoSeleccionado}
//         style={{ width: "40%" }} // Ajusta el ancho en escritorio
//       />

//       {/* Contenedor del simulador */}
//       <SimuladorContainer>
//         <Simulador
//           background={data.secciones.simulador.backgroundPage}
//           fondoSeleccionado={fondoSeleccionado}
//         />
//       </SimuladorContainer>
//     </PageContainer>
//   );
// };

// export default simulador;


import React from 'react'

const simulador = () => {
  return (
    <div>simulador</div>
  )
}

export default simulador