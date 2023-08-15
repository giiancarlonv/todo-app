import React from 'react'
import moonIcon from '../images/icon-moon.svg'
import sunIcon from '../images/icon-sun.svg'
import bgMobileLight from '../images/bg-mobile-light.jpg'
import bgMobileDark from '../images/bg-mobile-dark.jpg'
import { Todo } from './Todo'
import { Form } from './Form'
import { Buttons } from './Buttons'
import { useState } from 'react'
import {nanoid} from 'nanoid'

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
}
const FILTER_NAMES = Object.keys(FILTER_MAP);

const Homepage = (props) => {

  const [filter, setFilter] = useState('All');
  const filterList = FILTER_NAMES.map((name) =>(
    <Buttons key={name} name={name} isPressed={name === filter} setFilter={setFilter} />
  ));

  const toggleTaskCompleted = (id) =>{
    const updateTask = tasks.map((task) =>{
      if(id === task.id) return { ...task, completed: !task.completed};
      return task;
    });
    setTasks(updateTask);
  }

  const deleteTask = (id) =>{
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} />
  ));

  const addTask =(name) =>{
    const newTask = {id: `todo-${nanoid()}`, name, completed: false}
    setTasks([...tasks, newTask]);
  }

  const taskCount = taskList.length;
  const taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
  
  const [nightMode, setNightMode] = useState(false);
  const handleClick = (e) => {
    setNightMode(current => !current);
    console.log('nm')
  }
  const bodyBG = document.body;
  nightMode ? bodyBG.classList.add('nightmode') : bodyBG.classList.remove('nightmode')
  return (
    <>
      <header>
        <img src={nightMode ? bgMobileDark : bgMobileLight} alt="BG image" className='bg-image'/>
        <div className='header-text'>
          <h1>Todo</h1>
          <button onClick={handleClick} className='js-isNightMode'>
            <img src={nightMode ? sunIcon : moonIcon} alt="lightmode-icon" onClick={()=>handleClick} className='theme-'/>
          </button>
        </div>
      </header>

      <main>
        <Form addTask={addTask} className={nightMode?'night-mode':''} />

        <section className={nightMode ? 'todo-list-wrapper night-mode':'todo-list-wrapper '}>

          <ul role='list' aria-labelledby='list-heading' >
            {taskList}
          </ul>

          <div className='item-details'>
            <span>{taskCount} {taskNoun} left</span>
            <button>Clear Completed</button>
          </div>

          <div className='todo-buttons desktop'>
            {filterList}
          </div>
        </section>

        <div className={nightMode?'todo-buttons mobile night-mode':'todo-buttons mobile'}>
          {filterList}
        </div>

        <aside>
          Drag and drop to reorder list
        </aside>
      </main>
    </>
  )
}

export default Homepage