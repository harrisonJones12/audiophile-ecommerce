import "./App.scss";
import { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import Navbar from "components/Navbar/Navbar";
import Home from "container/Home/Home";
import Cart from "container/Cart/Cart";

function App() {

  const [hideMobileProducts, sethideMobileProducts] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [])
  /** 
  checks if screen is desktop width, 
  this is needed to render the desktopNavItems in the <NavBar /> Component
   */
  useEffect(() => {
    if (window.innerWidth >= 1366) {
      setIsDesktop(true)
    }
  }, [])

  //resets mobile navigation state  
  useEffect(() => {
    sethideMobileProducts(true);
  }, [isDesktop])

  const handleResize = () => {

    if (window.innerWidth >= 1366) {
      setIsDesktop(true)
    } else {
      setIsDesktop(false);
    }
  }

  const hideMobileProductsMenu = () => {

    if (hideMobileProducts) {
      sethideMobileProducts(false);
    } else {
      sethideMobileProducts(true);
    }

  };

  return (
    <div className="App">
      <Navbar hideMobileProductsMenu={hideMobileProductsMenu} hideMobileProducts={hideMobileProducts} isDesktop={isDesktop} />
      <Routes>
        <Route path="/" element={<Home hideMobileProducts={hideMobileProducts} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
