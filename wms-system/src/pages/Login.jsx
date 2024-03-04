import React, { useState } from "react";
import Video from "../assets/img/video.mp4"
import Image from "../assets/img/Logo.png"
import "./Login.css"
import { Link } from "react-router-dom";
import  Axios  from "axios";


export default function Login() {
    const url=""
    const [formData,setFormData]=useState({
        username:"",
        password:""
    })

    function handleChange(e){
        setFormData((prevState)=>{
            return{
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
    }
    function submitForm(e){
        e.preventDefault()
        Axios.post(url,{username:formData.username,password:formData.password})
        .then((res)=>{
            if(res===true){

            }
            else{
                <p>password is incorrect</p>
            }
        })
    }
    return (
        <div className="container-login">
            <video id="image-login" src={Video} width="400px" autoPlay muted loop />
            
            <div className="content-login">
                <div className="heading-login">
                    <h1 id="heading-login-main">Panadura Nursing Home</h1>
                    <h2 id="login-heading">Login</h2>
                </div>

                <div className="form-content">
                    <form id="login-form">
                        <label htmlFor="username">Username</label>
                        <input className="input-login" type="text" placeholder="Email or Phone" required name="username" onChange={(e)=>handleChange(e)} />
                        <label htmlFor="password">Password</label>
                        <input className="input-login" type="password" placeholder="Password" required name="password" onChange={(e)=>handleChange(e)}/>
                        <Link to="/forgot">
                        <p id="forgot-password">Forgot password click here</p>
                        </Link>
                        <Link to="/Dashboard">
                        <button id="btn-login" onClick={(e)=>submitForm(e)}>Log In</button>
                        </Link>
                    </form>
                </div>
            </div>
            <img id="logo" src={Image} width="100px" />
        </div>

    )
}