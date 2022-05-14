import { useSelector, useDispatch } from 'react-redux'
import {
  decrement, increment, incrementByAmount, divideByTwo, multiplyBySeven, resetToZero,
} from './store/reducers/counterReducer'
import './App.scss'
import { RootState, AppDispatch } from './app/store'

export function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span style={{ fontSize: '50px' }}>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment by 5"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
        <button
          aria-label="Divide by two"
          onClick={() => dispatch(divideByTwo())}
        >
          Divide by 2
        </button>
        <button
          aria-label="Multiply by 7"
          onClick={() => dispatch(multiplyBySeven())}
        >
          Multiply by 7
        </button>
        <button
          aria-label="Reset to 0"
          onClick={() => dispatch(resetToZero())}
        >
          Reset to 0
        </button>
      </div>
    </div>
  )
}

export default App
