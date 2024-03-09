import React, { useEffect, useState } from 'react';
import './patient-registration.css';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Registration() {
  const url = "http://localhost:8081/patient/get";
  const urlPost = "http://localhost:8081/patient/add";
  const [response, setResponse] = useState({})
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    patientId: response.userId,
    name: "",
    nic: "",
    nationality: "",
    gender: "",
    telephone: "",
    religion: "",
    address: "",
    dob: ""
  })
  useEffect(() => {
    Axios.get(url)
      .then((res) => {
        setResponse(res.data)
      })
  }, [submitForm])

  function handleChange(e) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  function submitForm(e) {
    e.preventDefault()
    Axios.post(urlPost, formData)
      .then((res) => {
        if (res.status === 200) {
          Axios.post(`http://localhost:8081/api/qrcode/generate/${response.userId}`)
          .then((res)=>{
            console.log(res)
            navigate('/qr',res);
          })
          
        } else {
          navigate('/');
        }
      })
  }
  return (
    <>
      <div className='contianer-register'>
        <Link id="link-back" to="/users">
          <p id='back'>Back</p>
        </Link>
        <div className='contianer-registration'>
          <h2 id='patient-registation-heading'>Patient Registration</h2>
          <p id='patient-registration-para'>Fill these information in order to add patient to the database<br></br> where you can addmit patient instantly without a hassel.</p>
          <p>Patient ID : {response.userId}</p>
          <input className='input-fld' type='text' name='name' placeholder='Enter Patient Full Name' onChange={(e) => handleChange(e)}></input>
          <input className='input-fld' type='text' name='nic' placeholder='Enter Patient NIC (National identity card number)' onChange={(e) => handleChange(e)}></input>
          <input className='input-fld' type='text' name='nationality' placeholder='Enter Patient Nationality' onChange={(e) => handleChange(e)}></input>
          <input className='input-fld' type='number' name='telephone' placeholder='Enter Patient Telephone Number' onChange={(e) => handleChange(e)}></input>
          <input className='input-fld' type='text' name='religion' placeholder='Enter Patient Religion' onChange={(e) => handleChange(e)}></input>
          <input className='input-fld' type='text' name='address' placeholder='Enter Patient Address' onChange={(e) => handleChange(e)}></input>
          <div className='calender-gender'>
            <input type='date' name='dob' placeholder='Enter Patient Date of Birth' onChange={(e) => handleChange(e)}></input>
            <div className='input-radio'>
              <div className='lbl-radio'>
                <label htmlFor='radio-btn-male' className='html-for-radio'>Male</label>
                <label htmlFor='radio-btn-female' className='html-for-radio'> Female</label>
              </div>
              <div className='radio-btns'>
                <input type="radio" id='radio-btn-male' name='gender' value="male" onChange={(e) => handleChange(e)} />
                <input type="radio" id='radio-btn-female' name='gender' value="female" onChange={(e) => handleChange(e)} />
              </div>

            </div>
          </div>
          <div className='btn-container'>
            <button className='primary-btn' onClick={(e) => submitForm(e)}>Save the user</button>
          </div>
        </div>

      </div>
    </>
  );
};
