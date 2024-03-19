import React from "react";
import SideBar from "./SideBar";
import Wards from "../components/common/Wards";
import "./wardsView.css"
import Data from "../../../Data";

export default function WardsView() {
    const data = Data.map((data) => {
        return (
            <Wards key={data.ward} availability={data.availability} ward={data.ward} />
        )
    })
    return (
        <div className="row-1">
            <SideBar />
            <div className="container-wards col-10">
                {data}
            </div>

        </div>

    )
}