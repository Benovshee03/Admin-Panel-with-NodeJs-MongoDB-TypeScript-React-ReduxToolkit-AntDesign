import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CategoryState } from "./types";
import http from "../../common/utils/api";

const initialState :CategoryState={
    list: [],
    status:"idle",
    error:null,
    selected:null
}

export const fetchCategories = createAsyncThunk('categories/fetchCategories',
async()=>{
    const response = await http.get("/categories")
    return response.data
}
)

export const deleteCategory = createAsyncThunk("",async (id:string)=>{
    const response = await http.delete(`categories/${id}`)
    return response
})


const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCategories.fulfilled ,(state,action)=>{
            state.status="succeeded";
            state.list=action.payload
        })
        .addCase(deleteCategory.fulfilled, (state,action)=>{
        })
    },
})


export default categorySlice.reducer;


















