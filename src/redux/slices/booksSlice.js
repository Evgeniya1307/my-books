import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchUserById = createAsyncThunk(//позволит делать асинхронный экшен
  'users/fetchUserById',
  async(userId:Number, thunkAPI)=>{
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)


const initialState = {
  items: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = booksSlice.actions;//вытаскиваю

export default booksSlice.reducer;
