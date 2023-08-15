import React from 'react'
import checkIcon from '../images/icon-check.svg'
import { useState } from 'react'

export const Form = (props) => {
  const {className } = props;
  const [name, setName] = useState('');
  const handleChange = (e) => {
    setName(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    !name ? null : props.addTask(name);
    setName('');
  }
  return (
    <form className={`create-todo ${className}`} onSubmit={handleSubmit}>
      <label htmlFor="add-todo">
        <button type="submit" className='check-button'><img src={checkIcon
        } alt="" /></button>
        <input type="text" id='add-todo' placeholder='Create a new todo...'autoComplete='off' value={name} onChange={handleChange} />
      </label>
    </form>
  )
}
