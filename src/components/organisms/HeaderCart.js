// Functionality
import { useState } from "react";
import { useSelector } from "react-redux";
// Components
import Cart from "../molecules/Cart";
// Libs/styles
import { cartSelector } from "../../features/selectors";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./HeaderCart.scss";

const HeaderCart = () => {
  const [showCart, setShowCart] = useState(false);
  const { count } = useSelector(cartSelector);
  const isMobile = useMediaQuery({ query: `(max-width: 500px)` });

  const displayCart = () => {
    !isMobile && setShowCart(true);
  };

  const hideCart = () => {
    showCart && setShowCart(false);
  };

  return (
    <>
      <div
        className="header-cart-icon-wrapper"
        onMouseOver={displayCart}
        onMouseOut={hideCart}
      >
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        {count > 0 && <div className="header-cart-icon-bubble">{count}</div>}
      </div>
      <div className="header-cart-wrapper">
        <div className="header-cart-details-wrapper">
          {showCart && !isMobile && <Cart title="Preview cart" />}
        </div>
      </div>
    </>
  );
};

export default HeaderCart;
