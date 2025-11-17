import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from "react-router";
import Footer from '../Shared/Footer/Footer';

const RootLayout = () => {
    return (
      <div>
        <Navbar />
        <main className='min-h-screen'>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
};

export default RootLayout;