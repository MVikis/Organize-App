import React, { useState } from 'react';
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 const Popup=({content})=>{
    const searchVariants={
        initial:{y:-200,opacity:0},
        animate:{y:0,opacity:1},
        exit:{y:-200, opacity:0},
        transition:{ delay:0.2, duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
     
    
       
     
        const mobileNavbar=()=>{
          return(
            <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
          exit={{opacity:0}}
        className="search-overlay">
      <motion.div    variants={searchVariants}
                        initial='initial'
                      animate='animate'
                        exit='exit'
                        transition='transition'
                        className="search-list">
                             
                           {content}
                           <svg className="wave"
        xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320"><path  fill="#3aafa9" fillOpacity="1" d="M0,64L48,85.3C96,107,192,149,288,176C384,203,480,213,576,208C672,203,768,181,864,154.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
               
                            </motion.div></motion.div>

          )
        }
        return(
            mobileNavbar()
        )
}
export default Popup