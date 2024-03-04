import { useState } from 'react'
import './App.css'
import Login from "./pages/Login"
import BedView from './components/pages/BedView'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideBar from "./pages/SideBar"
import Bed from './components/common/Bed'
import PatientRegistration from "../src/components/pages/patient-registration"
import WardCard from './components/common/Ward-cards'
import PatientAdmission from "./components/pages/patient-admission"

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path='/beds' element={<BedView/>}></Route>
        <Route path='/admission' element={<PatientAdmission/>}></Route>
        </Routes>
    </BrowserRouter> 
    {/* <PatientAdmission/> */}
    </>
  )
}

export default App
