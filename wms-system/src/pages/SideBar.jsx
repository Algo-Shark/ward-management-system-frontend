import React from "react";
import "./sideBar.css"
import Image from "../assets/img/Logo.png"
import Dashboard from "../assets/img/icon-dashboard.png"
import Admission from "../assets/img/icon-admissions.png"
import Staff from "../assets/img/icon-staff.png"
import Patients from "../assets/img/icon-patients.png"
import Wards from "../assets/img/icon-wards.png"
import { Link } from "react-router-dom";

export default function SideBar() {

    
    return (
        <div className="sidebar-container">
            <Link to="/">
            <img id="logo-sidebar" src={Image} width="80x" />
            </Link>
            <div className="sidebar">
                <div className="properties">
                    <ol className="orderedlist">
                        <Link to="/dashBoard">
                            <li className="listedItem" id="icon-dashboard"><img src={Dashboard} /></li>
                        </Link>


                        <Link to="/users">
                            <li className="listedItem"><img src={Admission} /></li>
                        </Link>


                        <Link to="/staff">
                            <li className="listedItem"><img src={Staff} width="44px" /></li>
                        </Link>


                        <Link to="/er">
                            <li className="listedItem"><img src={Patients} width="46px" /></li>
                        </Link>


                        <Link to="/wards">
                            <li className="listedItem"><img src={Wards} width="52px" /></li>
                        </Link>
                    </ol>
                </div>

            </div>
        </div>
    )
}