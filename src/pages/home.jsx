// src/pages/Home.jsx
import React from "react";
import CardHome from "../components/cards/CardHome.jsx";
import Carrusel from "../components/ui/Carrusel.jsx";
import Banner from "../components/layout/Banner.jsx";
import Slider from "../components/ui/Slider.jsx";

const Home = () => {
  return (
    <>
      <Banner /> 
      <Carrusel />
      <Slider />
      <CardHome />
      <Carrusel />
    </>
  );
};

export default Home;
