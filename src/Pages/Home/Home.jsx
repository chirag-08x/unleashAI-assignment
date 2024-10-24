import React, { useEffect } from "react";
import { Hero, Services, ProductsList, Testers } from "./components";

const Home = () => {
  useEffect(() => {
    document.title = "UnleashAI - Home";
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <ProductsList />
      <Testers />
    </div>
  );
};

export default Home;
