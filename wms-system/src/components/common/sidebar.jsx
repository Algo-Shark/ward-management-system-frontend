import React from 'react'

function Sidebar(){

  
  return (
    <>
          <div className="sidebar p-2" id="color">
            <div className="m-2">
            <img src="public\download.png" width={'45'} />
                <span className="brand-name fs-4 text-white fw-bold mx-3">P-N-H</span>
            </div>
            <hr className="text-dark" />

            <div className="active list-group  list-group-flush " id="parentMenu">
                <a className="list-group-item py-2" >
                    <i className="bi bi-speedometer2 fs-5 me-3"></i>
                    <span>Dashboard</span>
                </a>

                <a className="list-group-item py-2" >
                    <i className="bi bi-house fs-5 me-3"></i>
                    <span>Admission</span>
                </a>

                {/* Drop down start */}
                <a className="list-group-item py-2 nav-link" href="#submenu" data-bs-toggle="collapse" aria-current="page">
                    <i className="bi bi-people fs-5 me-3"></i>
                    <span className="text-white">Staff</span>
                    <i className="bi bi-arrow-down-short"></i>
                </a>


                <ul className="nav collapse" id="submenu" data-bs-parent="#parentMenu">
                    <li className="nav-item text-white list-group-item1">
                        <a className="list-group-item ">
                            <span>Doctor</span>
                        </a>
                    </li>
                    <li className="nav-item  text-white  list-group-item1">
                        <a className="list-group-item">
                            <span>Nurse</span>
                        </a>
                    </li>
                    <li className="nav-item  text-white  list-group-item1">
                        <a className="list-group-item">
                            <span>Attendance</span>
                        </a>
                    </li>
                </ul>
                {/* Drop down end */}

                <a className="list-group-item py-2">
                    <i className="bi bi-clipboard-data fs-5 me-3"></i>
                    <span>Wards</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-people fs-5 me-3"></i>
                    <span>Patients</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-power fs-5 me-3"></i>
                    <span>Logout</span>
                </a>
            </div>
        </div>
    </>
  );
};

export default Sidebar