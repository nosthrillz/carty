import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartSelector } from "../../features/selectors";

import {
  delFromCart,
  qtyIncrease,
  qtyDecrease,
} from "../../features/cartReducer";

import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Cart.scss";
import { priceXqty } from "../../utils/priceXqty";

const Cart = (props) => {
  const { items, total } = useSelector(cartSelector);

  const dispatch = useDispatch();
  const history = useHistory();

  const checkoutHandler = (e) => {
    e.preventDefault();
    history.push("/checkout");
  };

  const emptyCart = (
    <section>
      <div className="cart-details-empty">
        <p>There's nothing in your cart yet</p>
      </div>
    </section>
  );

  const filledCart = (
    <section>
      <ul>
        {items?.map((item, idx) => (
          <li key={idx} className="cart-details-item-wrapper">
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <h1 className="cart-item-title">{item.name}</h1>
            <div className="cart-item-qty">
              <Button type="empty" onClick={() => dispatch(qtyIncrease(item))}>
                <FontAwesomeIcon icon={faChevronUp} />
              </Button>
              <h3>x{item.qty}</h3>
              <Button type="empty" onClick={() => dispatch(qtyDecrease(item))}>
                <FontAwesomeIcon icon={faChevronDown} />
              </Button>
            </div>
            <h2 className="cart-item-price">
              {priceXqty(item.price, item.qty).toFixed(2)}
            </h2>
            <Button type="close" onClick={() => dispatch(delFromCart(item))}>
              x
            </Button>
          </li>
        ))}
      </ul>
      <div className="cart-details-total">
        <p>Total:</p>
        <p>{total.toFixed(2)} CHF</p>
      </div>
      <div className="cart-details-actions">
        <Button type="primary" onClick={checkoutHandler}>
          Checkout
        </Button>
      </div>
    </section>
  );

  return (
    <div className="cart-details-wrapper">
      <h1>{props.title || "Your shopping cart"}</h1>
      {!!items ? filledCart : emptyCart}
    </div>
  );
};

export default Cart;
