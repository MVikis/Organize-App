import React, { Component, useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import {motion} from 'framer-motion'


export default function Layout(props){
  const [variantToggle, setToggle] = useState(props.location.pathname)
 useEffect(()=>{
   setToggle(props.location.pathname)
},
 [props.location.pathname])
  
  const variants ={
    hidden: {y:200},
    show: {y:0},
    exit:{y:200}

  }
  const topVariants ={
    hidden: {y:200},
    show: {y:-200},
    exit:{y:200}

  }
  console.log(props.location)
    return (
      <div>
        <NavMenu />
        <Container className="overlay">
          <div className="data">
          {props.children}
          </div>
        </Container>
        <div className="wave-bg">
          <motion.svg
           initial='hidden'
           animate='show'
            variants={variants}
           exit='exit'
        xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320"><path  style={props.location.pathname==='/'?{fontSize:'40px'}:{fontSize:'20px'}} fill="#3aafa9" fillOpacity="1" d="M0,64L48,85.3C96,107,192,149,288,176C384,203,480,213,576,208C672,203,768,181,864,154.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></motion.svg>
      <div className="bg"></div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2b7a78" fill-opacity="1" d="M0,320L48,304C96,288,192,256,288,218.7C384,181,480,139,576,144C672,149,768,203,864,234.7C960,267,1056,277,1152,288C1248,299,1344,309,1392,314.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
        </div>
      </div>
    );
  
}
