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
import Email from "./pages/Email"
import Otp from './pages/Otp'
import NewPassword from "./pages/NewPassword"

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path='/beds' element={<BedView/>}></Route>
        <Route path='/admission' element={<PatientAdmission/>}></Route>
        <Route path='/forgot' element={<Email/>}></Route>
        <Route path='/otp' element={<Otp/>}></Route>
        <Route path='/newPassword' element={<NewPassword/>}></Route>
        </Routes>
    </BrowserRouter> 
    {/* <PatientAdmission/> */}
    </>
  )
}

export default App
