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
    removeItem(state, action) {
        state.items.filter(obj =>  obj.id !== action.payload);//найти объект у которого id не совпадает с action.payload я payload буду передавать id )
  },
  clearItems(state,action){
    state.items = [];
    state.totalPrice = 0;//очищаю тоталпрайс
  }
}
});

export const {addItem, removeItem, clearItems }= cartSlice.actions;
export default cartSlice.reducer;