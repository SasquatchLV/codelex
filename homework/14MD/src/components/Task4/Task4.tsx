import { useEffect, useRef, useState } from 'react'

const Task4 = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [count, setCount] = useState(0)
  const [boxCount, setBoxCount] = useState(0)

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.disabled = true
      setTimeout(() => {
        buttonRef.current!.disabled = false
      }, 5000)
    }

    return () => {
      clearTimeout()
    }
  }, [])

  useEffect(() => {
    console.log('Setting count with useEffect')
    setBoxCount(count * 2)
  }, [count])

  return (
    <>
      <div className="row">
        <div className="col-xs-8">
          <div className="button-container">
            <button
              type="button"
              ref={buttonRef}
            >
              POGA
            </button>
            <button
              onClick={() => setCount(count + 1)}
            >
              COUNT:
              {' '}
              {count}
            </button>
            <div className="count">{boxCount}</div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Task4
