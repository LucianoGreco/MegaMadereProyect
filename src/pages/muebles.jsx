import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import dataMelaminas from '@/data/pages/melaminas';
import Muebles from '@/data/pages/muebles';

const Container = styled.div`

  display: flex;
  flex-direction: row;
  padding: 2rem;
  gap: 1rem;
  height: 150vh;
  box-sizing: border-box;
  background-color:#F4F4F3; /* beige */
  color: black;


  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;


const ContenedorIzquierda = styled.div`
border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60vw; 
`;

const ContenedorSuperiorIzq = styled.div`


border; 1px solid red;
  height: 75%;
  // width: 100%; // Antes estaba en 80%
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const SimuladorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.9); /* Sombra suave */
  border-radius: 15px;
`;


const ImagenGrande = styled.img`
  width: 100%;
  height: 100%;
  // object-fit: contain;
  position: relative;
  z-index: 2;
`;

const FondoDinamico = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const MenuMelaminas = styled.div`
  width: 30%;
  height: 100%;
  overflow-y: auto;
  background-color: #F4F4F3;
  padding: 5px;
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  border-left: 1px solid #ddd;
  z-index: 3;
`;

const ImagenMelamina = styled.img`
  width: 100%;
  height: 90px;
  object-fit: cover;
  margin-bottom: 5px;
  cursor: pointer;
  border: 1px solid #ccc;

  &:hover {
    border: 2px solid #0070f3;
  }
`;

const ContenedorInferiorIzq = styled.div`
  height: 35%;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
  overflow-x: auto;
  
`;

const ImagenMiniatura = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border 0.2s ease-in-out;
  border-radius: 15px;

  &:hover {
    border: 2px solid #0070f3;
  }
`;

const ContenedorDerecha = styled.div`
border: 1px solid red;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30vw;
`;

const ContenedorSuperiorDer = styled.div`
  height: 20%;
  width: 100%;
  font-size: 3rem;
  font-weight: bold;
  padding-top: 30px;
  box-sizing: border-box;
`;

const ContenedorMedioDer = styled.div`
border: 1px solid blue;
  height-max: 40%;
  width: 100%;
  font-size: 1.1rem;
  line-height: 1.6;
  padding: 10px;
  box-sizing: border-box;
`;

const ContenedorInferiorDer = styled.div`
  height: 25%;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const BotonContacto = styled.button`
  padding: 1rem 2rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #005bb5;
  }
`;

const MueblesPage = () => {
  const navigate = useNavigate();

  const producto = {
    nombre: Muebles.tiulo,
    descripcion: Muebles.descripcion,
    imagenChica: Muebles.imagenes.imagenPrimaria,
    galeria: [
      Muebles.imagenes.imagenPrimaria,
      Muebles.imagenes.imageneSecundaria,
      Muebles.imagenes.imagenSumulador
    ]
  };

  const [imagenPrincipal, setImagenPrincipal] = useState(producto.imagenChica);
  const [mostrarMenuMelaminas, setMostrarMenuMelaminas] = useState(false);
  const [fondoSimulador, setFondoSimulador] = useState(null);

  const handleClickMiniatura = (img) => {
    setImagenPrincipal(img);
    if (img === Muebles.imagenes.imagenSumulador) {
      setMostrarMenuMelaminas(true);
    } else {
      setMostrarMenuMelaminas(false);
      setFondoSimulador(null);
    }
  };

  const handleClickMelamina = (img) => {
    setFondoSimulador(img);
  };

  const irAContacto = () => {
    navigate("/contactos");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const imagenesMelaminas = [];
  Object.values(dataMelaminas).forEach(categoria => {
    Object.values(categoria).forEach(subcategoria => {
      subcategoria.forEach(item => {
        if (item.imagenChica) {
          imagenesMelaminas.push(item.imagenChica);
        }
      });
    });
  });

  return (
    <Container>
      <ContenedorIzquierda>

        <ContenedorSuperiorIzq>

          <SimuladorWrapper>
            {fondoSimulador && <FondoDinamico src={fondoSimulador} alt="Fondo dinámico" />}
            <ImagenGrande src={imagenPrincipal} alt="Imagen principal" />
          </SimuladorWrapper>

          <MenuMelaminas visible={mostrarMenuMelaminas}>
            {imagenesMelaminas.map((img, index) => (
              <ImagenMelamina
                key={index}
                src={img}
                alt={`melamina-${index}`}
                onClick={() => handleClickMelamina(img)}
              />
            ))}
          </MenuMelaminas>

        </ContenedorSuperiorIzq>

        <ContenedorInferiorIzq>
          {producto.galeria.map((img, index) => (
            <ImagenMiniatura
              key={index}
              src={img}
              alt={`miniatura-${index}`}
              onClick={() => handleClickMiniatura(img)}
            />
          ))}
        </ContenedorInferiorIzq>

      </ContenedorIzquierda>

      <ContenedorDerecha>
        <ContenedorSuperiorDer>{producto.nombre}</ContenedorSuperiorDer>
        <ContenedorMedioDer>{producto.descripcion}</ContenedorMedioDer>
        <ContenedorInferiorDer>
          <BotonContacto onClick={irAContacto}>Contactar</BotonContacto>
        </ContenedorInferiorDer>
      </ContenedorDerecha>
    </Container>
  );
};

export default MueblesPage;
