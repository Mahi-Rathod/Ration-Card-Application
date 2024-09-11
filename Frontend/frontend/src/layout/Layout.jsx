import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/home/SplashScreen';

import { Outlet } from "react-router-dom";
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function Layout() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showSplash && <SplashScreen />}
      {!showSplash &&
        <div className={`transition-opacity duration-500 ease-in`}>
          <Header />
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      }
    </>
  )
}

export default Layout