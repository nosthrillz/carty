// Functionality
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// Components
import Button from "../atoms/Button";
// Libs/styles
import { cartSelector } from "../../features/selectors";
import { cartActions } from "../../features/cartReducer";
import { priceXqty } from "../../utils/priceXqty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Cart.scss";

const CURRENCY = "CHF";

const Cart = (props) => {
  const { items, total } = useSelector(cartSelector);

  const dispatch = useDispatch();
  const history = useHistory();

  const checkoutHandler = () => {
    history.push("/checkout");
  };

  const emptyCart = (
    <>
      <div className="cart-details-empty">
        <p>There's nothing in your cart yet</p>
      </div>
    </>
  );

  const filledCart = (
    <>
      <ul>
        {items?.map((item, idx) => (
          <li key={idx} className="cart-details-item-wrapper">
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <h1 className="cart-item-title">{item.name}</h1>
            <div className="cart-item-qty">
              <Button
                type="empty"
                onClick={() => dispatch(cartActions.qtyInc(item))}
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </Button>
              <h3>x{item.qty}</h3>
              <Button
                type="empty"
                onClick={() => dispatch(cartActions.qtyDec(item))}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </Button>
            </div>
            <h2 className="cart-item-price">
              {priceXqty(item.price, item.qty).toFixed(2)}
            </h2>
            <Button
              type="close"
              onClick={() => dispatch(cartActions.del(item))}
            >
              x
            </Button>
          </li>
        ))}
      </ul>
      <div className="cart-details-total">
        <p>Total:</p>
        <p>
          {total.toFixed(2)} {CURRENCY}
        </p>
      </div>
      <div className="cart-details-actions">
        <Button type="primary" onClick={checkoutHandler}>
          Checkout
        </Button>
      </div>
    </>
  );

  return (
    <div className="cart-details-wrapper">
      <h1>{props.title || "Your shopping cart"}</h1>
      {!!items.length ? filledCart : emptyCart}
    </div>
  );
};

export default Cart;
