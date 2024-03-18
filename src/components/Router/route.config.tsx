import React from "react";
import Login from "../../features/auth";
import AppLayout from "../Layout/AppLayout";
import {
  List as CategoryList,
  Create as CreateCategory,
} from "../../features/categories/index";
import {
  List as ProductList,
  Create as ProductCreate,
} from "../../features/products/index";
import {
  List as UserList,
  Create as UserCreate,
} from "../../features/users/index";

import {
  List as RoleList,
  Create as RoleCreate,
} from "../../features/roles/index";

import NotFound from "../NotFound";
import Home from "../../features/home";
import { UploadOutlined } from "@ant-design/icons";

export function PageOne() {
  return <div>PageOne</div>;
}
export function PageTwo() {
  return <div>PageOjjjjjjjjjjjjne</div>;
}

const routeConfig: any[] = [
  {
    key: "1",
    path: "/",
    element: <Home />,
    showInMenu: true,
    title: "Ana Sayfa",
    icon: <UploadOutlined />,
  },
  {
    key: "2",
    path: "/admin/login",
    element: <Login />,
    showInMenu: false,
    title: "Giriş Sayfası",
    icon: null,
  },
  {
    key: "3",
    path: "/admin/categories",
    element: <AppLayout content={<CategoryList />} />,
    showInMenu: true,
    title: "Kategoriler",
    icon: <UploadOutlined />,
  },
  {
    key: "4",
    path: "/admin/categories/create",
    element: <AppLayout content={<CreateCategory />} />,
    showInMenu: false,
    title: "Kategori Oluştur",
    icon: <UploadOutlined />,
  },
  {
    key: "5",
    path: "/admin/products",
    element: <AppLayout content={<ProductList />} />,
    showInMenu: true,
    title: "Ürünler",
    icon: <UploadOutlined />,
  },
  {
    key: "6",
    path: "/admin/products/:categoryId",
    element: <AppLayout content={<ProductList />} />,
    showInMenu: false,
    title: "Ürünler",
    icon: <UploadOutlined />,
  },
  {
    key: "7",
    path: "/admin/products/create",
    element: <AppLayout content={<ProductCreate />} />,
    showInMenu: false,
    title: "Ürün Ekle",
    icon: <UploadOutlined />,
  },
  {
    key: "8",
    path: "*",
    element: <NotFound />,
    showInMenu: false,
    icon: <UploadOutlined />,
    title: "Not Found",
  },
  {
    key: "9",
    path: "/admin/users",
    element: <AppLayout content={<UserList />} />,
    showInMenu: true,
    icon: <UploadOutlined />,
    title: "Kullanıcılar",
  },
  {
    key: "10",
    path: "/admin/users/create",
    element: <AppLayout content={<UserCreate />} />,
    showInMenu: false,
    icon: null,
    title: "Kullanıcılar",
  },
  {
    key: "11",
    path: "/admin/roles",
    element: <AppLayout content={<RoleList />} />,
    showInMenu: true,
    icon: <UploadOutlined />,
    title: "Roller",
  },
  {
    key: "12",
    path: "/admin/roles/create",
    element: <AppLayout content={<RoleCreate />} />,
    showInMenu: false,
    icon: <UploadOutlined />,
    title: "Roller",
  },

 
  {
    key: "101",
    path: "/admin/pagetwo",
    element: <PageTwo />,
    showInMenu: false,
    icon: <UploadOutlined />,
    title: "Not Found",
  },
  {
    key: "102",
    path: "/admin/pagetwo",
    element: <PageTwo />,
    showInMenu: false,
    icon: <UploadOutlined />,
    title: "Not Found",
  },
];

export default routeConfig;