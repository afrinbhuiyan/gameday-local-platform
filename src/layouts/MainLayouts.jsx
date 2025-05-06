import React from "react";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayouts = () => {
  return (
    <div className="relative min-h-screen">
      <ToastContainer position="top-right" theme="light" />
      <header className="sticky top-0 z-50">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayouts;
