import HomePage from "./pages/HomePage";
import CartDetailsPage from "./pages/CartDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartIcon from "./components/layout/CartIcon";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThList } from "@fortawesome/free-solid-svg-icons";

function _app() {
  const cartCount = useSelector((state) => state.cart.count);

  return (
    <Router>
      <header>
        <NavLink to="/" activeClassName="">
          <h1>Carty Inc.</h1>
        </NavLink>

        <nav>
          <NavLink to="/products" activeClassName="active">
            <FontAwesomeIcon icon={faThList} size="lg" />
          </NavLink>
          <NavLink to="/cart" activeClassName="active">
            <CartIcon cartCount={cartCount} />
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
    </Router>
  );
}

export default _app;
