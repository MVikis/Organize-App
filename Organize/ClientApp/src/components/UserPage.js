import React, { useState,useEffect } from 'react'
import Search from './Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {motion, AnimateSharedLayout} from 'framer-motion'
import Container from './Container'
import Loader from './Loader'

const transition = {  duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] };

export default function UserPage(props) {
  useEffect(() => {
    populateContainerData()
  }, [])
 
const[Containers, setContainers] =useState([])
const [newContainer, setNewContainer] = useState({ContainerName:''})

const FormChange=(event)=>{
 const { value} = event.target
 setNewContainer({ContainerName:value})
 
  }
  


    
 async function populateContainerData() {
    await fetch('api/Containers/')
    .then(response => response.json())
    .then(json => setContainers(json))
    
   
   
  }
  const AddNewContainer=()=>{
    return(
        <form autoComplete="off" className="form-inline" onSubmit={()=>props.handleSumbit(newContainer, '/Containers/')}>
        
    <motion.div
    
    exit={{opacity:0}}
    transition={transition}
 
     className="wrapper">
      <div className="input-data">
      <input required onChange={FormChange} name="text" type="text"></input>
<label>Add Container</label>
      <div className="underline"/>
      <div className="underline-gray"/>
      <button type="submit">
    <FontAwesomeIcon  icon="plus"/>
    </button>
      </div>
    </motion.div>
    
    

    
   
</form>)
  }

    return (
        <motion.div
        transition={transition}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0,transition:{delay:1, duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}}}
        className="column">
          <div className="row">
         
        {AddNewContainer()}
        </div>
        {Containers.length===0?
        <Loader/>:( <div className="row">
            
        { Containers.map(ContainerData=>
        <Container key={ContainerData.ContainerId} Container={ContainerData}/>                )}
        
        </div>)
      }
           
        </motion.div>
        )
}