import { combineReducers } from "@reduxjs/toolkit";
import categorySlice from "../features/categories/categorySlice";
import productSlice from "../features/products/productSlice";
import authSlice from "../features/auth/authSlice";

const rootReducer = combineReducers({
    category:categorySlice,
    product:productSlice,
    auth:authSlice
})


export default rootReducer;