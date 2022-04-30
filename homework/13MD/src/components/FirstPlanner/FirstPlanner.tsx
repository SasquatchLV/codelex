import { useState } from 'react'

const tasks: string[] = []

const FirstPlanner = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className="row">
      <div className="col-xs-6">
        <h1># 1</h1>
        <div className="planner-container">
          <div className="input-container">
            <input
              type="text"
              className="input"
              placeholder="Enter your task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="input-btn"
              type="button"
              onClick={() => {
                if (inputValue) {
                  tasks.push(inputValue)
                  setInputValue('')
                }
              }}
            >
              Add
            </button>
          </div>
          <ul className="task-list">
            {tasks.map((task) => (
              <li className="task-list__item" key={Math.random()}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default FirstPlanner
