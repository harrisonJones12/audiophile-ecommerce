import PropTypes from "prop-types";

import { useEffect } from "react";

import CallToAction from "container/Home/CallToAction"

import Productslist from "components/ProductsList/ProductsList";

import { fetchProducts } from 'app/actions/actions'

import {useAppDispatch} from 'app/hooks'

function Home({ hideMobileProducts, isDesktop }) {


const useLocal =  false;
const getProductsUrl =  useLocal ?'http://localhost:5050/get-products': 'https://audiophile-v1qp.onrender.com/get-products';
const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts(
      getProductsUrl
    ))
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
