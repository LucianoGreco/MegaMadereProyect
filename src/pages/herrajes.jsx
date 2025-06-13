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
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  color: black;
`;

const FiltroInput = styled.input`
  padding: 10px 16px;
  margin-bottom: 30px;
  width: 100%;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
`;

const Categoria = styled.section`
  margin-bottom: 60px;
`;

const Titulo = styled.h2`
  font-size: 26px;
  margin-bottom: 20px;
`;

const Grilla = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;

const Card = styled.div`
  background: #f9f9f9;
  padding: 12px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
`;

const Nombre = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Galeria = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Thumb = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #ccc;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  max-width: 80vw;
  max-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

const ImagenModal = styled.img`
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
`;

const Flecha = styled.button`
  background: none;
  border: none;
  font-size: 36px;
  color: #333;
  cursor: pointer;
  margin: 0 20px;
`;

const Cerrar = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
`;
