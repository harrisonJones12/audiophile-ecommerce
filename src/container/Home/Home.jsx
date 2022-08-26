import React, { useState, useEffect } from "react";

import Navbar from "components/Navbar/Navbar";

function Home() {
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
    <div className="Home-container">
      <Navbar hideMobileProductsMenu={hideMobileProductsMenu} hideMobileProducts={hideMobileProducts} isDesktop={isDesktop} />
      {hideMobileProducts || isDesktop ? null : (
        <div className="overlay">
        </div>
      )}
    </div>
  );
}

Home.propTypes = {};

export default Home;
