import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import books from "./slices/booksSlice";
//создала хранилище редакс
export const store = configureStore({
  reducer: {
    filter, // поместила в хранилище 1 слайс, // логика меняющая состояние
    cart, // добавила слайс cart
 books,
  },
});

//переменная store - редакс хранилище
