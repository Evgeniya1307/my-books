import { createSlice } from "@reduxjs/toolkit";

//делаю первое со-ие
const initialState = {
  categoryId: 0,
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
  reducers:{ // передаю объект и метод отвечающий за id
    setCategoryId(state, action){ // при вызове получит стейт и действие
state.categoryId = 
    }
  }

});
