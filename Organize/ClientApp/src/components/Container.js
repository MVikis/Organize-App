import { useHistory } from 'react-router-dom'
import {motion} from 'framer-motion'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Container(props){
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = (url) =>{
      setIsOpen(!isOpen);
      history.push('user/'+url)
    } 
    const opacityVariants ={
      hidden: {opacity:0},
      show: {opacity:1},
      exit:{opacity:0}

    }
    const targetVariants ={
      hidden: {y:-200},
      show: {y:0},
      exit: {y:-200, opacity:0,
        transition:{ delay:0.4, duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
      }
     
      
    }
     return(
              <motion.div
                   variants={isOpen?targetVariants:opacityVariants}
                   initial='hidden'
                   animate='show'
                  
                   whileHover={{scale:1.1}}
                   exit='exit'
                   
                    onClick={()=>toggleOpen(props.Container.containerId)} className="box-card column">
              
                   <FontAwesomeIcon id="box-icon" icon="box-open"/>
                  
                    <h2 className="title-name">{props.Container.containerName}</h2>
               </motion.div>
     )
   }
  