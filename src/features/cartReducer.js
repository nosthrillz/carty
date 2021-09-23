import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
  total: 0,
};

const getIndex = (state, action) => {
  const id = action.payload.id;

  const index = state.items.findIndex((item) => item.id === id);

  return index;
  //TODO: use memoization to retrieve info if already saved
};

const newCount = (state) =>
  state.items.reduce((prev, next) => prev + next.qty, 0);
const newTotal = (state) =>
  state.items.reduce((prev, next) => prev + next.qty * next.price, 0);

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

      state.total =
        Math.round((state.total + action.payload.price) * 1e2) / 1e2;
      state.count++;
    },
    delFromCart: (state, action) => {
      const index = getIndex(state, action);

      state.count -= state.items[index].qty;
      state.total -= state.items[index].qty * state.items[index].price;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    qtyIncrease: (state, action) => {
      const index = getIndex(state, action);

      state.items[index].qty++;
      state.count = newCount(state);
      state.total = newTotal(state);
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

      state.count = newCount(state);
      state.total = newTotal(state);
    },
  },
});

export const { addToCart, delFromCart, qtyIncrease, qtyDecrease } =
  cartSlice.actions;

export default cartSlice.reducer;
