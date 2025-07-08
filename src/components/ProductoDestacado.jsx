import React, { useState } from "react";
import styled from "styled-components";
import { breakpoints } from "@/styles/breakpoints";

const ProductoDestacado = ({
  producto,
  categoria = "",
  path = "",
  construirRutaImagen,
}) => {
  const [imagenActiva, setImagenActiva] = useState(0);
  const imagenes = Array.isArray(producto.imagenes) ? producto.imagenes : [];

  let imagenSrc = "";
  if (construirRutaImagen) {
    if (categoria || path) {
      imagenSrc = construirRutaImagen(
        imagenes[imagenActiva],
        categoria || path
      );
    } else {
      imagenSrc = construirRutaImagen(imagenes[imagenActiva]);
    }
  }

  return (
    <Destacado>
      <Titulo>Producto destacado</Titulo>
      <Card>
        {imagenSrc && (
          <Imagen src={imagenSrc} alt={producto.nombre} />
        )}
        <Info>
          <Nombre>{producto.nombre}</Nombre>
          <Descripcion>{producto.descripcion || "Sin descripción"}</Descripcion>
        </Info>

        {imagenes.length > 1 && (
          <Miniaturas>
            {imagenes.map((img, idx) => {
              const miniaturaSrc =
                categoria || path
                  ? construirRutaImagen(img, categoria || path)
                  : construirRutaImagen(img);

              return (
                <Miniatura
                  key={idx}
                  src={miniaturaSrc}
                  alt={`Vista ${idx + 1} de ${producto.nombre}`}
                  onClick={() => setImagenActiva(idx)}
                  $activa={idx === imagenActiva}
                />
              );
            })}
          </Miniaturas>
        )}
      </Card>
    </Destacado>
  );
};

export default ProductoDestacado;

// 🎨 styled-components

const Destacado = styled.section`
  margin: 1rem auto;
  padding: 1rem;
  background: #fafafa;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 800px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.8rem;
  }
`;

const Titulo = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Imagen = styled.img`
  max-width: 100%;
  max-height: 50vh;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.tablet}) {
    max-height: 40vh;
  }
`;

const Info = styled.div`
  margin-bottom: 1rem;
`;

const Nombre = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const Descripcion = styled.p`
  font-size: 1rem;
  color: #555;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
  }
`;

const Miniaturas = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Miniatura = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 4px;
  border: 2px solid ${(props) => (props.$activa ? "#000" : "#ccc")};
  cursor: pointer;
  transition: border 0.3s ease;

  &:hover {
    border-color: #333;
  }
`;
