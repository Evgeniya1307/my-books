import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import cart from './slices/cart'
//создала хранилище редакс
export const store = configureStore({
  reducer: {
    filter,// поместила в хранилище 1 слайс, // логика меняющая состояние
    cart,// добавила слайс cart
  }
})


//переменная store - редакс хранилище