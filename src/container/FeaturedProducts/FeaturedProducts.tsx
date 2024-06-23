import { useAppSelector } from "app/hooks";

import ProductCard from "components/ProductCard/ProductCard";

const FeaturedProducts = () => {
  const getProducts = useAppSelector((state) => state.products);

  console.log("getProducts", getProducts);

  return (
    <>
      <ProductCard />
    </>
  );
};

export default FeaturedProducts;
