import { createSlice } from "@reduxjs/toolkit";

//делаю первое со-ие
const initialState = {
  categoryId: 0,
  pageCount:1, //пагинация
  sort: {
    name: "по популярности",
    sortProperty: "rating",
  },
};

//создаю сам Slice и передаю в него объект
const filterSlice = createSlice({
  name: "filter", // название слайся для реакта
  initialState,
  // делаю actions(команды)
  reducers: {
    // передаю объект и метод отвечающий за id меняющий категорию
    setCategoryId(state, action) {
      // при вызове получит стейт и действие
      state.categoryId = action.payload; //в стейт сохраняю что придёт в action.payload ,значение будет хр-ся action.payload
    },
    //метод для диспатча меняющий сортировку
    setSort(state, action) {
      state.sort = action.payload;
    },
    //метод для пагинации
    setCurrentPage(state, action) { //заменила название на setCurrentPage
      state.currentPage = action.payload; //заменила на currentPage
    }
  },
});

export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions; //вытащи setCategoryId, setSort

export default filterSlice.reducer;
