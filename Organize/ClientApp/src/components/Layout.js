import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';



export default function Layout(props){
 

    return (
      <div>
        <NavMenu />
        <Container className="overlay">
          <div className="data">
          {props.children}
          </div>
        </Container>
        
      </div>
    );
  
}
