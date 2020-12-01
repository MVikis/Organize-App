import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'

export default function Box(props) {
    const history = useHistory()
  
    const PushHistory=()=>{
     
        history.push('/container/' + props.Container.containerId,props.Container)
    }
    console.log(props.Container)
    return (
        <div onClick={PushHistory} className="box-card column">
            
            <FontAwesomeIcon icon="box-open"/>
             <h3>{props.Container.containerName}</h3>
        </div>
        )
}