import { createSlice } from "@reduxjs/toolkit";
import { getIndex } from "../utils/getIndex";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
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
    del: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    qtyInc: (state, action) => {
      const index = getIndex(state, action);

      state.items[index].qty++;
    },
    qtyDec: (state, action) => {
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

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
