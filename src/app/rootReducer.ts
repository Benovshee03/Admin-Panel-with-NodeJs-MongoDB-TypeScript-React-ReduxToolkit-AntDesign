import { combineReducers } from "@reduxjs/toolkit";
import categorySlice from "../features/categories/categorySlice";
import productSlice from "../features/products/productSlice";

const rootReducer = combineReducers({
    category:categorySlice,
    product:productSlice
})


export default rootReducer;