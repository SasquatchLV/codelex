import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addTodo, removeTodo,
} from '../../store/reducers/todoReducer'
import { RootState, AppDispatch } from '../../app/store'

export function App() {
  const todos = useSelector((state: RootState) => state.toDos.todos)
  const dispatch = useDispatch<AppDispatch>()
  const [inputValue, setInputValue] = useState('')

  return (

    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodo(inputValue))
          setInputValue('')
        }}
      >
        Add todo
      </button>
      <ul>
        {todos.map((todo, index) => (
          <div key={Math.random()}>
            <li>
              {todo}
              <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
            </li>
          </div>
        ))}
      </ul>
    </div>

  )
}

export default App
