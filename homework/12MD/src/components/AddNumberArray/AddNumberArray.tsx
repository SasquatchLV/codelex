import './AddNumberArray.scss'
import React, { useState } from 'react'
import Button from '../Button/Button'

const AddNumberArray = () => {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]
  const [numberArray, setNumberArray] = useState(numbers)

  const buttonArray = [
    {
      id: 1,
      text: 'Remove from end',
      handleClick: () => {
        setNumberArray(numberArray.slice(0, -1))
      },
    },
    {
      id: 2,
      text: 'Remove from start',
      handleClick: () => {
        setNumberArray(numberArray.slice(1))
      },
    },
    {
      id: 3,
      text: 'Reset',
      handleClick: () => {
        setNumberArray(numbers)
      },
    },
    {
      id: 4,
      text: 'Remove all',
      handleClick: () => {
        setNumberArray(numberArray.slice(numberArray.length))
      },
    },
    {
      id: 5,
      text: 'Show > 5',
      handleClick: () => {
        setNumberArray(numberArray.filter((number) => number > 5))
      },
    },
    {
      id: 6,
      text: 'All numbers x2',
      handleClick: () => {
        setNumberArray(numberArray.map((number) => number * 2))
      },
    },
    {
      id: 7,
      text: 'All numbers / 10',
      handleClick: () => {
        setNumberArray(numberArray.map((number) => number / 10))
      },
    },
  ]

  const removeItem = (index: number) => {
    const newArray = [...numberArray]
    newArray.splice(index, 1)
    return setNumberArray(newArray)
  }

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <div className="button-wrapper">
            {buttonArray.map((button) => (
              <Button
                key={button.id}
                text={button.text}
                onClick={button.handleClick}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className="number-wrapper">
            {numberArray.map((number, index) => (
              <div
                key={number}
                // onClick={
                //   () => setNumberArray(numberArray.filter((_, i) => i !== index))
                // }
                onClick={() => removeItem(index)}
                className="number-item"
              >
                {number}
              </div>
            ))}
          </div>
        </div>
      </div>

    </>

  )
}

export default AddNumberArray
