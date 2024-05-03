import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Test from '../pages/Test'
import Navbar from '../pages/navbar'

const AllRoutes = () => {
  return (
    <div>
  
        <Routes>
       
<Route path="/" element={<Home/>} />
<Route path="/test" element={<Test/>} />

        </Routes>

    </div>
  )
}

export default AllRoutes