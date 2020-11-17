import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Box(props) {

    return (
        <div className="box-card column">
            
            <FontAwesomeIcon icon="box-open"/>
             <h3>{props.name}</h3>
        </div>
        )
}