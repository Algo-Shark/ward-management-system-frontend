import React from "react";
import SideBar from "./SideBar";
import "./dashboard.css"
import Image from "../assets/img/doc.avif"
import Patient from "../assets/img/Sick.png"
import Doctor from "../assets/img/Medical Doctor.png"
import Nurse from "../assets/img/Nurse.png"
import Happy from "../assets/img/Happy.png"
import Sad from "../assets/img/Sad.png"
import Crying from "../assets/img/Crying.png"
import Angry from "../assets/img/Angry.png"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export default function dashBoard() {
    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        
        const getDaySuffix = (day) => {
            if (day >= 11 && day <= 13) {
                return "th";
            }
            switch (day % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        };

        const dayWithSuffix = day + getDaySuffix(day);

        return `${dayWithSuffix} of ${month} ${year}`;
    };
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 50000);
        return () => clearInterval(interval);
    }, []);
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
                                <img src={Patient} alt="patient" />
                                <p className="count-data">Patients</p>
                                <h3 className="count-value">80</h3>
                            </div>
                            <div className="count" id="doctor">
                                <img src={Doctor} alt="patient" />
                                <p className="count-data">Doctors</p>
                                <h3 className="count-value">12</h3>
                            </div>
                            <div className="count" id="staff">
                                <img src={Nurse} alt="patient" />
                                <p className="count-data">Staff</p>
                                <h3 className="count-value">34</h3>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="bottom-container-one">
                                <div className="bottom-container-one-container-one">
                                    <p id="h5-latest">Date</p>
                                    <h1 id="h5-latest-date">{formatDate(currentDate)}</h1>
                                </div>
                                <div className="bottom-container-one-container-two">
                                    <div className="register">
                                    <h5>R</h5>
                                    <h5>E</h5>
                                    <h5>G</h5>
                                    <h5>I</h5>
                                    <h5>S</h5>
                                    <h5>T</h5>
                                    <h5>E</h5>
                                    <h5>R</h5>
                                    <Link to="/users/add">
                                    <button id="btn">Register Patient</button>
                                    </Link>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="bottom-cotainer-second">
                                <div className="container-one-bottom-second">
                                    <h5 id="h5-latest">Lastest Patient</h5>
                                    <h2 id="h5-latest-date">Dashan - WARD 2 BED 3</h2>
                                </div>
                                <div className="container-two-bottom-second">
                                    <h5 id="h5-latest-second">How is your mood today</h5>
                                    <div className="images">
                                        <img src={Happy} alt="happy" />
                                        <img src={Sad} alt="sad" />
                                        <img src={Angry} alt="angry" />
                                        <img src={Crying} alt="crying" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}