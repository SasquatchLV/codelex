import { useEffect, useRef, useState } from 'react'
import Task1 from './components/Task1/Task1'
import Task2 from './components/Task2/Task2'
import Task3 from './components/Task3/Task3'
import './App.scss'

const App = () => {
  const [count, setCount] = useState(0)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    console.log('Render only')
    inputRef.current?.focus()
  }, [])

  return (
    <div className="container container-fluid">
      <div className="row">
        <div className="col-xs-12">
          <input type="text" ref={inputRef} />
          <h1>{count}</h1>
          <button
            type="button"
            onClick={
              () => {
                setCount(count + 1)
              }
            }
          >
            Add + 1

          </button>
        </div>
      </div>
      <Task1 />
      <Task2 />
      <Task3 />
    </div>
  )
}

export default App
