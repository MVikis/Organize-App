import React, { Component } from 'react';

import {motion} from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logPic from './logistics.svg'
import Frame from './Frame1.svg'


export default function Home(){
  

 
    return (

     
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      className="home column"
      >
      
        <div className="row">
          <div className="home-text">
            <h1>Organize.</h1>
            <h3>wefwefsfs wefwsfswe wedwwffgf.</h3>
          </div>
        
        </div>
        {/* <div className="img-container">
       <img src={Frame}/>

        </div> */}
        <motion.div 
        initial={{x:200}}
        animate={{x:0}}
        exit={{opacity:0}}
        className="front-svg">
       <img src={logPic}/>

        </motion.div>
      
      
      </motion.div>
     
    );
  
}
