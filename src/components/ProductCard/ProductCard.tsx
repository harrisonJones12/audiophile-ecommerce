import Button from "components/Button/Button";

type Props = {
  isLeadingCard?: boolean;
  isLeadingCard?: boolean;
  cardSubHeading?: string;
  description?: string;
  mobilePicture: string;
  tabletPicture: string;
  desktopImage: string;
};

const ProductCard = ({
  isLeadingCard = false,
  mobilePicture,
  tabletPicture,
  desktopImage,
  cardSubHeading,
  description,
}: Props) => {
  // const middleCardStructure = (
  //   <div className="second-product-card-main">
  //     <div className="second-product-card-inner">
  //       <div className="image-wrapper">
  //         <picture>
  //           <source media="(min-width: 768px)" srcset={tabletPicture} />
  //           <source media="(min-width: 1440px)" srcset={desktopImage} />
  //           <img src={mobilePicture} alt="product" className="mobile-picture" />
  //         </picture>
  //       </div>
  //       <div className="see-product-button">
  //         <Button
  //           text="See product"
  //           label="test button"
  //           type="regular-button"
  //           id="customn-id"
  //           name="see product"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="product-card-main">
      <div className="product-card-inner">
        <div className="image-wrapper">
          <picture>
            <source media="(min-width: 768px)" srcset={tabletPicture} />
            <source media="(min-width: 1440px)" srcset={desktopImage} />
            <img src={mobilePicture} alt="product" className="mobile-picture" />
          </picture>
        </div>

        <span className="card-heading"> {cardSubHeading} </span>
        {isLeadingCard && (
          <p className="product-card-description">{description}</p>
        )}

        <div className="see-product-button">
          <Button
            text="See product"
            label="test button"
            type="regular-button"
            id="customn-id"
            name="see product"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
