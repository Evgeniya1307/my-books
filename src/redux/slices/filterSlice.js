import { createSlice } from "@reduxjs/toolkit";

//делаю первое со-ие
const initialState = {
    categoryId: 0,
    sort: {
        name: 'по популярности',
        sortProperty:'rating',
    }
}

//создаю сам Slice и передаю в него объект
const filterSlice = createSlice({

})