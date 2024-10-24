import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { Hero, Clients } from "./components";

const Products = () => {
  useEffect(() => {
    document.title = "UnleashAI - Products";
  }, []);

  return (
    <Wrapper>
      <Hero />
      <Clients />
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
  padding: 3rem 0;
`;
