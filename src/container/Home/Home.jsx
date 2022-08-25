import React, { useState, useEffect } from "react";

import Navbar from "components/Navbar/Navbar";
import Productslist from "components/ProductsList/ProductsList";

function Home() {
  const [hideMobileProducts, sethideMobileProducts] = useState(true);
  const [isDesktop, setisDesktop] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", handleResize);
   }, [])

   //resets mobile navigation state
   useEffect(() => {
    sethideMobileProducts(true);
   }, [isDesktop])
  
    const handleResize = () => {
        
      if (window.innerWidth >= 1366) {
        setisDesktop(true)
      } else {
        setisDesktop(false);
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
      <Navbar hideMobileProductsMenu={hideMobileProductsMenu} hideMobileProducts={hideMobileProducts} isDesktop={isDesktop} Productslist={<Productslist isDesktop={isDesktop} />} />
      {hideMobileProducts || isDesktop ? null : (
        <div className="overlay">
        </div>
      )}
    </div>
  );
}

Home.propTypes = {};

export default Home;
