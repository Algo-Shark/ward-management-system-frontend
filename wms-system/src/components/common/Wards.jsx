import React from "react";
import Image from "../../assets/img/ward100.png"
import "./wards.css"
import { Link } from "react-router-dom";

export default function Wards(props){
    return(
        <Link className="links" to={`/wards/${props.ward}`}>
            <div className={props.availability==true?"ward-container col-6":"ward-container-red col-6"}>
            <img className="img-fluid" width="100px" src={Image} alt="image of the bed"/>
            <h3>{props.ward}</h3>
            <div className={props.availability==true?"green":"red"}></div>
        </div>
         </Link>
        
    )
}