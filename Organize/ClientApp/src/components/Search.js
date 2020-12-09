import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {motion, AnimatePresence} from 'framer-motion'
import {  Link } from 'react-router-dom'
import Popup from './Popup'

export default function Search(props) {

  
    const [toggle, setToggle] = useState(false)
    const ToggleFunction = () => setToggle(!toggle)
    const [searchString, setSearch] = useState('')
    const [ItemsValues, setItems] = useState({items: [],setValues:true})

    const FormChange=(event)=>{
        const { value} = event.target
        setSearch(value)
        
         }
          const handleSumbit= async(event)=> {
           event.preventDefault()
          await fetch('api/Items/search/'+  searchString)
            .then(response => response.json())
            .then(json => {if(json.length>0)
              {
                setItems({items:json, setValues:true})
                setToggle(true)
              }
               else if(json.length<1)
               {
                setItems({items:[], setValues:false}) 
               }
            })


            
        }
     

    
      const popupContent=()=>{
        return(<div>
          <FontAwesomeIcon onClick={ToggleFunction}  className="cross" icon="times"/>
          <h3>Search list</h3>
         
<div className="row">
  {ItemsValues.items.map((Item)=>
  <Link className="nav-link" onClick={ToggleFunction} to={`/user/${Item.container.containerId}`}><div   className="btn row" key={Item.itemId}>
  <div className="column"> Item: <div className="search-item">{Item.itemName}</div></div><div className="column">Container:<div className="search-item">{Item.container.containerName}</div></div>
     </div></Link>)}
    </div>
    </div>
        )
      }

     
    return (
      <div>
        <form autoComplete="off" className="form-inline" onSubmit={handleSumbit}>
        
        <div className="wrapper">
          <div className="input-data">
          <input id="search-input" required name="SearchString" type="text" onChange={FormChange} ></input>
          <label>Search</label>
          <div className="underline"/>
          
          <button type="submit">
        <FontAwesomeIcon  icon="search"/>
        </button>
          </div>
        </div>
       
    </form>
    <AnimatePresence exitBeforeEnter>{toggle&&(<Popup content={popupContent()}/>)}</AnimatePresence>


                {ItemsValues.setValues===false&&
                (
                <div>
                  No items found.....
                </div>)}
    </div>
        )
}