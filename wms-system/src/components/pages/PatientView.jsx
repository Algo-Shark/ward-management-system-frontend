import React from "react";
import SideBar from "../../pages/SideBar";
import { Link, useParams } from "react-router-dom"
import Data from "../../../../Data";
import "./patientView.css"
import video from "../../assets/img/bgvideo.mp4"

export default function PatientView() {
    const { ward, bed } = useParams()

    const wardInfo = Data.find((data) => data.ward == ward);

    const beds = wardInfo.beds.find((data) => data.bed == bed)

    return (
        <div className="component-patient-info">
            <SideBar />
            <div className="container-patient-info">
                <div className="container-patient-main">
                    <Link id="link" to={`/wards/${ward}`}>
                        <p id="back-btn-patient-info">Back</p>
                    </Link>
                </div>
                <div className="heading-image">
                    <video id="image-heading" src={video} width="800px" height="100px" autoPlay muted loop/>
                </div>
                <div className="name-container">
                    <h3 id="patient-name">Dashan Nadeema Wickramasuriya</h3>
                    <p className="para-patient-view">Patient name</p>
                </div>
                <div className="secondary-container">
                    <div className="ward-number">
                        <h5 id="patient-name">{ward}</h5>
                        <p className="para-patient-view">Name of the ward</p>
                    </div>
                    <div className="bed-number">
                        <h5 id="patient-name">{bed}</h5>
                        <p className="para-patient-view">Number of the bed</p>
                    </div>
                </div>
                <div className="personal-info">
                    <div className="patient-age">
                        <h5 id="patient-name">20</h5>
                        <p className="para-patient-view">Age</p>
                    </div>
                    <div className="patient-gender">
                        <h5 id="patient-name">Male</h5>
                        <p className="para-patient-view">Gender</p>
                    </div>
                    <div className="patient-nationality">
                        <h5 id="patient-name">Sri lankan</h5>
                        <p className="para-patient-view">Nationality</p>
                    </div>
                </div>
                <div className="medical-info">
                    <div className="heading-diagonosis">
                        <h5 id="patient-name">Diagonosis</h5>
                        <p className="info">Here the patient diagonosis will be added to the ejgfioshgirebgrb
                            ifgriyfgv iuguidfgviudfguifdhiufsgiugfdckvbdiufguvidu hreiuhjkbdfus
                            ydvnbvdiflojhbiofdhbioerhgv iodfhgiofuh iojhgkjfhjbfdhjb gfjo rhfb
                            jkfhguobgfuihukfdg uifg</p>
                    </div>
                </div>
                <div className="heading-medication">
                    <h5 id="patient-name">Medications</h5>
                    <p className="info">Medications related to the patient can be viewed in here and also ydvnbvdiflojhbiofdhbioerhgv iodfhgiofuh iojhgkjfhjbfdhjb gfjo rhfb  </p>
                </div>
                <div className="heading-medication">
                    <h5 id="patient-name">Instructions</h5>
                    <p className="info">Medications related to the patient can be viewed in here and also ydvnbvdiflojhbiofdhbioerhgv iodfhgiofuh iojhgkjfhjbfdhjb gfjo rhfb  </p>
                </div>
            </div>

        </div>

    )
}
