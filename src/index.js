// Functionality
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// Components
import App from "./App";
// Libs/Styles
import { store } from "./store/index";
import "./styles/globals.scss";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
