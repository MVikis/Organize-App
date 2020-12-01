import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory, useParams } from 'react-router-dom'
import Loader from './Loader'
import {motion} from 'framer-motion'

const transition = { delay:1,duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const firstTrans = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
export default function BoxPage(props) {
  useEffect(() => {
    populateContainerData()
    populateItemsData()
  }, [])
  const params = useParams()
    const[Container, setContainer] =useState('')
    const[Items, setItems] =useState([])
    const [newItem, setNewItem] = useState({ItemName:'',ContainerId:parseInt(params.id)})
    
    const AddNewItem=()=>{
      return(
          <form autoComplete="off" className="form-inline" onSubmit={()=>props.handleSumbit(newItem, '/Items/')}>
          
      <div className="wrapper">
        <div className="input-data">
        <input required onChange={FormChange} name="text" type="text"></input>
  <label>Add Item</label>
        <div className="underline"/>
        <div className="underline-gray"/>
        <button type="submit">
      <FontAwesomeIcon  icon="plus"/>
      </button>
        </div>
      </div>     
  </form>)
    }
    const FormChange=(event)=>{
      const { value} = event.target
      setNewItem({...newItem,ItemName:value})
      
       }
    
       async function populateContainerData(){
        
          await fetch('api/Containers/'+ params.id)
          .then(response => response.json())
          .then(json => setContainer(json))
           
       
        }

        async function populateItemsData(){
    
      await fetch('api/Items/'+params.id)
      .then(response => response.json())
      .then(json => setItems(json))
    
       
      }
    
    return (
      <motion.div
      transition={firstTrans}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      className="column">

<motion.div 
      transition={firstTrans}
      initial={{opacity:0,y:-100}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0}}
          className="box-page-title">
            
            <FontAwesomeIcon 
           icon="box-open"/>
              <h2>{Container.containerName}</h2> 
              </motion.div>
       <motion.div
        transition={transition}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className="column">      
              {AddNewItem()}
            <div className="row">
            {Items.length>0?
    (Items.map(item=>
    <div className="btn" key={item.itemId}>{item.itemName}</div>))
               : <Loader/>}
                </div>
                </motion.div>
        
        </motion.div>
    )
    }