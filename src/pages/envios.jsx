import React from "react";
import styled, { keyframes } from "styled-components";
import data from "@/data/data";

const Envios = () => {
  const enviosData = data.secciones.envios;

  return (
    <EnviosContainer>
      {/* Animación del emoji 🚚💨 */}
      <MovingEmoji>🚚💨</MovingEmoji>

      {/* Contenedor de texto */}
      <TextContainer>
        <h2>¡Libérate de los gastos de envío! 🎉</h2>
        <p>
          Todos los <strong>viernes</strong>, tu pedido se convierte en una experiencia
          aún mejor con <strong>envío GRATIS</strong>. 🚚💨
        </p>
        <p>
          No pierdas esta oportunidad de optimizar tus compras y recibir tus
          productos favoritos <strong>sin costo adicional</strong>.
        </p>
        <p>¡Haz tu pedido ahora y prepárate para disfrutar! ✨</p>
        <p>
          <span>#EnvíoGratis</span> <span>#ViernesDeEnvíos</span>
        </p>
        <p>— en Mega Madera.</p>
      </TextContainer>

      {/* Contenedor de imagen */}
      <ImageContainer>
        <StyledImage src={enviosData.cardHome} alt={enviosData.nombre} />
      </ImageContainer>
    </EnviosContainer>
  );
};

const moveEmoji = keyframes`
  0% { transform: translateX(100vw) translateY(0); }
  25% { transform: translateX(75vw) translateY(20px); }
  50% { transform: translateX(50vw) translateY(-20px); }
  75% { transform: translateX(25vw) translateY(15px); }
  100% { transform: translateX(-100px) translateY(0); }
`;

const EnviosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  background: linear-gradient(135deg, #1e1e1e, #2a2a2a);
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const MovingEmoji = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  font-size: 2rem;
  animation: ${moveEmoji} 6s infinite linear;
  z-index: 10;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 50%;
  color: #fff;
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #57e3c1;
    text-shadow: 0 4px 10px rgba(87, 227, 193, 0.3);
  }

  p {
    margin-bottom: 1rem;

    strong {
      color: #57e3c1;
    }

    span {
      display: inline-block;
      margin-right: 8px;
      background: #333;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.9rem;
      color: #57e3c1;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
`;

export default Envios;
