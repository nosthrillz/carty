import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartReducer";
import productReducer from "../features/productReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});
