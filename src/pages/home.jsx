// \src\pages\Home.jsx
import React    from "react";
import styled   from "styled-components";
import data     from "@/data/data";

import CardHome from "@/components/cards/CardHome";
import Carrusel from "@/components/ui/Carrusel";
// import Slider   from "@/components/ui/Slider";
import Banner   from "@/components/ui/Banner";


const HomeContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
`;

const Home = () => {
  const { secciones } = data;

  return (
    <HomeContainer>
      <Banner/>
      {/* <Carrusel />
      <Slider /> */}

      {Object.values(secciones).map((seccion) => (
        <CardHome
          key={seccion.id}
          name={seccion.name}
          description={seccion.description}
          image={seccion.image}
          page={seccion.page}
        />
      ))}
      <Carrusel />
    </HomeContainer>
  );
};

export default Home;
