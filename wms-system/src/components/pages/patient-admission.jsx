import React from 'react'
import './patient-admission.css'
function Admission(){
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-9" id="middleContent">
          <h2 className='pt-5 ps-5' id="patRegTitle">Patient Admission</h2>
          <div className="pt-5 ps-5">
            <div className="row">
              <div className="col-md-6">
                <div className="col-10 mb-3">
                  <label htmlFor='patientID' className='form-label'>Patient ID</label>
                  <input type="text" className='regInput form-control' id="patientId"/>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='patientName' className='form-label'>Patient Name</label>
                  <input type="text" className='regInput form-control' id="patientName"/>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='NIC' className='form-label'>NIC</label>
                  <input type="text" className='regInput form-control' id="NIC"/>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='nationality' className='form-label'>Nationality ID</label>
                  <input type="text" className='regInput form-control' id="nationality"/>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='gender' className='form-label'>Gender</label>
                  <input type="text" className='regInput form-control' id="gender"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="col-10 mb-3">
                  <label htmlFor='telephone' className='form-label'>Ward</label>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Select Ward</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='religion' className='form-label'>Bed</label>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Select Bed</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='dob' className='form-label'>Doctor</label>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Select Doctor</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                
                <div className="col-10 mb-3">
                <button type="button" id="registerBtn" className="regInput">Admit</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Admission