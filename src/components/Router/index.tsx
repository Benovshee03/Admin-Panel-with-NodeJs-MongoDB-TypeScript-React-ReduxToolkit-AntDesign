import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'
import Content from '../Content'
export default function Router() {
  return (
    <>
    <Routes>
        <Route path='/' element={<AppLayout content={<Content/>}/>}/>
    </Routes>
    </>
  )
}
