import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//вынесла бизнес логику вытаскивания данных
export const fetchBooks = createAsyncThunk(
  //позволит делать асинхронный экшен
  "books/fetchBooksStatus",
  async (params, thunkApi) => {
    const { sortBy, order, category, currentPage, search } = params;
    const { data } = await axios.get(
      //сделала запрос
      `https://62f392d2a84d8c968126cc02.mockapi.io/items?page=${currentPage}&1&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data; //верни ответ
  }
);

const initialState = {
  items: [],
  status: "loading", //loading | success|error
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    //логика асинхронных экшинов
    [fetchBooks.pending]: (state) => {
      state.status = "loading"; //Идёт отправка
      state.items = []; //перед отправкой очищаю старые книги
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success"; //Всё ОК
    },
    [fetchBooks.rejected]: (state) => {
      state.status = "error"; //Будет ошибка
      state.items = [];
    },
  },
});

//селекторы
export const selectorBooksData =  (state) => state.books;

export const { setItems } = booksSlice.actions; //вытаскиваю данные

export default booksSlice.reducer;
