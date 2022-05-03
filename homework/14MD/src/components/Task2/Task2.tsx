import { useEffect, useState } from 'react'

const Task2 = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [fontSize, setFontSize] = useState(32)

  useEffect(() => {
    setCount(100)
  }, [])

  useEffect(() => {
    setFontSize(fontSize + 1)
  }, [count])

  useEffect(() => {
    document.title = inputValue
  }, [inputValue])

  return (
    <>
      <div className="row">
        <div className="col-xs-8">
          <div className="task-container">
            <button onClick={() => setCount(count + 1)}>+</button>
            <h1 style={{ fontSize: `${fontSize}px` }}>{count}</h1>
            <input type="text" placeholder="Jānis dusmīgs" onChange={(e) => setInputValue(e.target.value)} />
            <br />
            <span>{inputValue}</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default Task2
