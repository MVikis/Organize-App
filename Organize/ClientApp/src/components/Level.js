import React,{useState} from 'react'
import { Droppable, Draggable} from 'react-beautiful-dnd'


const Level = ({levelName, items}) => {

const[Items, setItems] = useState([])

    return(
        <Droppable droppableId={levelName}>
{(provided)=>(
                  <div className="row"{...provided.droppableProps} 
                  ref={provided.innerRef} >
          {levelName}:
          { 
         Items.map((item, index)=>
            <Draggable key={item.itemId} draggableId={item.itemId.toString()} index={index}>
              {(provided)=>
              (<div className="btn"{...provided.draggableProps} {...provided.dragHandleProps}
              ref={provided.innerRef}>{item.itemName}</div>)}
            
            </Draggable>)
        }  
          </div>)}
        </Droppable>)
    
}

export default Level;