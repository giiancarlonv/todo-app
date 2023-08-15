import React from 'react'
import { useState } from 'react'
export const Buttons = (props) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick=(e)=>{
    const active = document.querySelector('.filter-buttons');
    setIsActive(current => !current)
  }
  return (
    <button className={isActive ? 'fiter-buttons active' : 'filter-buttons'} type='button' aria-pressed={props.isPressed} onClick={() => props.setFilter(props.name)} >
      <span onClick={handleClick}>{props.name}</span>
    </button>
  )
}
