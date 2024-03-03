import React from "react";
import Bed from "../common/Bed";
import "./bedView.css"
import SideBar from "../../pages/SideBar";
import Data from "../../../../Data";

export default function BedView() {

    return (
        <div className="row-1">
            <SideBar/>            
            <div className="container-beds col-10">
                <Bed bedNum="B1" available="true" />
                <Bed bedNum="B2" available="false" />
                <Bed bedNum="B3" available="false" />
                <Bed bedNum="B4" available="true" />
                <Bed bedNum="B5" available="true" />
                <Bed bedNum="B6" available="false" />
                <Bed bedNum="B7" available="true" />
                <Bed bedNum="B8" available="false" />
                <Bed bedNum="B9" available="false" />
                <Bed bedNum="B10" available="true" />
                <Bed bedNum="B11" available="true" />
                <Bed bedNum="B12" available="false" />
                <Bed bedNum="B13" available="true" />
                <Bed bedNum="B14" available="false" />
                <Bed bedNum="B15" available="false" />
                <Bed bedNum="B16" available="false" />
            </div>

        </div>

    )
}