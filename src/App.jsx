import { useState } from 'react'
import Homepage from './components/Homepage'
import './App.css';

let DATA = []
function App() {
  return (
    <>
      <Homepage tasks={DATA} />
    </>
  )
}

export default App
