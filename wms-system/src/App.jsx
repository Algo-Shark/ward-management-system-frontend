import { useState } from 'react'
import './App.css'
import Login from "./pages/Login"
import BedView from './components/pages/BedView'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideBar from "./pages/SideBar"
import Bed from './components/common/Bed'

function App() {
 
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/> 
        {/* <Route path='/dashboard' element={<About/>}></Route>
        <Route path='/vans' element={<Vans/>}></Route>
        <Route path='vans/:id' element={<VansDetails/>}></Route> */}
       {/* </Routes>
    </BrowserRouter>  */}
      <BedView/>
    </>
  )
}

export default App
