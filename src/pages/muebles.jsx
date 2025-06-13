import React, { useState } from "react";
import styled from "styled-components";
import { mueblesData } from "@/data/muebles"; // Asegúrate que esta ruta esté bien

const Muebles = () => {
  const [filtro, setFiltro] = useState("");
  const [imagenModal, setImagenModal] = useState(null);
  const [indexModal, setIndexModal] = useState(0);

  const mueblesFiltrados = mueblesData.filter((mueble) =>
    mueble.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleOpenModal = (imagenes, index) => {
    setImagenModal(imagenes);
    setIndexModal(index);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setIndexModal((prev) => (prev + 1) % imagenModal.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setIndexModal((prev) =>
      prev === 0 ? imagenModal.length - 1 : prev - 1
    );
  };

  const handleClose = () => {
    setImagenModal(null);
  };

  return (
    <Container>
      <FilterInput
        type="text"
        placeholder="Buscar mueble por nombre..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <Grid>
        {mueblesFiltrados.map((mueble) => (
          <Card key={mueble.id}>
            <CardImage
              src={mueble.imagenes[0]}
              alt={mueble.nombre}
              onClick={() => handleOpenModal(mueble.imagenes, 0)}
            />
            <CardContent>
              <Title>{mueble.nombre}</Title>
              <Description>{mueble.descripcion}</Description>
              <Medidas>Medidas: {mueble.medidas}</Medidas>
              <Gallery>
                {mueble.imagenes.slice(1, 4).map((img, idx) => {
                  const realIndex = idx + 1;
                  return (
                    <Thumb
                      key={idx}
                      src={img}
                      alt={`${mueble.nombre} ${realIndex + 1}`}
                      onClick={() =>
                        handleOpenModal(mueble.imagenes, realIndex)
                      }
                    />
                  );
                })}
              </Gallery>
            </CardContent>
          </Card>
        ))}
      </Grid>

      {imagenModal && (
        <ModalOverlay onClick={handleClose}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleClose}>✕</CloseButton>
            <ModalImage
              src={imagenModal[indexModal]}
              alt={`Imagen ${indexModal + 1}`}
            />
            <ImageCounter>
              {indexModal + 1} / {imagenModal.length}
            </ImageCounter>
            <NavButton left onClick={handlePrev}>‹</NavButton>
            <NavButton onClick={handleNext}>›</NavButton>
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Muebles;

// =======================
// styled-components
// =======================

const Container = styled.div`
  padding: 2rem 1rem;

  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
  }
`;

const FilterInput = styled.input`
  padding: 0.5rem 1rem;
  width: 100%;
  max-width: 400px;
  margin-bottom: 2rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: 480px) {
    height: 180px;
  }
`;

const CardContent = styled.div`
  color: #555;
  padding: 1rem;

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
  text-transform: capitalize;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const Medidas = styled.p`
  font-weight: bold;
  margin-top: 0.5rem;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const Gallery = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const Thumb = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border-color: #0070f3;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const Modal = styled.div`
  position: relative;
  background: white;
  border-radius: 12px;
  padding: 1rem;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;

  @media (max-width: 480px) {
    max-height: 60vh;
  }
`;

const ImageCounter = styled.div`
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: #333;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: -2rem;" : "right: -2rem;")}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.85);
  border: none;
  font-size: 2rem;
  padding: 0.2rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: white;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    ${(props) => (props.left ? "left: 0.3rem;" : "right: 0.3rem;")}
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.7rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 1.2rem;
    top: 0.3rem;
    right: 0.5rem;
  }
`;