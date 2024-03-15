import Login from "../../features/auth";
import AppLayout from "../Layout/AppLayout";
import {
List as CategoryList,
Create as CreateCategory,
} from "../../features/categories/index";
import { List as ProductList } from "../../features/products/index";
import NotFound from "../NotFound";
import Home from "../../features/home";
import { UploadOutlined } from "@ant-design/icons";

const routeConfig: any[] = [
{
key: "1",
path: "/",
element: <Home />,
showInMenu: true,
title: "Ana Sayfa",
icon: <UploadOutlined />,
order: 1,
},
{
key: "2",
path: "/admin/login",
element: <Login />,
showInMenu: true,
title: "Giriş Sayfası",
icon: null,
order: null,
},
{
key: "3",
path: "/admin/categories",
element: <AppLayout content={<CategoryList />} />,
showInMenu: true,
title: "Kategoriler",
icon: <UploadOutlined />,
order: 2,
},
{
key: "4",
path: "/admin/categories/create",
element: <AppLayout content={<CreateCategory />} />,
showInMenu: false,
title: "Kategori Oluştur",
icon: <UploadOutlined />,
order: null,
},
{
key: "5",
path: "/admin/products/:categoryId",
element: <AppLayout content={<ProductList />} />,
showInMenu: true,
title: "Ürünler",
icon: <UploadOutlined />,
order: 3,
},
{
key: "6",
path: "*",
element: <NotFound />,
showInMenu: false,
icon: <UploadOutlined />,
title: "Not Found",
order: null,
},
];

export default routeConfig;