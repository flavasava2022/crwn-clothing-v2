import Button from "../button/button.component";
import "./product-card..styles.scss";

const ProductCard = ({ id, name, imageUrl, price }) => {
  console.log(id, name, imageUrl, price);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
};

export default ProductCard;
