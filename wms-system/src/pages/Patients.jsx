import React, { useState } from "react";
import SideBar from "./SideBar";
import { Link, useNavigate } from "react-router-dom";
import "./patients.css"
import Search from "../assets/img/Search .png"
import Users from "../../../Users";
import Axios from "axios";

export default function Patient() {
    const [admit, setAdmit] = useState(false)
    const navigate=useNavigate();

    function admitPatient() {
        navigate("/admit")
    }

    const users = Users.map((user) => {
        return (
            <tr id="table-row-patient">
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.nationality}</td>
                <td>{user.gender}</td>
                <td><button id={user.status === true ? "btn-green" : "btn-red"} onClick={user.status === true && admitPatient}
                
                
                >{user.status === true ? "Available" : "Admitted"}</button></td>
            </tr>
        )
    })
    return (
        <div className="container-patient">
            <SideBar />
            <div className="container-patient-table">
                <div className="input-fields-patient">
                    {/* <img src={Search} width="20px"></img> */}
                    <input id="txt-fld-search" type="text" placeholder="Search patients"></input>
                    <Link id="link" to="/users/add">
                        <button id="btn-add-patients" >Add</button>
                    </Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Name</th>
                            <th>Nationality</th>
                            <th>Gender</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users}
                    </tbody>
                </table>
            </div>
        </div>
    )
}