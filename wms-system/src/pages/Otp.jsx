import React from "react";
import Video from "../assets/img/video.mp4"
import "./otp.css"
import { Link } from "react-router-dom";


export default function Otp() {

    function resendOtp(){
        console.log("hi")
    }
    return (
        <div className="forgot-container">
            <div className="contaiiner-video-forgot">
                <video id="video-forgot" src={Video} width="400px" autoPlay muted loop />
            </div>
            <div className="container-otp">
                <div className="">
                    <h1 id="heading-content">OTP</h1>
                    <p id="para-otp">Please enter the OTP sent to your email</p>
                </div>
                <div className="inputs">
                    <input class="input" type="text"
                        inputmode="numeric" maxlength="1" placeholder="*" />
                    <input class="input" type="text"
                        inputmode="numeric" maxlength="1" placeholder="*"/>
                    <input class="input" type="text"
                        inputmode="numeric" maxlength="1" placeholder="*"/>
                    <input class="input" type="text"
                        inputmode="numeric" maxlength="1" placeholder="*"/>
                </div>
                <div className="otp-resend">
                    <p id="para-resend" onClick={resendOtp}>Resend OTP click here</p>
                    <Link to="/newPassword">
                    <button id="btn-submit-otp">Submit</button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}