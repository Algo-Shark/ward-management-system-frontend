import React from "react"
import Image from "../../assets/img/Hospital Room.png"
import "./Bed.css"
import { Link } from "react-router-dom"


function Bed(props) {
    console.log(props)
    return (
        <Link id="bed" to={`/wards/${props.ward}/${props.bedNum}`}>
            <div className={props.available === true ? "bed-container col-5" : "bed-container-red col-5"}>
                <img className="img-fluid" width="100px" src={Image} alt="image of the bed" />
                <h3>{props.bedNum}</h3>
                <div className={props.available === true ? "green" : "red"}></div>
            </div>
        </Link>

    )
}

export default Bed