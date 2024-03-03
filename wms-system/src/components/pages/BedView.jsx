import React from "react";
import Bed from "../common/Bed";
import "./bedView.css"
import SideBar from "../../pages/SideBar";

export default function BedView() {
    return (
        <div className="row-1">
            <SideBar/>            
            <div className="container-beds col-10">
                <Bed bedNum="B1" available="true" />
                <Bed bedNum="B2" available="false" />
                <Bed bedNum="B3" available="false" />
                <Bed bedNum="B4" available="true" />
                <Bed bedNum="B1" available="true" />
                <Bed bedNum="B2" available="false" />
                <Bed bedNum="B1" available="true" />
                <Bed bedNum="B2" available="false" />
                <Bed bedNum="B3" available="false" />
                <Bed bedNum="B4" available="true" />
                <Bed bedNum="B1" available="true" />
                <Bed bedNum="B2" available="false" />
                <Bed bedNum="B1" available="true" />
                <Bed bedNum="B2" available="false" />
                <Bed bedNum="B3" available="false" />
                <Bed bedNum="B3" available="false" />
            </div>

        </div>

    )
}