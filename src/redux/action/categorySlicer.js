import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchCategory = createAsyncThunk("fetchCategory", async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  return response.json();
});
const categorySlice = createSlice({
  name: "category",
  initialState: {
    isLoading: false,
    isError: false,
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending),
      (state) => {
        state.isLoading = true;
      };
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCategory.rejected, (state) => {
      state.isLoading = false;
      state.isloading = true;
    });
  },
});

export default categorySlice.reducer;
