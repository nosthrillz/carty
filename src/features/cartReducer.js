import { createSlice } from "@reduxjs/toolkit";
import { getIndex } from "../utils/getIndex";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = getIndex(state, action);

      if (index !== -1) {
        state.items[index].qty++;
      } else {
        state.items.push({
          ...action.payload,
          qty: 1,
        });
      }
    },
    delFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    qtyIncrease: (state, action) => {
      const index = getIndex(state, action);

      state.items[index].qty++;
    },
    qtyDecrease: (state, action) => {
      const index = getIndex(state, action);

      if (state.items[index].qty > 1) {
        state.items[index].qty--;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const { addToCart, delFromCart, qtyIncrease, qtyDecrease } =
  cartSlice.actions;

export default cartSlice.reducer;
