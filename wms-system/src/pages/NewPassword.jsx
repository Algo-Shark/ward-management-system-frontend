import React from "react";
import Video from "../assets/img/video.mp4"
import { Link } from "react-router-dom";
import "./newPassword.css"

export default function NewPassword() {
    return (
        <div className="password-container">
            <div className="container-password-video">
                <video id="video-password" src={Video} autoPlay muted loop />
            </div>
            <div className="form-password-verify">
                <form id="login-form">
                    <h1 id="set-password-heading">Set New Password</h1>
                    <p id="para-create-new-password">Creating a new password is easy.<br></br> Enter the new password you want to create<br></br> and repeat it.</p>
                    <input id="password-entry" className="input-login" type="password" placeholder="Password" />
                    <input className="input-login" type="password" placeholder="Verify Password" required name="password" />
                    <Link to="/">
                        <button id="btn-login">Proceed</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}