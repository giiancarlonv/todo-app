import React from 'react'
import crossBtn from '../images/icon-cross.svg'

export const Todo = (props) => {
  return (
    <li>
      <div className='todo-list'>
        <input type="checkbox" id={props.id} defaultChecked={props.completed} onClick={()=>props.toggleTaskCompleted(props.id)} />
        <label htmlFor={props.id}>{props.name}</label>
        <button  onClick={()=> props.deleteTask(props.id)}><img src={crossBtn} alt="x-icon" /></button>
      </div>
    </li>
  )
}
