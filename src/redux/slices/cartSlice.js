//слайс для корзины
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const {addItem}= cartSlice.actions;
export default cartSlice.reducer;