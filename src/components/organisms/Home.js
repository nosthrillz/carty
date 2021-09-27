// Functionality
import { useHistory } from "react-router-dom";
// Components
import Button from "../atoms/Button";
// Libs/styles
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
