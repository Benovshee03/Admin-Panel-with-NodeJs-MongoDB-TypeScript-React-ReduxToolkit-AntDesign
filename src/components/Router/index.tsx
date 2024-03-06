import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";
import Content from "../Content";
import {
  List as CategoryList,
  Create as CreateCategory,
} from "../../features/categories/index";
import {
  List as ProductList,
  Create as CreateProduct,
} from "../../features/products/index";
import NotFound from "../Layout/NotFound";
import Index from "../../features/auth";
export default function Router() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Index/>}/>
          {/* <Route path="/" element={<AppLayout content={<Index/>} />} /> */}
          <Route path="/categories" element={<AppLayout content={<CategoryList />} />}/>
          <Route  path="/create_category"  element={<AppLayout content={<CreateCategory />} />}/>
          <Route path="/products/create" element={<AppLayout content={<CreateProduct />} />}/>
          <Route path="/products/:categoryId" element={<AppLayout content={<ProductList />} />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>
  );



}
