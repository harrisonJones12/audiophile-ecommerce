import { useEffect } from "react";

import CallToAction from "container/Home/CallToAction";

import Productslist from "components/ProductsList/ProductsList";

import FeaturedProducts from "container/FeaturedProducts/FeaturedProducts";

import Footer from "container/Footer/Footer";

import { fetchProducts } from "app/actions/actions";

import { useAppDispatch } from "app/hooks";

import mobileAboutSectionImage from "./assets/mobile/image-best-gear.jpg";

import desktopAboutSectionImage from "./assets/desktop/image-best-gear.jpg";

import tabletAboutSectionImage from "./assets/tablet/image-best-gear.jpg";

type Props = {
  hideMobileProducts: boolean;
  isDesktop: boolean;
};

function Home({ hideMobileProducts, isDesktop }: Props) {
  const useLocal: boolean = true;

  const getProductsUrl = useLocal
    ? "http://localhost:5050/get-products"
    : "https://audiophile-v1qp.onrender.com/get-products";

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(getProductsUrl));
  }); // I added these two here to silence the eslint errors

  const aboutSection = (
    <div className="about-section-container">
      <div className="about-image-wrapper">
        <picture>
          <source media="(min-width: 768px)" srcset={tabletAboutSectionImage} />
          <source
            media="(min-width: 1440px)"
            srcset={desktopAboutSectionImage}
          />
          <img
            src={mobileAboutSectionImage}
            alt="man-wearing-headphones"
            className="about-section-image"
          />
        </picture>
      </div>
      <h3 className="about-heading-text">
        Bringing you the <span className="best-text">best</span> audio gear
      </h3>
      <p className="about-text">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  );

  return (
    <div className="Home-container" data-testid="home-container">
      {hideMobileProducts || isDesktop ? null : <div className="overlay"></div>}
      {/* Add home content here */}
      <CallToAction />
      <Productslist />
      <FeaturedProducts />
      {aboutSection}
      <Footer />
    </div>
  );
}

export default Home;
