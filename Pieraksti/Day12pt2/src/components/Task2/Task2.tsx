import { useRef } from 'react'

const Task2 = () => {
  const boxElementRef = useRef<HTMLDivElement | null>(null)

  const cloneElement = () => {
    if (boxElementRef.current) {
      const boxElement = boxElementRef.current
      const clone = boxElement.cloneNode(true)
      boxElement.parentNode?.appendChild(clone)
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
          <button onClick={() => { cloneElement() }}>Clone Element</button>
        </div>
      </div>

    </>
  )
}

export default Task2
