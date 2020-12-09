import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useParams } from 'react-router-dom'
import Loader from './Loader'

import styled from 'styled-components'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {motion} from 'framer-motion'

const transition = { delay:1,duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const firstTrans = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const levelNames = ["Upper","Center","Lower"]

export default function BoxPage(props) {
  useEffect(() => {
    populateContainerData()
    populateItemsData()
  
   
    
  }, [])
  const params = useParams()
    const[Container, setContainer] =useState('')
    const[toggle, setToggle] =useState(false)
    const[levels, setLevels] = useState({"Upper":{items:[]},"Center":{items:[]},"Lower":{items:[]}})
    const [newItem, setNewItem] = useState({ItemName:'',ContainerId:parseInt(params.id),LevelCordination:''})
   
    const ItemRow = styled.div`
    transition: background-color 0.2 ease;
    background-color: ${props =>(props.isDraggingOver ? '#3aafa9':'transparent')}
    `;
    const PutSumbit = async(data,url) => {


      await fetch('api'+url, {  
          method: 'PUT',  
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),  
      }).then((response) => response.json())  
          .then((responseJson) => {  
              console.log(responseJson)
            
          })  
    }
    const AddNewItem=()=>{
      
      return(
          <form autoComplete="off" className="form-inline" onSubmit={()=>props.handleSumbit(newItem, '/Items/')}>
          
      <div className="wrapper">
        <div className="input-data">
        <input required onChange={FormChange} name="ItemName" type="text"></input>
  <label>Item name</label>
        <div className="underline"/>
        <div className="underline-gray"/>
       
        </div>
        <div className="input-data">
        <label style={{top:"-20px"}} htmlFor="LevelCordination">Level</label>
        
<select required onChange={FormChange} name="LevelCordination" id="LevelCordination">
<option value="" selected disabled hidden>Choose here</option>
  <option value="Upper">Upper</option>
  <option value="Center">Center</option>
  <option value="Lower">Lower</option>
</select>
        <button type="submit">
      <FontAwesomeIcon  icon="plus"/>
      </button>
      </div>
      </div>     
  </form>)
    }
    const FormChange=(event)=>{
      const { value} = event.target
      setNewItem({...newItem,[event.target.name]:value})
      
       }
    
       async function populateContainerData(){
        
        const data = await fetch('api/Containers/'+ params.id)
          .then(response => response.json())
          .then(json => setContainer(json))
           
       
        }

        async function populateItemsData(){
    
      await fetch('api/Items/'+params.id)
      .then(response => response.json())
      
      .then(json =>  setLevels({
        ...levels,
           Upper:{
             items:ReturnItems(json,"Upper")
           },
           Center:{
            items:ReturnItems(json,"Center")
          },
          Lower:{
            items:ReturnItems(json,"Lower")
          }
         }))
         .then(setToggle(true))

      }
      const ReturnItems=(data, level)=>{
      const filteredItems = data.filter(item=>item.levelCordination=== level)
    return filteredItems
      }
     
      const handleDragEnd=(result)=>{
        const {destination, source} = result
       
        

        if(!destination){
          return;
        }
        if(
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        )
        {
          
          return;
        }

        
         const start = levels[source.droppableId]
         const finish = levels[destination.droppableId]

        if(start === finish){
         
        }
       const itemCopy = levels[source.droppableId].items[source.index]
       

         setLevels(prev => {
           prev = {...prev}
           console.log(prev[destination.droppableId].items[source.index])
           prev[source.droppableId].items.splice(source.index, 1)
           prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)
           

          return prev
          })
          
        }

      
     
    return (
      <motion.div
      transition={firstTrans}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      className="box-page">

<motion.div 
      transition={firstTrans}
      initial={{opacity:0,y:-100}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0}}
          className="box-page-title column">
            
            <FontAwesomeIcon 
           icon="box-open"/>
              <h2>{Container.containerName}</h2> 
              {AddNewItem()}
              </motion.div>
              
       <motion.div
        transition={transition}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>      
              
          
           <DragDropContext onDragEnd={handleDragEnd}>
             
            {toggle?(
             <div style={{maxWidth:'100%'}} className="items row">  <div>
               {Object.entries(levels).map(([title, items],index)=>
               
               <Droppable droppableId={title}>
               {(provided, snapshot)=>(<div className="items-title-row">
                 <h3>{title}:</h3>
                                 <ItemRow key={index}  className="row"{...provided.droppableProps} 
                                 ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
                         
                         {  items.items.map((item, index)=>
                           <Draggable key={item.itemId} draggableId={item.itemName} index={index}>
                             {(provided)=>
                             (<div className="btn"{...provided.dragHandleProps}{...provided.draggableProps} 
                             ref={provided.innerRef}>{item.itemName}</div>)}
                           
                           </Draggable>)
                  }     </ItemRow></div>)}    
                             </Droppable>
                            ) }
                            </div> <div  style={{fontSize:'30px'}}
                             className="btn btn-update">Update
                             <FontAwesomeIcon icon="plus"/>
                          
                             </div></div>
                              )
               : <Loader/>}
              </DragDropContext>
             
                </motion.div>
        
        </motion.div>
    )
    }