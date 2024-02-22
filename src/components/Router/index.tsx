import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'
import Content from '../Content'
import { List as CategoryList} from "../../features/categories/index"
export default function Router() {
  return (
    <>
    <Routes>
        <Route path='/' element={<AppLayout content={<Content/>}/>}/>
        <Route path='/categories' element={<AppLayout content={<CategoryList/>}/>} />
    </Routes>
    </>
  )
}
