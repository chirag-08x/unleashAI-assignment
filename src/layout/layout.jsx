import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Sidebar, Navbar, Footer, Loading } from "../components";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
