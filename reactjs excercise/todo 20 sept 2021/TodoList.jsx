import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { faEdit} from '@fortawesome/free-solid-svg-icons'
export default function TodoList(props) {
    
    
    
    return (
        <>
        <li class="list-group-item"> 
       <span><FontAwesomeIcon icon={faEdit} className="Edit" onClick={()=> {props.onEdit(props.id)}}/></span>  
     <span>   <FontAwesomeIcon  className="trash"icon={faTrash}  onClick={()=>{ props.onSelect(props.id)}}/></span>  {props.text}   </li>
        </>
    )
}
