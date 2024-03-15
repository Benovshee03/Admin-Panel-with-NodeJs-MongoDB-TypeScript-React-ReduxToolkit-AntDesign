import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryState } from "./types";
import { CategoryService } from "../../network/services/CategoryService";
import Category from "../../network/models/Category";
import createBaseSlice from "../../network/reducers/core/BaseSlice";

const initialState: CategoryState = {
  list: [],
  status: "idle",
  error: null,
  selected: null,
};

let categoryService = new CategoryService();

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (category: Category) => {
    const response = await categoryService.add(category);
    return response.data;
  }
);

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await categoryService.getAll();
    return response.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id: string) => {
    const response = await categoryService.delete(id);
    return response.data;
  }
);

export const fetchCategory = createAsyncThunk(
  "categories/fetchCategory",
  async (id: string) => {
    const response = await categoryService.get(id);
    return response.data;
  }
);

export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async (category: Category) => {
    const response = await categoryService.update(category._id, category);
    return response.data;
  }
);

const categorySlice = createBaseSlice<CategoryState>("category", initialState, [
  {
    thunk: fetchCategories,
    onFulfilled: (state, action) => {
      state.list = action.payload;
    },
  },
  {
    thunk: addCategory,
    onFulfilled: (state, action) => state.list.push(action.payload),
  },
  {
    thunk: deleteCategory,
    onFulfilled: (state, action) => {
      state.list = state.list.filter(
        (category) => category._id !== action.payload
      );
    },
  },
  {
    thunk: fetchCategory,
    onFulfilled: (state, action) => {
      state.selected = action.payload;
    },
  },
  {
    thunk: updateCategory,
    onFulfilled: (state, action) => {
      state.list = state.list.map((category) =>
        category._id === action.payload._id ? action.payload : category
      );
    },
  },
]);

export default categorySlice.reducer;
 