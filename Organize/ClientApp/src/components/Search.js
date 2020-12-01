import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createUnparsedSourceFile } from 'typescript'
import {motion, AnimatePresence} from 'framer-motion'

export default function AddComp(props) {
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

      const searchVariants={
        initial:{y:-200,opacity:0},
        animate:{y:0,opacity:1},
        exit:{y:-200, opacity:0}


      }

     
    return (
      <div>
        <form autoComplete="off" className="form-inline" onSubmit={handleSumbit}>
        
        <div className="wrapper">
          <div className="input-data">
          <input id="search-input" required name="SearchString" type="text" onChange={FormChange} ></input>
          <label>Search</label>
          <div className="underline"/>
          {/* <div className="underline-gray"/> */}
          <button type="submit">
        <FontAwesomeIcon  icon="search"/>
        </button>
          </div>
        </div>
       
    </form>
    <AnimatePresence exitBeforeEnter>
    {toggle&&(
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
      exit={{opacity:0}}
    className="search-overlay">
  <motion.div    variants={searchVariants}
                    initial='initial'
                  animate='animate'
                    exit='exit'
                    className="search-list">
                      <FontAwesomeIcon onClick={ToggleFunction}  icon="times"/>
    <div className="row">
              {ItemsValues.items.map((Item)=>
              <div className="btn" key={Item.itemId}>
                {Item.itemName} {Item.container.containerName}</div>)}
                </div>
                </motion.div></motion.div>
                )}</AnimatePresence>


                {ItemsValues.setValues===false&&
                (
                <div>
                  No items found.....
                </div>)}
    </div>
        )
}