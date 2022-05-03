import { useEffect, useRef, useState } from 'react'
import Task1 from './components/Task1/Task1'
import Task2 from './components/Task2/Task2'
import Task3 from './components/Task3/Task3'
import Task4 from './components/Task4/Task4'
import Task5 from './components/Task5/Task5'
import './App.scss'

const App = () => (
  <div className="container container-fluid">
    <Task1 />
    <Task2 />
    <Task3 />
    <Task4 />
    <Task5 />
  </div>
)

export default App
