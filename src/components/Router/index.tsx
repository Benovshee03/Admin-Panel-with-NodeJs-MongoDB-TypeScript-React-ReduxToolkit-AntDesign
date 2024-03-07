import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";
import {
  List as CategoryList,
  Create as CreateCategory,
} from "../../features/categories/index";

import { List as ProductList } from "../../features/products/index";
import { Result, Button, Layout } from "antd";
import Login from "../../features/auth";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Deneme />} />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/categories"
          element={<AppLayout content={<CategoryList />} />}
        />
        <Route
          path="/categories/create"
          element={<AppLayout content={<CreateCategory />} />}
        />
        <Route
          path="/products/:categoryId"
          element={<AppLayout content={<ProductList />} />}
        />
        <Route path="*" element={<NotFound />} />
        {/* <Route  path="/products/create" element={<AppLayout content={<CreateProduct />} />} />   */}
      </Routes>
    </>
  );
};

const Deneme = () => {
  return <>Deneme Sayfası</>;
};
const NotFound = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Result
        status="error"
        title="Submission Failed"
        subTitle="Please check and modify the following information before resubmitting."
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button key="buy">Buy Again</Button>,
        ]}
      ></Result>
    </Layout>
  );
};

export default Router;