import React, { useEffect } from "react";
import { Hero, Services } from "./components";

const Home = () => {
  useEffect(() => {
    document.title = "UnleashAI - Home";
  }, []);

  return (
    <div>
      <Hero />
      <Services />
    </div>
  );
};

export default Home;
