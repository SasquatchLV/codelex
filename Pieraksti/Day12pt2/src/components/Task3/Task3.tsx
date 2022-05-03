import { useRef } from 'react'

const Task3 = () => {
  const boxElementRef = useRef<HTMLDivElement | null>(null)

  const putBoxInCorner = () => {
    if (boxElementRef.current) {
      const boxElement = boxElementRef.current
      boxElement.style.display = 'inline-block'
      boxElement.style.position = 'absolute'
      boxElement.style.top = '0'
      boxElement.style.right = '0'
      boxElement.innerHTML = 'Esmu stūrī'
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box__inside" ref={boxElementRef} />
          </div>
          <button onClick={() => { putBoxInCorner() }}>Send div to corner</button>
        </div>
      </div>

    </>
  )
}

export default Task3
