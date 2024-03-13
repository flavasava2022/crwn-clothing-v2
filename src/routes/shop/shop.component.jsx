import { useContext } from "react";

import { productsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(productsContext);
  return (
    <div className="products-container">
      {products.map(({ id, name, imageUrl, price }) => (
        <ProductCard
          id={id}
          name={name}
          imageUrl={imageUrl}
          price={price}
          key={id}
        />
      ))}
    </div>
  );
};

export default Shop;
