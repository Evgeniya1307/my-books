import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'

//создала хранилище редакс
export const store = configureStore({
  reducer: {filter:filterReducer},// логика меняющая состояние
})


//переменная store - редакс хранилище