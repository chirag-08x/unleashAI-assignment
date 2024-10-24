import React, { useEffect } from "react";
import { Hero, Services, ProductsList } from "./components";

const Home = () => {
  useEffect(() => {
    document.title = "UnleashAI - Home";
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <ProductsList />
    </div>
  );
};

export default Home;
