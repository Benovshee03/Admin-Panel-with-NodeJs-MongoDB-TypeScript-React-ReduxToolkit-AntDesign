import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category, CategoryState } from "./types";
import http from "../../common/utils/api";
import { stat } from "fs";

const initialState: CategoryState = {
  list: [],
  status: "idle",
  error: null,
  selected: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await http.get("/categories");
    return response.data;
  }
);

export const deleteCategory = createAsyncThunk("", async (id: string) => {
  const response = await http.delete(`categories/${id}`);
  return response.data;
});

export const postCategory = createAsyncThunk(
  "/create_category",
  async (category: Category) => {
    const response = await http.post("/categories", category);
    return response.data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.list=state.list.filter(
                (category:Category)=>category._id !== (action.payload as any)
            )
    })
      .addCase(postCategory.fulfilled, (state, action) => {});
  },
});

export default categorySlice.reducer;
