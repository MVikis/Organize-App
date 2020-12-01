import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import logo from './logo.png'
import Search from './Search'

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <nav className="navbar">
        <svg width="1203" height="447" viewBox="0 0 1203 447" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M305.355 0H1203V447C957.743 5.5256 497.241 347.053 210.768 282.046C-75.7062 217.039 12.9625 0 12.9625 0H305.355Z" fill="#3AAFA9"/>
</svg>


        <Link className="nav-link" to="/">
     <img className="logo" src={logo}/>
     </Link>
           
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
             
         
        </nav>
      </header>
    );
  }
}
