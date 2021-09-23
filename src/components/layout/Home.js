import Button from "../ui/Button";
import { useHistory } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  const history = useHistory();

  function goToProducts() {
    history.push("/products");
  }

  return (
    <div className="home-wrapper">
      <h1>Welcome to Carty</h1>
      <p>Start buying your favorite products</p>
      <Button onClick={goToProducts}>See products</Button>
    </div>
  );
};

export default Home;
