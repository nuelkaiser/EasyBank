import React from 'react'
import './Reason.css'
function Reason( {img, text, heading } ) {
    return (
        <div>
            <img  src={img}  alt={img} />

            <h2> {heading} </h2>

            <p> {text} </p>
            
        </div>
    )
}

export default Reason
