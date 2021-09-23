import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartIcon.scss";

const CartIcon = ({ cartCount }) => {
  return (
    <div className="cart-icon-wrapper">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      {cartCount > 0 && <div className="cart-icon-bubble">{cartCount}</div>}
    </div>
  );
};

export default CartIcon;
