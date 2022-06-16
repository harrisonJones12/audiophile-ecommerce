import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Navbar from "components/Navbar/Navbar";

function Home(props) {
  const [hideMobileProducts, sethideMobileProducts] = useState(false);

  // useEffect(() => {
  //   sethideMobileProducts(false);
  // }, [hideMobileProducts]);

  return (
    <div className="Home-container">
      <Navbar
        sethideMobileProducts={sethideMobileProducts}
        hideMobileProducts={hideMobileProducts}
      />
      {hideMobileProducts ? null : (
        <div className="overlay">
          <p>yizzzo</p>
        </div>
      )}
    </div>
  );
}

Home.propTypes = {};

export default Home;
