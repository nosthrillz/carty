// Functionality
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// Components
import HomePage from "./components/pages/HomePage";
import CartDetailsPage from "./components/pages/CartDetailsPage";
import ProductsPage from "./components/pages/ProductsPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import HeaderCart from "./components/organisms/HeaderCart";
// Libs/Styles
import getProducts from "./api/getProducts";
import { productActions } from "./features/productReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThList } from "@fortawesome/free-solid-svg-icons";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(dispatch, productActions);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <header>
        <NavLink to="/" activeClassName="">
          <h1>Carty Inc.</h1>
        </NavLink>

        <nav>
          <NavLink to="/products" activeClassName="active">
            <FontAwesomeIcon icon={faThList} size="lg" />
          </NavLink>
          <NavLink to="/cart" activeClassName="active">
            <HeaderCart />
          </NavLink>
        </nav>
      </header>

      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/products" exact>
            <ProductsPage />
          </Route>
          <Route path="/cart" exact>
            <CartDetailsPage />
          </Route>
          <Route path="/checkout" exact>
            <CheckoutPage />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
