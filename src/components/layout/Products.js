import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/cartReducer";
import { productSelector } from "../../features/selectors";

import Button from "../ui/Button";
import "./Products.scss";

const Products = (props) => {
  const { items } = useSelector(productSelector);
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(addToCart(item));
  };

  if (!items) return <h1>Something went wrong...</h1>;
  return (
    <div className="product-details-wrapper">
      <h1>Your favorite products</h1>
      <section>
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
              <h2 className="product-item-price">{item.price} CHF</h2>
              <Button type="primary" onClick={() => addItemHandler(item)}>
                Add to cart
              </Button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Products;
