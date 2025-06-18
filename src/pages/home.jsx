// \src\pages\Home.jsx
import styled from "styled-components";
import { breakpoints } from "@/styles/breakpoints"; // ✅ asegurate de tener esto
import data from "@/data/pages/home";
import CardHome from "@/components/cards/CardHome";
import Carrusel from "@/components/ui/Carrusel";
import Banner from "@/components/ui/Banner";
import MelaminasSlider from "@/components/ui/MelaminasSlider";
import HerrajesSlider from "@/components/ui/HerrajesSlider";
import EmpapeladosSlider from "@/components/ui/EmpapeladosSlider";

const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 2rem 1rem;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem 1rem;
    gap: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0.5rem;
    gap: 12px;
  }
`;

const Home = () => {
  const { secciones } = data;

  return (
    <HomeContainer>
      <Banner />
      <MelaminasSlider /> {/* 👈 nuevo componente */}
      <Carrusel />
      <EmpapeladosSlider />
      {Object.values(secciones).map((seccion) => (
        <CardHome
        key={seccion.id}
        name={seccion.name}
        description={seccion.description}
        image={seccion.image}
        page={seccion.page}
        />
      ))}
      <HerrajesSlider />  {/* 👈 Nuevo slider de herrajes */}
      <Carrusel />
    </HomeContainer>
  );
};

export default Home;
