import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faBoxOpen,faPlus, faSearch,faTimes,faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'
import './custom.css'
import './style.css'
import {AnimatePresence} from 'framer-motion'
import UserPage from './components/UserPage';
import BoxPage from './components/BoxPage';
library.add( faCheckSquare, faBoxOpen, faPlus, faSearch,faTimes,faCloudUploadAlt)

export default function App() {
const location = useLocation()

  const handleSumbit = async(data,url) => {

    await fetch('api'+url, {  
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),  
    }).then((response) => response.json())  
        .then((responseJson) => {  
            console.log(responseJson)
          
        })  
  }
  


  
    return (

     
      <Layout location={location}>
        
        <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
        <Route exact path='/' component={Home} />
        <Route exact path='/user' component={(props) => <UserPage handleSumbit={handleSumbit}    />} />
        <Route path='/user/:id' render={(props) =>  <BoxPage handleSumbit={handleSumbit}   />}/>
      
       
        </Switch>
        </AnimatePresence>
      </Layout>
    );
  
}
