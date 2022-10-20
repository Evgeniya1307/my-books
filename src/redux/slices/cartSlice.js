//слайс для корзины
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],//товары
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) { //добавление книг передаю целый объект
      state.items.push(action.payload);
    },
    removeItem(state, action) { //удаление книг передаю id
        state.items.filter(obj => obj.id !== action.payload);//найти объект у которого id не совпадает с action.payload я payload буду передавать id )
  },
  clearItems(state){
    state.items = [];
    state.totalPrice = 0;//очищаю тоталпрайс
  }
}
});

export const {addItem, removeItem, clearItems }= cartSlice.actions;
export default cartSlice.reducer;