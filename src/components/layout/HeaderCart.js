import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { cartSelector } from "../../features/selectors";

import { useMediaQuery } from "react-responsive";

import "./HeaderCart.scss";

const HeaderCart = () => {
  const [showCart, setShowCart] = useState(false);
  const { count } = useSelector(cartSelector);
  const isMobile = useMediaQuery({ query: `(max-width: 500px)` });

  const displayCart = (e) => {
    e.stopPropagation();
    !isMobile && setShowCart(true);
  };

  const hideCart = (e) => {
    e.stopPropagation();
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
