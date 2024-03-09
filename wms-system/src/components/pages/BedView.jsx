import React from "react";
import Bed from "../common/Bed";
import "./bedView.css"
import SideBar from "../../pages/SideBar";
import Data from "../../../../Data";
import { useParams } from "react-router-dom"

export default function BedView() {
    const { ward } = useParams();

    const wardInfo = Data.find((data) => data.ward == ward);
    const beds = wardInfo.beds.map((bed) => {
        return (
            <Bed bedNum={bed.bed} available={bed.availability} ward={wardInfo.ward} />
        )
    })
    return (
        <div className="row-1">
            <SideBar />
            <div className="container-beds col-10">
                {beds}
            </div>

        </div>

    )
} 