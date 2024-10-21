import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";

const Home = lazy(() => import("../Pages/Home/Home"));
const Products = lazy(() => import("../Pages/Products/Products"));
const Error = lazy(() => import("../Pages/Error/Error"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
