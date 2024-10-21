import { Typography } from "@mui/material";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "UnleashAI - Home";
  }, []);

  return <div>Home</div>;
};

export default Home;
