// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// // Definición de los estilos para el menú de navegación
// const Menu = styled.ul`
//   display: flex;          // Coloca los elementos del menú en una fila horizontal
//   list-style: none;       // Elimina los puntos de lista predeterminados
//   margin: 0;              // Remueve el margen
//   padding: 0;             // Remueve el relleno
// `;

// // Componente NavMenu que sirve como contenedor para los elementos de navegación
// // Se espera que el contenido sea pasado como "children" (hijos) del componente NavMenu
// const NavMenu = ({ children }) => (
//   <Menu role="menu" aria-label="Menú de navegación">
//     {children}
//   </Menu>
// );

// // Validación de tipos de datos para mayor robustez en el desarrollo
// NavMenu.propTypes = {
//   children: PropTypes.node.isRequired,  // Asegura que se reciban elementos para el menú
// };

// export default NavMenu;