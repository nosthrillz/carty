import { useHistory } from "react-router-dom";
import Button from "../ui/Button";
import "./Checkout.scss";

const Checkout = () => {
  const history = useHistory();

  const goHome = (e) => {
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
