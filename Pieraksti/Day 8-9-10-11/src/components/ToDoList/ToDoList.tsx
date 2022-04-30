import { useRef, useState } from 'react'
import './ToDoList.scss'

const initialTasks = [
  {
    title: 'Learn React',
    isCompleted: false,
    isEdited: false,
    priority: 0,
    deadline: 5,
  },
]

type Task = {
  title: string
  isCompleted: boolean
  isEdited: boolean
  priority: number
  deadline: number
}

const ToDoList = () => {
  const [tasks, setTasks] = useState(initialTasks)
  const [taskValue, setTaskValue] = useState('')
  const [editValue, setEditValue] = useState('')
  const [priority, setPriority] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')

  const addToDo = () => {
    if (taskValue.length > 3) {
      setTasks([...tasks, {
        title: taskValue,
        deadline: 0,
        isCompleted: false,
        isEdited: false,
        priority,
      }])
      setTaskValue('')
      setPriority(0)
      setErrorMsg('')
    } else {
      setErrorMsg('Task must be at least 4 characters long')
    }
  }

  const getPriority = (task: Task) => {
    switch (task.priority) {
      case 0:
        return 'Low'
      case 1:
        return 'Medium'
      case 2:
        return 'High'
      default:
        return 'Low'
    }
  }

  const handleEdit = (index: number) => {
    const newTasks = [...tasks]
    setEditValue(newTasks[index].title)
    newTasks[index].isEdited = !newTasks[index].isEdited
    newTasks[index].title = editValue
    setTasks(newTasks)
  }

  const handleComplete = (index: number) => {
    const newTasks = [...tasks]
    newTasks[index].isCompleted = !newTasks[index].isCompleted
    setTasks(newTasks)
  }

  const handleDelete = (index: number) => {
    const newTasks = [...tasks]
    setTasks(newTasks.filter((_, i) => i !== index))
  }
  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <div className="input-wrapper">
            <input
              type="text"
              className="input"
              placeholder="Add new task"
              required
              value={taskValue}
              onChange={(e) => setTaskValue(e.target.value)}
            />
            <select
              title="Priority"
              className="select"
              required
              onChange={(e) => setPriority(Number(e.target.value))}
              value={priority}
            >
              <option value="0">Low</option>
              <option value="1">Medium</option>
              <option value="2">High</option>
            </select>
            <button
              className="input-btn"
              type="button"
              onClick={addToDo}
            >
              Add
            </button>

          </div>
          {errorMsg && <div className="input-error">{errorMsg}</div>}
          <div className="todo-list">
            {tasks.map((task, index) => (
              <div className={`todo-list__item ${getPriority(task).toLowerCase()}`} key={Math.random()}>
                {task.isEdited && (
                  <input
                    type="text"
                    className="input"
                    value={editValue}
                    onChange={(e) => {
                      setEditValue(e.target.value)
                    }}
                  />
                )}
                {!task.isEdited && (
                  <h2 className="todo-list__item-title">
                    {task.isCompleted ? <s>{task.title}</s> : task.title}
                  </h2>
                )}
                <p className="todo-list__item-priority">
                  Priority:
                  {' '}
                  {getPriority(task)}
                </p>
                <div className="todo-list__item-actions">
                  <button
                    className="todo-list__item-button"
                    type="button"
                    onClick={() => handleEdit(index)}
                  >
                    {task.isEdited ? 'Save' : 'Edit'}

                  </button>
                  <button
                    className="todo-list__item-button"
                    type="button"
                    onClick={() => handleComplete(index)}
                  >
                    {task.isCompleted ? 'Uncomplete' : 'Complete'}

                  </button>
                  <button
                    className="todo-list__item-button"
                    type="button"
                    onClick={() => handleDelete(index)}
                  >
                    Delete

                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </>
  )
}
export default ToDoList
