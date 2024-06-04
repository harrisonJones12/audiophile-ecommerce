import PropTypes from "prop-types";

import { useEffect } from "react";

import CallToAction from "container/Home/CallToAction"

import Productslist from "components/ProductsList/ProductsList";

function Home({ hideMobileProducts, isDesktop }) {

  useEffect(() => {
    console.log('it works');
  }, []);


  return (
    <div className="Home-container" data-testid="home-container">

      {hideMobileProducts || isDesktop ? null : (
        <div className="overlay">
        </div>
      )}

      {/* Add home content here */}

      <CallToAction />
      <Productslist />

      {/* shop buttons */}

      {/* main content */}

    </div>
  );
}

Home.propTypes = {
  hideMobileProducts: PropTypes.bool,
  isDesktop: PropTypes.bool
};

export default Home;
