// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { imagenesMuebles } from "@/data/image/imagenes";

// const MuebleContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   padding: 40px;
//   background: var(--background-color);
//   border-radius: var(--border-radius);
//   box-shadow: var(--shadow);

//   @media (max-width: 768px) {
//     padding: 20px;
//   }
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   text-align: center;
//   color: var(--text-color);
//   margin-bottom: 20px;
//   text-transform: uppercase;
//   letter-spacing: 1.5px;
//   text-shadow: var(--shadow);
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
//   gap: 20px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const TextContainer = styled.div`
//   flex: 1;
//   font-size: 1rem;
//   line-height: 1.8;
//   text-align: justify;
//   max-width: 450px;
//   padding: 10px;
//   background: rgba(255, 255, 255, 0.1);
//   border-radius: var(--border-radius);
//   box-shadow: var(--shadow);
//   color: var(--text-color);
// `;

// const ImagesContainer = styled.div`
//   flex: 2;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//   gap: 15px;

//   img {
//     width: 100%;
//     border-radius: var(--border-radius);
//     box-shadow: var(--shadow);
//     transition: transform 0.3s ease, box-shadow 0.3s ease;

//     &:hover {
//       transform: scale(1.1);
//       box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
//     }

//     cursor: pointer;
//   }
// `;

// const Footer = styled.div`
//   text-align: center;
//   font-size: 0.9rem;
//   color: var(--text-color);
//   margin-top: 20px;
// `;

// const Modal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: rgba(0, 0, 0, 0.8);
//   z-index: 1000;
// `;

// const ModalImage = styled.img`
//   max-width: 90%;
//   max-height: 90%;
//   border-radius: var(--border-radius);
//   box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.7);
//   animation: zoomIn 0.3s ease;

//   @keyframes zoomIn {
//     from {
//       transform: scale(0.8);
//     }
//     to {
//       transform: scale(1);
//     }
//   }
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   background: none;
//   border: none;
//   color: white;
//   font-size: 2rem;
//   cursor: pointer;
//   z-index: 1001;

//   &:hover {
//     color: #ff6b6b;
//   }
// `;

// const Muebles = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleKeyDown = (e) => {
//     if (e.key === "Escape") {
//       setSelectedImage(null);
//     }
//   };

//   useEffect(() => {
//     if (selectedImage) {
//       window.addEventListener("keydown", handleKeyDown);
//     }

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [selectedImage]);

//   return (
//     <MuebleContainer>
//       <Title>Cocina Moderna y Funcional</Title>
//       <ContentWrapper>
//         <TextContainer>
//           <p>
//             Cocina con diseño moderno, líneas minimalistas, acabados en blanco,
//             detalles de madera, y electrodomésticos integrados en acero
//             inoxidable. Elegancia y funcionalidad en un espacio bien iluminado
//             que optimiza el estilo y la comodidad.
//           </p>
//         </TextContainer>
//         <ImagesContainer>
//           {Object.values(imagenesMuebles).map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Mueble moderno ${index + 1}`}
//               onClick={() => setSelectedImage(image)}
//             />
//           ))}
//         </ImagesContainer>
//       </ContentWrapper>
//       <Footer>© 2024 - Cocina Moderna. Todos los derechos reservados.</Footer>

//       {/* Modal para la imagen ampliada */}
//       {selectedImage && (
//         <Modal onClick={() => setSelectedImage(null)}>
//           <ModalImage
//             src={selectedImage}
//             alt="Vista ampliada del mueble"
//             onClick={(e) => e.stopPropagation()}
//           />
//           <CloseButton aria-label="Cerrar modal" onClick={() => setSelectedImage(null)}>
//             ×
//           </CloseButton>
//         </Modal>
//       )}
//     </MuebleContainer>
//   );
// };

// export default Muebles;

import React from 'react'

const muebles = () => {
  return (
    <div>muebles</div>
  )
}

export default muebles