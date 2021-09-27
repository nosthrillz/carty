// Functionality
import { useHistory } from "react-router-dom";
// Components
import Button from "../atoms/Button";
// Libs/styles
import "./Checkout.scss";

const Checkout = () => {
  const history = useHistory();

  const goHome = () => {
    history.push("/products");
  };
  return (
    <div className="checkout-wrapper">
      <h1>Thanks for dropping by</h1>

      <Button onClick={goHome}>Back home</Button>
    </div>
  );
};

export default Checkout;
