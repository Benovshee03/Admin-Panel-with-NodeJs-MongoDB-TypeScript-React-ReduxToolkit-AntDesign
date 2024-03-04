import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../common/utils/api";
import { ProductState } from "./types";
import { RootState } from "../../app/store";
import Product from "../../network/models/Product";
import createBaseSlice from "../../network/reducers/core/BaseSlice";
import { ProductService } from "../../network/services/ProductService";
const initialState: ProductState = {
  list: [],
  status: "idle",
  error: null,
  selected: null,
};
let productService = new ProductService()

export const addProduct = createAsyncThunk(
  "products/create",
  async (product: Product) => {
    const response = await productService.add(product);
    return response.data;
  }
);

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await productService.getAll();
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: string) => {
    const response = await productService.delete(id);
    return response.data;
  }
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id: string) => {
    const response = await productService.get(id);
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product: Product) => {
    const response = await http.patch(`/products/${product._id}`, product);
    return response.data;
  }
);

const productSlice = createBaseSlice<ProductState>("products", initialState, [
  {
    thunk: fetchProducts,
    onFulfilled: (state, action) => {
      state.list = action.payload;
    },
  },
  {
    thunk: addProduct,
    onFulfilled: (state, action) => state.list.push(action.payload),
  },
  {
    thunk: deleteProduct,
    onFulfilled: (state, action) => {
      state.list = state.list.filter(
        (product:Product) => product._id !== action.payload
      );
    },
  },
  {
    thunk: fetchProduct,
    onFulfilled: (state, action) => {
      state.selected = action.payload;
    },
  },
  {
    thunk: updateProduct,
    onFulfilled: (state, action) => {
      state.list = state.list.map((product:Product) =>
        product._id === action.payload._id ? action.payload : product
      );
    },
  },
]);



export default productSlice.reducer;