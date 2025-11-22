import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";
import { ThemeProvider } from "../Context/ThemeContext";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default RootLayout;
