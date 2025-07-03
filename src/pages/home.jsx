import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { breakpoints } from "@/styles/breakpoints";

import {
  getHerrajes,
  getMelaminas,
  getRevestimientosNormalizados,
} from "@/api/api";

import Banner from "@/components/ui/Banner";
import CardHome from "@/components/cards/CardHome";
import Slider from "@/components/ui/Slider";
import data from "@/data/pages/home";

const PAGE_SIZE = 6;

const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 2rem 1rem;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem 1rem;
    gap: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem 0.5rem;
    gap: 12px;
  }
`;

const Home = () => {
  const [melaminasFull, setMelaminasFull] = useState([]);
  const [melaminas, setMelaminas] = useState([]);
  const [melaminasPage, setMelaminasPage] = useState(1);

  const [herrajesFull, setHerrajesFull] = useState([]);
  const [herrajes, setHerrajes] = useState([]);
  const [herrajesPage, setHerrajesPage] = useState(1);

  const [revestimientosFull, setRevestimientosFull] = useState([]);
  const [revestimientos, setRevestimientos] = useState([]);
  const [revestimientosPage, setRevestimientosPage] = useState(1);

  useEffect(() => {
    const cargar = async () => {
      try {
        const [melRes, herRes, revRes] = await Promise.all([
          getMelaminas(),
          getHerrajes(),
          getRevestimientosNormalizados(),
        ]);

        console.log("✅ Melaminas response:", melRes.data);
        console.log("✅ Herrajes response:", herRes.data);
        console.log("✅ Revestimientos response:", revRes.data);

        const mel = Array.isArray(melRes.data?.data) ? melRes.data.data : [];
        const her = Array.isArray(herRes.data?.data) ? herRes.data.data : [];
        const rev = Array.isArray(revRes.data) ? revRes.data : [];

        setMelaminasFull(mel);
        setHerrajesFull(her);
        setRevestimientosFull(rev);

        setMelaminas(mel.slice(0, PAGE_SIZE));
        setHerrajes(her.slice(0, PAGE_SIZE));
        setRevestimientos(rev.slice(0, PAGE_SIZE));
      } catch (err) {
        console.error("❌ Error al cargar productos:", err);
      }
    };

    cargar();
  }, []);

  const loadMore = (fullData, currentPage, setPage, setVisible) => {
    const nextPage = currentPage + 1;
    const nextItems = fullData.slice(0, nextPage * PAGE_SIZE);
    setPage(nextPage);
    setVisible(nextItems);
  };

  return (
    <HomeContainer>
      <Banner />

      <Slider
        titulo="Herrajes"
        data={herrajes}
        categoriaKey="categoria"
        productosKey="productos"
        onLoadMore={() => loadMore(herrajesFull, herrajesPage, setHerrajesPage, setHerrajes)}
      />
      <Slider
        titulo="Melaminas"
        data={melaminas}
        categoriaKey="categoria"
        productosKey="productos"
        onLoadMore={() => loadMore(melaminasFull, melaminasPage, setMelaminasPage, setMelaminas)}
      />
      <Slider
        titulo="Revestimientos"
        data={revestimientos}
        categoriaKey="categoria"
        productosKey="productos"
        onLoadMore={() => loadMore(revestimientosFull, revestimientosPage, setRevestimientosPage, setRevestimientos)}
      />

      {Object.values(data.secciones).map((seccion) => (
        <CardHome
          key={seccion.id}
          name={seccion.name}
          description={seccion.description}
          image={seccion.image}
          page={seccion.page}
        />
      ))}
    </HomeContainer>
  );
};

export default Home;
