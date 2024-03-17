import PropTypes from "prop-types";

import CallToAction from "container/Home/CallToAction"

function Home({ hideMobileProducts, isDesktop }) {


  return (
    <div className="Home-container" data-testid="home-container">

      {hideMobileProducts || isDesktop ? null : (
        <div className="overlay">
        </div>
      )}

      {/* Add home content here */}

      <CallToAction />

      {/* shop buttons */}

      {/* main content */}

    </div>
  );
}

Home.propTypes = {
  hideMobileProducts: PropTypes.func,
  isDesktop: PropTypes.bool
};

export default Home;
