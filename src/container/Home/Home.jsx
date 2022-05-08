import React from "react";
import PropTypes from "prop-types";

import Navbar from "components/Navbar/Navbar";

function Home(props) {
  return (
    <div className="Home-container">
      <Navbar />
      <div className="overlay">
        <p>yizzzo</p>
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
