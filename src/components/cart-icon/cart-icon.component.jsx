import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { cartDropdownContext } from "../../contexts/cart-dropdown.context";

const CartIcon = () => {
  const { dropDownOpen, setDropDownOpen } = useContext(cartDropdownContext);
  const dropDownHandler = () => {
    setDropDownOpen(!dropDownOpen);
  };
  return (
    <div className="cart-icon-container" onClick={dropDownHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
