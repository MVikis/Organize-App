import React, { useState } from 'react'
import Box from './Box'

export default function UserPage(props) {

const[Containers, setContainers] =useState(populateContainerData)
const [newContainer, setNewContainer] = useState({ContainerName:'', Items:[]})

const FormChange=(event)=>{
 const { value} = event.target
 setNewContainer({ContainerName:value})
  }
const handleSumbit = (event) => {
    fetch('api/containers', {  
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json',
        },
        body: newContainer,  
    }).then((response) => response.json())  
        .then((responseJson) => {  
            console.log(responseJson)
            // props.history.push("/userpage/container/"+responseJson);  
        })  
  }

    
  const populateContainerData=async()=> {
    const response = await fetch('api/Containers');
    const data = response.json();
   return data 
  }

    return (
        <div className="column">
            <form autoComplete="off" className="form-inline" onSubmit={handleSumbit}>
        
        <input className="item" onChange={FormChange} name="text" type="text"></input>
        
      <button className="form-button flex fa-secondary" type="submit">
        <FontAwesomeIcon  icon="plus-circle"></FontAwesomeIcon>
        </button>
        
       
    </form>
            <div className="row">
                {Containers.map((Container)=>
                <Box key={ContainerId} Container={Container}/>)}
                        
                </div>
        </div>
        )
}