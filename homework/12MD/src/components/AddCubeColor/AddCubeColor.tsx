import './AddCubeColor.scss'
import React, { useState } from 'react'
import Button from '../Button/Button'

const AddCubeColor = () => {
  const [color, setColor] = useState('brown')
  const [buttonText, setButtonText] = useState('Nospiests')

  const clicked = buttonText === 'Nospiests' ? 'Nav nospiests' : 'Nospiests'

  const changeCubeColor = () => {
    const colors = [
      'red',
      'blue',
      'green',
      'yellow',
      'orange',
    ]

    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    return setColor(randomColor)
  }

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <Button text="Mainīt kuba krāsu" onClick={() => changeCubeColor()} />
          <Button text={`Mainīt tekstu uz ${clicked}`} onClick={() => setButtonText(clicked)} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className="button-wrapper">
            <div
              className="cube"
              style={{
                backgroundColor: color,
              }}
            />
            <div className="text">
              {buttonText}
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default AddCubeColor
