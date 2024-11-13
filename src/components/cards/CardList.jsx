// // CardList.jsx
// import React from 'react';
// import styled from 'styled-components';
// import Card from './Card'; // Asegúrate de que el componente Card esté correctamente implementado e importado

// // Estilos para el contenedor de la lista de tarjetas
// const CardListContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr); // Cinco columnas
//   gap: 16px;
//   padding: 16px;
// `;

// const CardList = ({ data }) => {
//   return (
//     <CardListContainer>
//       {data.map((item) => (
//         <Card key={item.id} {...item} />
//       ))}
//     </CardListContainer>
//   );
// };

// export default CardList;
