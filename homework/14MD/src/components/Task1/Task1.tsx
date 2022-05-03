import { useEffect, useState } from 'react'

const Task1 = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    console.log('Render')
  })

  useEffect(() => {
    console.log('First Render')
  }, [])

  useEffect(() => {
    console.log('Changing count')
  }, [count])

  useEffect(() => {
    console.log('Input change')
  }, [inputValue])

  return (
    <>
      <div className="row">
        <div className="col-xs-8">
          <div className="task-container">
            <button onClick={() => setCount(count + 1)}>+</button>
            <h1>{count}</h1>
            <input type="text" placeholder="Jānis dusmīgs" onChange={(e) => setInputValue(e.target.value)} />
            <br />
            <span>{inputValue}</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default Task1
