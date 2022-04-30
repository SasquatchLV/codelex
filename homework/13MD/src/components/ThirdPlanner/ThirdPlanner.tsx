import { useState } from 'react'

type PlannerTasks = {
  title: string,
  isCompleted: boolean,
  inProgress: boolean,
}

const ThirdPlanner = () => {
  const [allTaskList, setAllTaskList] = useState<PlannerTasks[]>([])
  const [taskList, setTaskList] = useState<PlannerTasks[]>([])
  const [inputValue, setInputValue] = useState('')

  const calculatePercentage = () => {
    const completedTasks = allTaskList.filter((task) => task.isCompleted)
    const percentage = Math.round((completedTasks.length / allTaskList.length) * 100)
    return percentage
  }

  const isCompleted = (index: number) => {
    const newTaskList = [...taskList]
    newTaskList[index].isCompleted = !newTaskList[index].isCompleted
    newTaskList[index].inProgress = !newTaskList[index].inProgress
    setTaskList(newTaskList)
    setAllTaskList(newTaskList)
    calculatePercentage()
  }

  const filterCompleted = () => {
    const tasksCompleted = allTaskList.filter((task) => task.isCompleted)
    setTaskList(tasksCompleted)
  }

  const filterInProgress = () => {
    const tasksInProgress = allTaskList.filter((task) => task.inProgress)
    setTaskList(tasksInProgress)
  }

  const showAll = () => {
    setTaskList(allTaskList)
  }

  const handleDelete = (index: number) => {
    const newTaskList = [...allTaskList]
    newTaskList.splice(index, 1)
    setTaskList(newTaskList)
    setAllTaskList(newTaskList)
    calculatePercentage()
  }

  return (
    <div className="row">
      <div className="col-xs-6">
        <h1># 3</h1>
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
                  setAllTaskList([...allTaskList, { title: inputValue, isCompleted: false, inProgress: true }])
                  setTaskList([...taskList, { title: inputValue, isCompleted: false, inProgress: true }])
                  setInputValue('')
                }
              }}
            >
              Add
            </button>
          </div>
          {allTaskList.length > 0 && (
            <div className="progress-bar">
              <div className="progress-bar__item" style={{ width: `${calculatePercentage()}%` }} />
            </div>
          )}
          <ul className="task-list">
            {taskList.map((task, index) => (
              <li className="task-list__item" key={Math.random()}>
                <label htmlFor={task.title}>
                  <input
                    type="checkbox"
                    id={task.title}
                    onChange={() => {
                      isCompleted(index)
                    }}
                    checked={task.isCompleted}
                  />
                  {task.isCompleted ? <s>{task.title}</s> : task.title}
                </label>
                <div
                  className="task-list__close"
                  onClick={() => handleDelete(index)}
                >
                  X

                </div>
              </li>
            ))}
          </ul>
          {allTaskList.length > 0 && (
            <div className="button-cntainer">
              <button type="button" onClick={() => { showAll() }}>All</button>
              <button type="button" onClick={() => { filterInProgress() }}>In Progress</button>
              <button type="button" onClick={() => { filterCompleted() }}>Completed</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default ThirdPlanner
