import React from "react";
import headphonesLogo from "components/ProductsList/assets/image-category-thumbnail-headphones.png";
import speakerLogo from "components/ProductsList/assets/image-category-thumbnail-speakers.png";
import earphonesLogo from "components/ProductsList/assets/image-category-thumbnail-earphones.png";
function Productslist() {
  //earphones JSX
  const earphones = () => {
    return (
      <div className="earphones-outer-wrapper">
        {/* //Product logo goes here */}
        <div className="earphones-middle-wrapper">
          <img
            src={earphonesLogo}
            className="headphones-logo"
            alt="headphones"
          />
          <div className="product-name-button-wrapper">
            <span className="product-name">earphones</span>
            <button className="shop-button">
              <span className="shop-text">shop</span>
              {/* //icon goes here */}
            </button>
          </div>
        </div>
        <div className="earphones-inner-wrapper">
          {/* //this is here so that we can have background that is not the full height of the outter container */}
        </div>
      </div>
    );
  };

  //headphones JSX
  const headphones = () => {
    return (
      <div className="headphones-outer-wrapper">
        {/* //this is here so that we can have background that is not the full height of the outter container */}
        <div className="headphones-middle-wrapper">
          {/* //Product logo goes here */}
          <img
            src={headphonesLogo}
            className="headphones-logo"
            alt="headphones"
          />{" "}
          <div className="product-name-button-wrapper">
            <span className="product-name">headphones</span>
            <button className="shop-button">
              <span className="shop-text">shop</span>
              {/* //icon goes here */}
            </button>
          </div>
        </div>
        <div className="headphones-inner-wrapper"></div>
      </div>
    );
  };

  //speakers JSX
  const speakers = () => {
    return (
      <div className="earphones-outer-wrapper">
        {/* //Product logo goes here */}
        <div className="earphones-middle-wrapper">
          <img
            src={earphonesLogo}
            className="headphones-logo"
            alt="headphones"
          />
          <div className="product-name-button-wrapper">
            <span className="product-name">earphones</span>
            <button className="shop-button">
              <span className="shop-text">shop</span>
              {/* //icon goes here */}
            </button>
          </div>
        </div>
        <div className="earphones-inner-wrapper">
          {/* //this is here so that we can have background that is not the full height of the outter container */}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="products-container">
        {headphones()}
        <div className="speakers-outer-wrapper">
          <div className="speakers-middle-wrapper">
            {/* //Product logo goes here */}
            <img
              src={speakerLogo}
              className="headphones-logo"
              alt="headphones"
            />

            {/* //this is here so that we can have background that is not the full height of the outter container */}
            <div className="product-name-button-wrapper">
              <span className="product-name">speakers</span>
              <button className="shop-button">
                <span className="shop-text">shop</span>
                {/* //icon goes here */}
              </button>
            </div>
          </div>
          <div className="speakers-inner-wrapper"></div>
        </div>
        {earphones()}
      </div>
    </>
  );
}

Productslist.propTypes = {};

export default Productslist;
