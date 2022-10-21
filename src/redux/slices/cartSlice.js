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
addItem(state, action){
  const findItem = state.items.find((obj) => obj.id === action.payload.id);//если нашёлся объект id у которого найден экшен payload

  if(findItem){
findItem.count++;
}else{ //иначе добавляю его в массив
 state.items.push({
  ...action.payload,
  count: 1,
});
}
state.totalPrice=state.items.reduce((sum,obj)=>{
     return obj.price * obj.count+sum ;//сколько стоит книга * сколько раз добавили + sum  к предыдущему
     }, 0)//когда передаю товар чтобы общая сумма
   },

minusItem(state,action){
  const findItem = state.items.find((obj) => obj.id === action.payload);//если нашёлся объект id у которого найден экшен payload

  if(findItem) {
    findItem.count--;
  }
},
    removeItem(state, action) { //удаление книг передаю id
        state.items= state.items.filter((obj) => obj.id !== action.payload);//найти объект у которого id не совпадает с action.payload я payload буду передавать id )
  },
  //добавила очистку
  clearItems(state){
    state.items = [];
    state.totalPrice=0;
  },
}
});

export const {addItem, removeItem, minusItem, clearItems }= cartSlice.actions;
export default cartSlice.reducer;



// addItem(state, action) { //добавление книг передаю целый объект 
    //   state.items.push(action.payload);
    //   