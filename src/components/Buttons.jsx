import React from 'react'

export const Buttons = (props) => {
  return (
    <button type='button' aria-pressed={props.isPressed} onClick={() => props.setFilter(props.name)}>
      {props.name}
    </button>
  )
}
