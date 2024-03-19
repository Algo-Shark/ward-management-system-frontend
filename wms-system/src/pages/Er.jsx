import React from "react";
import { Link } from "react-router-dom";
import "./er.css"


export default function Er() {
    return (
        <div className='contianer-register'>
            <Link id="link-back" to="/users">
                <p id='back'>Back</p>
            </Link>
            <div className='contianer-registration'>
                <h2 id='patient-registation-heading'>Patient Record</h2>
                <p id='patient-registration-para'>Fill these information by the doctor.<br></br>These information can be later checkout for the diagonostic of the patient </p>
                <input className='input-fld' type='text' name='id' placeholder='Enter Patient ID' onChange={(e) => handleChange(e)}></input>
                <input className='input-fld' type='text' name='name' placeholder='Patient Name' onChange={(e) => handleChange(e)}></input>
                <input className='input-fld' type='number' name='age' placeholder='Patient Age' onChange={(e) => handleChange(e)}></input>
                <input className='input-fld' type='text' name='gender' placeholder='Patient Gender' onChange={(e) => handleChange(e)}></input>
                <textarea className="input-fld" name="instructions" placeholder="Instructions to be filled by doctor" onChange={(e) => handleChange(e)} />
                <textarea className="input-fld" name="instructions" placeholder="Diaganosis to be filled by the doctor" onChange={(e) => handleChange(e)} />
                <textarea className="input-fld" name="instructions" placeholder="Medications to be filled by the doctor" onChange={(e) => handleChange(e)} />
                <div className='btn-container'>
                    <button className='primary-btn-submit' onClick={(e) => submitForm(e)}>Save Electronic Record</button>
                </div>
            </div>

        </div>
    )
}