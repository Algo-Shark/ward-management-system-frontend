import React from "react";
import SideBar from "../../pages/SideBar";
import { Link, useParams } from "react-router-dom"
import Data from "../../../../Data";
import "./patientView.css"

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
                <div className="name-container">
                    <h3>Dashan Nadeema Wickramasuriya</h3>
                    <p>Patient name</p>
                </div>
                <div className="ward-number">
                    <h5>{ward}</h5>
                    <p>Name of the ward</p>
                </div>
                <div className="bed-number">
                    {/* <h5>{bed}</h5>                      add a div to the both of them  */}
                    <p>Number of the bed</p>
                </div>
            </div>

        </div>

    )
}
