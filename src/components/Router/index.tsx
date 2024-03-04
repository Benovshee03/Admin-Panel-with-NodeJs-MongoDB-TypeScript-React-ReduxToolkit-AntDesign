import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'
import Content from '../Content'
import { List as CategoryList, Create as CreateCategory} from "../../features/categories/index"
import { List as ProductList, Create as CreateProduct,} from "../../features/products/index";
export default function Router() {
  return (
    <>
    <Routes>
        <Route path='/' element={<AppLayout content={<Content/>}/>}/>
        <Route path='/api/categories' element={<AppLayout content={<CategoryList/>}/>} />
        <Route path='/api/create_category' element={<AppLayout content={<CreateCategory/>}/>} />
        <Route path="/api/products/index" element={<AppLayout content={<ProductList />} />}/>
        <Route path="/api/products/create" element={<AppLayout content={<CreateProduct />} />}/>

    </Routes>
    </>
  )
}
