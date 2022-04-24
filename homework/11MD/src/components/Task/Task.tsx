import './Task.scss'
import { FC } from 'react'

type TaskProps = {
  id: string,
  text: string,
  done?: boolean
}

const Task: FC<TaskProps> = ({
  done, text, id,
}) => (
  <div
    key={id}
    className="task"
  >
    {done ? <s>{text}</s> : text}
  </div>
)

export default Task
