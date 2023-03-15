/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsAPI";

const initialState = {
  isLoading: false,
  products: [],
  isError: false,
  error: "",
};

export const getProducts = createAsyncThunk("products/getProduct", async () => {
    const products = fetchProducts();
    return products;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.isError = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});


export default productSlice.reducer;
