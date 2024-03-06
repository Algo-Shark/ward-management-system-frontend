import React, { useState } from 'react'
import './patient-registration.css'
import  Axios from 'axios'
import SideBar from '../../pages/SideBar'
import { Link } from 'react-router-dom'

function Registration(){

  const url=""
  const [formData,setFormData]=useState({
    patientId:"",
    patientName:"",
    NIC:"",
    nationality:"",
    gender:"",
    telephone:"",
    religion:"",
    dob:"",
    address:""
  })


  function handleChange(e){
    setFormData((prevState)=>{
        return{
          ...prevState,
          [e.target.name]:e.target.value
        }
    })
  }

  function submitForm(e){
    e.preventDefault()
    Axios.post(url,formData)
    .then((res)=>{
      console.log(`${res} hi`);
    })
  }

  console.log(formData)

  return (
    <>
      <div className='contianer-register'>
        <Link id="link-back" to="/users">
        <p id='back'>Back</p>
        </Link>
          <div className='contianer-registration'>
          <h2 id='patient-registation-heading'>Patient Registration</h2>
            <p id='patient-registration-para'>Fill these information in order to add patient to the database<br></br> where you can addmit patient instantly without a hassel.</p>
            <input className='input-fld' type='text' placeholder='Enter Patient Full Name'></input>
            <input className='input-fld' type='text'placeholder='Enter Patient NIC (National identity card number)'></input>
            <input className='input-fld' type='text' placeholder='Enter Patient Nationality'></input>
            <input className='input-fld' type='number' placeholder='Enter Patient Telephone Number'></input>
            <input className='input-fld' type='text'placeholder='Enter Patient Religion'></input>
            <input className='input-fld' type='text' placeholder='Enter Patient Address'></input>
            <div className='calender-gender'>
            <input type='date' placeholder='Enter Patient Date of Birth'></input>
            <div className='input-radio'> 
            <input type="radio"/>
            <input type="radio"/>
            </div>
            </div>
            <div className='btn-container'>
            <button className='primary-btn'>Save the user</button>
            </div>
          </div>
          
      </div>
    </>
  );
};

export default Registration