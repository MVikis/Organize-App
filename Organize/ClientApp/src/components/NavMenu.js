import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import {AnimatePresence} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Viewport from './Viewport'
import Search from './Search'
import Popup from './Popup'

const NavMenu =()=>{
 
  const { width } = Viewport();
  const breakpoint = 650;

  const [toggleNavbar, setToggle] = useState(false)
  const ToggleFunction = () => setToggle(!toggleNavbar)

  const mobileContent=()=>{
    return(
      <div style={{background:'blue'}}>
        <FontAwesomeIcon onClick={ToggleFunction}  className="cross" icon="times"/>
         <Link  onClick={ToggleFunction} className="nav-link" to="/user">
      <span className="link-text">User
      <div className="underline"/>
      </span>
      </Link>
      
      <Search/>
      </div>
    )
  }

  const desktopNav=()=>{
    return(
      <ul className="navbar-nav">
      <li className="nav-item">
      <Link className="nav-link" to="/user">
      <span className="link-text">User
      <div className="underline"/>
      </span>
      </Link>
      </li>
      <Search/>
      </ul>
    )
  }

  const mobileNav=()=>{
    return(
      <div >
      <ul className="navbar-nav">
      <li className="nav-link" onClick={ToggleFunction}>ham</li>
      </ul>
      </div>
    )
  }
 

    return (
      <header>
        <nav className="navbar">
        <svg width="1203" height="447" viewBox="0 0 1203 447" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M305.355 0H1203V447C957.743 5.5256 497.241 347.053 210.768 282.046C-75.7062 217.039 12.9625 0 12.9625 0H305.355Z" fill="#3AAFA9"/>
</svg>

{width>breakpoint? desktopNav(): mobileNav()}

<AnimatePresence exitBeforeEnter>{toggleNavbar&&<Popup content={mobileContent()}/>}</AnimatePresence>
          
         
        </nav>
      </header>
    );
  }

  export default NavMenu

 

 