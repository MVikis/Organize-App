import React, { useState } from 'react'
import Box from './Box'

export default function UserPage(props) {

const[Containers, setContainers] =useState([])
    
  const populateContainerData=async()=> {
    const response = await fetch('api/Containers');
    const data = await response.json();
    setContainers(data)
  }

    return (
        <div className="row">
                <Box />
            
        </div>
        )
}