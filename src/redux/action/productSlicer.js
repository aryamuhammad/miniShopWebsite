import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    isError: false,
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending),
      (state) => {
        state.isLoading = true;
      };
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
