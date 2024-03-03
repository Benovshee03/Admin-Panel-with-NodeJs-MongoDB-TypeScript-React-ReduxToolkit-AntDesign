import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../common/utils/api";
import { Product, ProductState } from "./types";
import { RootState } from "../../app/store";

const initialState: ProductState = {
  list: [],
  status: "idle",
  error: null,
  selected: null,
};

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product: Product) => {
    const response = await http.post("/product", product);
    return response.data;
  }
);

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await http.get("/product");
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: string) => {
    const response = await http.delete(`/product/${id}`);
    return response.data;
  }
);

export const fetchProduct = createAsyncThunk<
  Product,
  string,
  {
    rejectValue: string;
    state: RootState;
  }
>("product/fetchProduct", async (id, { rejectWithValue }) => {
  try {
    const response = await http.get(`/products/${id}`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product: Product) => {
    const response = await http.patch(`/products/${product._id}`, product);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.selected = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (category) => category._id === action.payload._id
        );
        if (index !== -1) {
          state.list[index] = action.payload;
        }
        state.status = "succeeded";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (category: Product) => category._id !== (action.payload as any)
        );
      });
  },
});

export default productSlice.reducer;