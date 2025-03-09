import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="my-bg flex flex-col min-h-screen">
      <NavBar />
      <main className=" mb-10 flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
