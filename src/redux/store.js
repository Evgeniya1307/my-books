import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'

//создала хранилище редакс
export const store = configureStore({
  reducer: {
    filter,// поместила в хранилище 1 слайс, // логика меняющая состояние
    
  }
})


//переменная store - редакс хранилище