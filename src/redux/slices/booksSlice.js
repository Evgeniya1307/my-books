import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//вынесла бизнес логику вытаскивания данных
export const fetchBooks = createAsyncThunk(
  //позволит делать асинхронный экшен
  "books/fetchBooksStatus",
  async (params) => {
    const { sortBy, order, category, currentPage, search } = params;
    const { data } = await axios.get(
      //сделала запрос
      `https://62f392d2a84d8c968126cc02.mockapi.io/items?page=${currentPage}&1&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data; //верни ответ
  });

const initialState = {
  items: [],
status:'loading',//loading | success|error
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
    [fetchBooks.pending]: (state, action) => {
      console.log("Идёт отправка");
    },
    [fetchBooks.fulfilled]: (state, action) => {
      console.log(state,"Всё ОК");
    },
    [fetchBooks.rejected]: (state, action) => {
      console.log("Будет ошибка");
    },
  },
});

export const { setItems } = booksSlice.actions; //вытаскиваю

export default booksSlice.reducer;
