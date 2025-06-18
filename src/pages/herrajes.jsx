import React, { useState } from "react";
import styled from "styled-components";
import herrajesData from "@/data/pages/herrajes";

const Herrajes = () => {
  const [filtro, setFiltro] = useState("");
  const [imagenModal, setImagenModal] = useState(null);
  const [imagenesModal, setImagenesModal] = useState([]);
  const [indexModal, setIndexModal] = useState(0);

  const abrirModal = (imagenes, index) => {
    setImagenesModal(imagenes);
    setIndexModal(index);
    setImagenModal(imagenes[index]);
  };

  const cerrarModal = () => {
    setImagenModal(null);
    setImagenesModal([]);
    setIndexModal(0);
  };

  const cambiarImagen = (dir) => {
    const nuevoIndex = (indexModal + dir + imagenesModal.length) % imagenesModal.length;
    setIndexModal(nuevoIndex);
    setImagenModal(imagenesModal[nuevoIndex]);
  };

  return (
    <Container>
      <FiltroInput
        type="text"
        placeholder="Buscar herraje..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value.toLowerCase())}
      />

      {herrajesData.categorias.map((cat) => {
        const productosFiltrados = cat.productos.filter((p) =>
          p.nombre.toLowerCase().includes(filtro)
        );

        if (productosFiltrados.length === 0) return null;

        return (
          <Categoria key={cat.nombre}>
            <Titulo>{cat.nombre}</Titulo>
            <Grilla>
              {productosFiltrados.map((producto) => (
                <Card key={producto.nombre}>
                  <Nombre>{producto.nombre}</Nombre>
                  <Galeria>
                    {producto.imagenes?.map((img, i) => (
                      <Thumb
                        key={i}
                        src={img}
                        alt={producto.nombre}
                        onClick={() => abrirModal(producto.imagenes, i)}
                      />
                    ))}
                  </Galeria>
                </Card>
              ))}
            </Grilla>
          </Categoria>
        );
      })}

      {imagenModal && (
        <Modal onClick={cerrarModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <Cerrar onClick={cerrarModal}>✕</Cerrar>
            <Flecha onClick={() => cambiarImagen(-1)}>&lt;</Flecha>
            <ImagenModal src={imagenModal} alt="Vista ampliada" />
            <Flecha onClick={() => cambiarImagen(1)}>&gt;</Flecha>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Herrajes;


const Container = styled.div`
  padding: 2rem 1rem;
  max-width: 1280px;
  margin: auto;
  color: #1a1a1a;
  font-family: 'Segoe UI', sans-serif;
`;

const FiltroInput = styled.input`
  padding: 12px 18px;
  margin-bottom: 40px;
  width: 100%;
  font-size: 18px;
  border: 1px solid #bbb;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
`;

const Categoria = styled.section`
  margin-bottom: 64px;
`;

const Titulo = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 600;
  color: #2c3e50;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Grilla = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  padding: 16px;
  border-radius: 20px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.08);
  transition: transform 0.2s ease;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Nombre = styled.p`
  font-weight: 600;
  margin-bottom: 12px;
  font-size: 18px;
  color: #34495e;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Galeria = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Thumb = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.08);
    border-color: #3498db;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 20px;
`;

const ModalContent = styled.div`
  position: relative;
  background: #fff;
  padding: 20px;
  max-width: 95vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 30px;
  }
`;

const ImagenModal = styled.img`
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 10px;
`;

const Flecha = styled.button`
  background: none;
  border: none;
  font-size: 36px;
  color: #555;
  cursor: pointer;
  padding: 0 20px;

  &:hover {
    color: #000;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    padding: 0 10px;
  }
`;

const Cerrar = styled.button`
  position: absolute;
  top: 14px;
  right: 20px;
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  color: #999;

  &:hover {
    color: #e74c3c;
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 14px;
    font-size: 26px;
  }
`;