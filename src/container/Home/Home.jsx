import PropTypes from "prop-types";

import CallToAction from "container/Home/CallToAction"

import Productslist from "components/ProductsList/ProductsList";

function Home({ hideMobileProducts, isDesktop }) {


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
