import React from "react";
import video from "../assets/img/video.mp4"
import "./email.css"
import { Link } from "react-router-dom";

export default function Email() {
    return (
        <div className="forgot-container">
            <div className="contaiiner-video-forgot">
                <video id="video-forgot" src={video} autoPlay muted loop />
            </div>
            <div className="content">
                <h1 id="content-heading">Forgot password</h1>
                <p id="para-forget-password">No worries enter your email address and we will share a reset link</p>
                <input id="email-field" type="text" placeholder="Enter your email" />
                <Link to="/otp">
                    <button id="btn-submit">Submit</button>
                </Link>
            </div>
        </div>
    )
}