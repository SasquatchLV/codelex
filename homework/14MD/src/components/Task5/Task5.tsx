import { useEffect, useRef, useState } from 'react'

const Task5 = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [colorValue, setColorValue] = useState('red')

  const createBox = () => {
    const box = document.createElement('div')
    box.className = 'box'
    box.style.backgroundColor = colorValue
    containerRef.current?.appendChild(box)
  }

  return (
    <>
      <div className="row">
        <div className="col-xs-8">
          <button onClick={
            () => {
              createBox()
            }
          }
          >
            +
          </button>
          <select
            name="color"
            onChange={
              (e) => {
                setColorValue(e.target.value)
              }
            }
            value={colorValue}
            required
          >
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
          </select>
          <div ref={containerRef} className="box-container" />
        </div>
      </div>

    </>
  )
}

export default Task5
