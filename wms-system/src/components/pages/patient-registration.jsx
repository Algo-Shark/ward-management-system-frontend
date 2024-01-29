import React from 'react'
import './patient-registration.css'
function Registration(){
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-9" id="middleContent">
          <h2 className='pt-5 ps-5' id="patRegTitle">Patient Registration</h2>
         

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
                  <label htmlFor='telephone' className='form-label'>Telephone ID</label>
                  <input type="text" className='regInput form-control' id="telephone"/>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='religion' className='form-label'>Religion</label>
                  <input type="text" className='regInput form-control' id="religion"/>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='dob' className='form-label'>Date Of Birth</label>
                  <input type="text" className='regInput form-control' id="dob"/>
                </div>
                <div className="col-10 mb-3">
                  <label htmlFor='address' className='form-label'>Address</label>
                  <input type="text" className='regInput form-control' id="address"/>
                </div>
                <div className="col-10 mb-3">
                <button type="button" id="registerBtn" className="regInput">Register</button>
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

export default Registration