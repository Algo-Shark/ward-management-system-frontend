import React from "react";
import SideBar from "./SideBar";
import "./dashboard.css"
import Image from "../assets/img/doc.avif"

export default function dashBoard() {
    return (
        <div className="dashboar-main-container">
            <div className="container-dashboard-start">
                <SideBar />
                <div className="container-dashboard">
                    <div className="contienr-dashboard-header">
                        <div className="dashboard-para">
                            <h1 id="heading-dashaboard">Medical</h1>
                            <p id="para-dashboard">Dashboard</p>
                        </div>
                        <div className="porfile-img">
                            <img id="img" src={Image} alt="hi" width="100px" />
                        </div>
                    </div>
                    <div className="container-dashboard-content">
                        <div className="top">
                            <div className="count" id="patient">

                            </div>
                            <div className="count" id="doctor">
                                
                            </div>
                            <div className="count" id="staff">
                                
                            </div>
                        </div>
                        <div className="bottom">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}