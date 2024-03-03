import React from "react";
import "./sideBar.css"
import Image from "../assets/img/Logo.png"
import Dashboard from "../assets/img/icon-dashboard.png"
import Admission from "../assets/img/icon-admissions.png"
import Staff from "../assets/img/icon-staff.png"
import Patients from "../assets/img/icon-patients.png"
import Wards from "../assets/img/icon-wards.png"

export default function SideBar(){
    return(
        <div className="sidebar-container">
            <img id="logo-sidebar" src={Image} width="80x"/>
        <div className="sidebar">
                <div className="properties">
                <ol className="orderedlist">
                    <li className="listedItem" id="icon-dashboard"><img src={Dashboard}/></li>
                    <li className="listedItem"><img src={Admission}/></li>
                    <li className="listedItem"><img src={Staff} width="44px"/></li>
                    <li className="listedItem"><img src={Patients} width="46px"/></li>
                    <li className="listedItem"><img src={Wards} width="52px"/></li>
                </ol>
                </div>
                
        </div>
        </div>
    )
}