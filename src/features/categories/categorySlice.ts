import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category, CategoryState} from "./types";
import http from "../../common/utils/api";
import { RootState } from "../../app/store";

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
export const fetchCategory = createAsyncThunk<
  Category,
  string,
  { rejectedValue: string; state: RootState }
>("categories/fetchCategory", async (id,{rejectWithValue}) => {
  try{
    const response = await http.get(`/categories/${id}`)
    return response.data
  }
  catch(error : any ){
    return rejectWithValue(error.message)
  }
});
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchCategory.fulfilled,(state,action)=>{
      state.selected = action.payload
      state.status = "succeeded"
    })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (category: Category) => category._id !== (action.payload as any)
        );
      })
      .addCase(postCategory.fulfilled, (state, action) => {
        state.status="succeeded"
      });
  },
});

export default categorySlice.reducer;
