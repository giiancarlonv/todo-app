import { useState } from 'react'
import Homepage from './components/Homepage'
import  './styles/styles.css'

const DATA = [
  {id: 'todo-0', name: 'sussy', completed: true},
  {id: 'todo-1', name: 'huh', completed: false},
  {id: 'todo-3', name: 'Looking', completed: true},
  {id: 'todo-4', name: 'KEKN', completed: true}
]
function App() {
  
  return (
    <>
      <Homepage tasks={DATA} />
    </>
  )
}

export default App
