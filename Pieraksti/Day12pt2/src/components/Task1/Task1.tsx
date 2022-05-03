import { useRef } from 'react'

const Task1 = () => {
  const inputElementRef = useRef<HTMLInputElement | null>(null)
  const boxElementRef = useRef<HTMLDivElement | null>(null)

  const changeColor = () => {
    if (boxElementRef.current) {
      const boxElement = boxElementRef.current
      if (boxElement.style.backgroundColor === 'gold') {
        boxElement.style.backgroundColor = 'brown'
      } else {
        boxElement.style.backgroundColor = 'gold'
      }
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <div className="box" ref={boxElementRef}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sit, quasi aut libero ad nam dicta accusamus mollitia ea perspiciatis iste.
            </p>
          </div>
          <button onClick={() => { changeColor() }}>Change color</button>
        </div>
      </div>

    </>
  )
}

export default Task1
