import React from "react"
import Image from "../../assets/img/Hospital Room.png"
import "./Bed.css"


function Bed(props){
    return (
        <div className="bed-contianer col-5">
            <img className="img-fluid" width="150px" src={Image} alt="image of the bed"/>
            <h3>{props.bedNum}</h3>
            <div className={props.available==="true"?"green":"red"}></div>
        </div>
    )
}

export default Bed