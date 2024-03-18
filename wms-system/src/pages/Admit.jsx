import { Dropdown } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./admit.css"

export default function Admit() {

    return (
        <>
            <div className='contianer-register'>
                <Link id="link-back" to="/users">
                    <p id='back'>Back</p>
                </Link>
                <div className='contianer-registration'>
                    <h2 id='patient-registation-heading'>Patient Admission</h2>
                    <p id='patient-registration-para'>Fill these information in order to admit the patient<br></br> </p>
                    <input className='input-fld' type='text' name='name' placeholder='Patient ID'></input>
                    <p>Patient Name : Dashan Nadeema</p>
                    <p>Nic : 2004590960</p>
                    <p>Gender : Male</p>
                    <textarea className='input-fld' type='text' name='address' placeholder='Admit Reason' ></textarea>
                    <div className='calender-gender'>
                        <input type='date' name='dob' placeholder='Enter Patient Date of Birth' ></input>
                    </div>
                    <div className="class">
                        <input id="hi" className='input-fld' type='text' name='name' placeholder='Select Ward'></input>
                        <input id="hi" className='input-fld' type='text' name='name' placeholder='Select Bed'></input>
                        <input id="hi" className='input-fld' type='text' name='name' placeholder='Select docotor'></input>
                    </div>
                    <div className='btn-container'>
                        <button className='primary-btn'>Save the user</button>
                    </div>
                </div>

            </div>
        </>
    )
}