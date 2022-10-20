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
    // addItem(state, action) { //добавление книг передаю целый объект 
    //   state.items.push(action.payload);
    //   

addItem(state, action){
  const findItem = state.items.find(obj => obj.id === action.payload.id);//если нашёлся объект id у которого найден экшен payload

  if(findItem){
findItem.count++;
}else{ //иначе добавляю его в массив
 state.items.push({
  ...action.payload,
  count: 1
})
}
state.totalPrice=state.items.reduce((sum,obj)=>{
     return obj.price+sum;
     }, 0)//когда передаю товар чтобы общая сумма
   },
},

    removeItem(state, action) { //удаление книг передаю id
        state.items.filter(obj => obj.id !== action.payload);//найти объект у которого id не совпадает с action.payload я payload буду передавать id )
  },
  clearItems(state){
    state.items = [];
    state.totalPrice = 0;//очищаю тоталпрайс
  }
});

export const {addItem, removeItem, clearItems }= cartSlice.actions;
export default cartSlice.reducer;