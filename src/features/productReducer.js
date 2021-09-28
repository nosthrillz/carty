import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (state, action) => {
      !state.items.some((item) => item.id === action.payload.id) &&
        state.items.push(action.payload);
    },
    del: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
