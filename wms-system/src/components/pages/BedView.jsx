import React from "react";
import Bed from "../common/Bed";
import "./bedView.css"
import SideBar from "../common/sidebar"

export default function BedView() {
    return (
        <div className="row">
            <div className="bedview-container col-2">
                <SideBar />
            </div>
            <div className="container-beds col-10">
                <Bed bedNum="B1" available="true" />
                <Bed bedNum="B2" available="false" />
                <Bed bedNum="B3" available="false" />
                <Bed bedNum="B4" available="true" />

                <Bed bedNum="B1" available="true" />
                <Bed bedNum="B2" available="false" />
                <Bed bedNum="B3" available="false" />
                <Bed bedNum="B4" available="true" />
            </div>

        </div>

    )
}