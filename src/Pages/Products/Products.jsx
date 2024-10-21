import React, { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    document.title = "UnleashAI - Products";
  }, []);

  return <div>Products</div>;
};

export default Products;
