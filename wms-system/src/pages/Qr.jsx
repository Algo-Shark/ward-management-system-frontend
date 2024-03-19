import React from "react";
import "./qr.css"
import Image from "../assets/img/qr.png"

export default function Qr() {
    return (
        <div className="qr-container">
            <div className="qr-code-container">
                <div className="qr-content">
                    <img src={Image} width="300px"/>
                </div>
            </div>
            <h1 id="qr-code">QR code</h1>
            <p id="para-qr">Use this QR code in order to do all activities related to the patient,if in case QR code lost please contact the hospital</p>
        </div>
        
    )
}