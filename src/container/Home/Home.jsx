import React, { useState } from "react";

import Navbar from "components/Navbar/Navbar";

function Home() {
  const [hideMobileProducts, sethideMobileProducts] = useState(false);

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
