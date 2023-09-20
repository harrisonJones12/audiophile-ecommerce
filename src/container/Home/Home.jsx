import PropTypes from "prop-types";

function Home({ hideMobileProducts, isDesktop }) {


  return (
    <div className="Home-container" data-testid="home-container">
      <p>Home</p>
      {hideMobileProducts || isDesktop ? null : (
        <div className="overlay">
        </div>
      )}
    </div>
  );
}

Home.propTypes = {
  hideMobileProducts: PropTypes.func,
  isDesktop: PropTypes.bool
};

export default Home;
