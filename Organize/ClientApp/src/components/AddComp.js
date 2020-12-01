import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function AddComp(props) {
  const [newObject, setObject] = useState()
    const FormChange=(event)=>{
        const { value} = event.target
        props.setNewItem(value)
        console.log(value)
         }
       
   
   
}