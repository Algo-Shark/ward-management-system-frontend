import React, { useState } from 'react'
import './patient-registration.css'
import  Axios from 'axios'

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
    <div className="container">
      <div className="row">
        <div className="col-9" id="middleContent">
          <h2 className='pt-5 ps-5' id="patRegTitle">Patient Registration</h2>
          <div className="pt-5 ps-5">
          <form>
            <div className="row">

              <div className="col-md-6">
                <div className="col-10 mb-3">
                  <label htmlFor='patientID' className='form-label'>Patient ID</label>
                  <input type="text" className='regInput form-control' id="patientId" name='patientId' onChange={(e)=> handleChange(e)}/>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='patientName' className='form-label'>Patient Name</label>
                  <input type="text" className='regInput form-control' id="patientName" name="patientName" onChange={(e)=> handleChange(e)}/>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='NIC' className='form-label'>NIC</label>
                  <input type="text" className='regInput form-control' id="NIC" name='NIC' onChange={(e)=> handleChange(e)}/>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='nationality' className='form-label'>Nationality ID</label>
                  <input type="text" className='regInput form-control' id="nationality" name='nationality' onChange={(e)=> handleChange(e)}/>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='gender' className='form-label'>Gender</label>
                  <input type="text" className='regInput form-control' id="gender" name='gender' onChange={(e)=> handleChange(e)}/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="col-10 mb-3">
                  <label htmlFor='telephone' className='form-label'>Telephone ID</label>
                  <input type="text" className='regInput form-control' id="telephone" name='telephone' onChange={(e)=> handleChange(e)}/>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='religion' className='form-label'>Religion</label>
                  <input type="text" className='regInput form-control' id="religion" name='religion' onChange={(e)=> handleChange(e)}/>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='dob' className='form-label'>Date Of Birth</label>
                  <input type="text" className='regInput form-control' id="dob" name='dob' onChange={(e)=> handleChange(e)}/>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='address' className='form-label'>Address</label>
                  <input type="text" className='regInput form-control' id="address" name='address' onChange={(e)=> handleChange(e)}/>
                </div>
                <div className="col-10 mb-3">
                <button type="button" onClick={(e)=>submitForm(e)} id="registerBtn" className="regInput">Register</button>
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Registration