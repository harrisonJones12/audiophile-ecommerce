import Button from "components/Button/Button";

const ProductCard = () => {
  return (
    <div className="product-card-main">
      <span className="card-heading">Card Heading</span>
      ProductCard
      <p className="product-card-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid
        minus earum dolores, repellendus tempora dignissimos itaque, quaerat non
        voluptatibus aliquam blanditiis?
      </p>
      <Button
        text="See product"
        label="test button"
        type="regular-button"
        id="customn-id"
        name="see product"
      />
    </div>
  );
};

export default ProductCard;
