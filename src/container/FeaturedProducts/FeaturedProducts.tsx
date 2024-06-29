// import { useEffect } from "react";
import { useAppSelector } from "app/hooks";

import ProductCard from "components/ProductCard/ProductCard";

import zx9Image from "./assets/mobile/image-speaker-zx9.png";
import zx7mage from "./assets/desktop/image-speaker-zx7.jpg";
import yx1Image from "./assets/mobile/image-earphones-yx1.jpg";

import tabletZx9Image from "./assets/mobile/image-speaker-zx9.png";
import tabletZx7mage from "./assets/desktop/image-speaker-zx7.jpg";
import tabletYx1Image from "./assets/mobile/image-earphones-yx1.jpg";

import desktopZx9Image from "./assets/desktop/image-speaker-zx9.png";
import desktopZx7mage from "./assets/desktop/image-speaker-zx7.jpg";
import desktopYx1Image from "./assets/mobile/image-earphones-yx1.jpg";

const FeaturedProducts = () => {
  // TODO use different types for each variable
  const getProducts: any = useAppSelector((state) => state?.products);

  console.log("getProducts", getProducts);
  return (
    <div className="featured-product-container">
      <ProductCard
        isLeadingCard
        cardSubHeading="ZX9 SPEAKER"
        description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
        mobilePicture={zx9Image}
        tabletPicture={tabletZx9Image}
        desktopImage={desktopZx9Image}
      />
      <div className="second-featured-product">
        <ProductCard
          className="yes"
          cardSubHeading={getProducts[0]?.slug}
          description={getProducts[0]?.description}
          mobilePicture={yx1Image}
          tabletPicture={tabletYx1Image}
          desktopImage={desktopYx1Image}
        />
      </div>
      <ProductCard
        cardSubHeading={getProducts[1]?.slug}
        description={getProducts[1]?.description}
        mobilePicture={zx7mage}
        tabletPicture={tabletZx7mage}
        desktopImage={desktopZx7mage}
      />
    </div>
  );
};

export default FeaturedProducts;
