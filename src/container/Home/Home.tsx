import { useEffect } from "react";

import CallToAction from "container/Home/CallToAction";

import Productslist from "components/ProductsList/ProductsList";

import FeaturedProducts from "container/FeaturedProducts/FeaturedProducts";

import { fetchProducts } from "app/actions/actions";

import { useAppDispatch } from "app/hooks";

type Props = {
  hideMobileProducts: boolean;
  isDesktop: boolean;
};

function Home({ hideMobileProducts, isDesktop }: Props) {
  const useLocal = false;

  const getProductsUrl = useLocal
    ? "http://localhost:5050/get-products"
    : "https://audiophile-v1qp.onrender.com/get-products";

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(getProductsUrl));
  }, [dispatch, getProductsUrl]); // I added these two here to silence the eslint errors

  return (
    <div className="Home-container" data-testid="home-container">
      {hideMobileProducts || isDesktop ? null : <div className="overlay"></div>}

      {/* Add home content here */}

      <CallToAction />
      <Productslist />
      <FeaturedProducts />

      {/* shop buttons */}

      {/* main content */}
    </div>
  );
}

export default Home;
