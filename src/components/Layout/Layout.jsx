import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  const isNotProfilePage = pathname !== "/profile";
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      {isNotProfilePage && <Footer />}
    </>
  );
};

export default Layout;
