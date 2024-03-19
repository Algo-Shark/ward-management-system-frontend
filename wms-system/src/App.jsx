import './App.css'
import Login from "./pages/Login"
import BedView from './components/pages/BedView'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PatientRegistration from "../src/components/pages/patient-registration"
import Email from "./pages/Email"
import Otp from './pages/Otp'
import NewPassword from "./pages/NewPassword"
import WardsView from './pages/WardsView'
import PatientView from './components/pages/PatientView'
import Patients from './pages/Patients'
import Qr from './pages/Qr'
import Er from './pages/Er'
import DashBoard from './pages/DashBoard'
import Admit from './pages/Admit'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/wards/:ward' element={<BedView />}></Route>
          <Route path='/wards/:ward/:bed' element={<PatientView />}></Route>
          <Route path='/users' element={<Patients />}></Route>
          <Route path='/users/add' element={<PatientRegistration />}></Route>
          <Route path='/forgot' element={<Email />}></Route>
          <Route path='/wards' element={<WardsView />}></Route>
          <Route path='/otp' element={<Otp />}></Route>
          <Route path='/newPassword' element={<NewPassword />}></Route>
          <Route path='/qr' element={<Qr />}></Route>
          <Route path='/er' element={<Er />}></Route>
          <Route path='/dashBoard' element={<DashBoard />}></Route>
          <Route path='/admit' element={<Admit/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
