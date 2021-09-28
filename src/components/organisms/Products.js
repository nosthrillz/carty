// Functionality
import { useSelector, useDispatch } from "react-redux";
// Components
import Button from "../atoms/Button";
// Libs/styles
import { cartActions } from "../../features/cartReducer";
import { productSelector } from "../../features/selectors";
import "./Products.scss";
import "../../styles/loadingSpinner.scss";

const CURRENCY = "CHF";

const Products = () => {
  const { items } = useSelector(productSelector);
  const dispatch = useDispatch();

  if (!items) return <h1>Something went wrong...</h1>;
  if (!items.length)
    return (
      <div className="loading">
        <h1>Loading your products...</h1>
        <div className="spinner"></div>
      </div>
    );
  return (
    <div className="product-details-wrapper">
      <h1>Your favorite products</h1>
      <ul>
        {items?.map((item, idx) => (
          <li key={idx} className="product-details-item-wrapper">
            <h1 className="product-item-title">{item.name}</h1>
            <div className="product-item-content">
              <img
                className="product-item-image"
                src={item.image}
                alt={item.name}
              />
              <div className="product-item-description">
                {item.description.split("\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
            <h2 className="product-item-price">
              {item.price} {CURRENCY}
            </h2>
            <Button
              type="primary"
              onClick={() => dispatch(cartActions.add(item))}
            >
              Add to cart
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
