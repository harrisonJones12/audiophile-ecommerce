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
        <img
          src={earphonesLogo}
          className="earphones-logo"
          alt="earphones"
        />
        <div className="product-name-button-wrapper">
          <span className="product-name">earphones</span>
          <button className="shop-button">
            <span className="shop-text">shop</span>
            <svg
              className="icon-right"
              width="8"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  //headphones JSX
  const headphones = () => {
    return (
      <div className="headphones-outer-wrapper">
        {/* //this is here so that we can have background that is not the full height of the outter container */}
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
            <svg
              className="icon-right"
              width="8"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  //speakers JSX
  const speakers = () => {
    return (
      <div className="speakers-outer-wrapper">
        {/* //Product logo goes here */}
        <img src={speakerLogo} className="speakers-logo" alt="speakers" />

        {/* //this is here so that we can have background that is not the full height of the outter container */}
        <div className="product-name-button-wrapper">
          <span className="product-name">speakers</span>
          <button className="shop-button">
            <span className="shop-text">shop</span>
            <svg
              className="icon-right"
              width="8"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  // function that wil render mobile nav menu based on screen width
  // const renderMobileProductList = () => {

  //   if (isDesktop) {
  //     return(
  //     <ul className="desktop-menu-items">
  //       <li className="home">Home</li>
  //       <li className="heaphones">Heaphones</li>
  //       <li className="speakers">Speakers</li>
  //       <li className="earphones">Earphones</li>
  //     </ul>
  //     )

  //   } else {

  //     return(
  //       <div className="products-container">
  //       {headphones()}
  //       {speakers()}
  //       {earphones()}
  //     </div>
  //     )
  //   }
  // }

  return (
    <>
      <div className="products-container" data-testid="products-list">
        {headphones()}
        {speakers()}
        {earphones()}
      </div>
    </>
  );
}

Productslist.propTypes = {};

export default Productslist;
