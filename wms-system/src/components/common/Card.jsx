import React from "react";
import './Card.css'
function Card(props){

    return(
        <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.count}</p>
            </div>
        </div>
        </>
    )
}
export default Card