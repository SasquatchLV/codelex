import './Cards.scss'
import React, { useState } from 'react'
import Button from '../Button/Button'

const AddCards = () => {
  const cardArray = [
    {
      id: 1,
      title: 'First card',
    },
    {
      id: 2,
      title: 'Second card',
    },
    {
      id: 3,
      title: 'Third card',
    },
    {
      id: 4,
      title: 'Fourth card',
    },
    {
      id: 5,
      title: 'Fifth card',
    },
    {
      id: 6,
      title: 'Sixth card',
    },
  ]

  const [cardArrayState, setCardArrayState] = useState(cardArray)

  const buttonArray = [
    {
      id: 1,
      text: 'Reset',
      handleClick: () => {
        setCardArrayState(cardArray)
      },
    },
    {
      id: 2,
      text: 'Remove all',
      handleClick: () => {
        setCardArrayState([])
      },
    },
    {
      id: 3,
      text: 'Make all titles UPPERCASE',
      handleClick: () => {
        setCardArrayState(cardArrayState.map((card) => ({ ...card, title: card.title.toUpperCase() })))
      },
    },
  ]

  const removeItem = (index: number) => {
    const newArray = [...cardArrayState]
    newArray.splice(index, 1)
    return setCardArrayState(newArray)
  }

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          {buttonArray.map((button) => (
            <Button
              key={button.id}
              text={button.text}
              onClick={button.handleClick}
            />
          ))}
        </div>
      </div>

      <div className="row">
        {cardArrayState.map((card, index) => (
          <div className="col-xs-6 col-sm-4">
            <div className="card" key={card.id}>
              <span>
                ID :
                {' '}
                {card.id}
              </span>
              <h3>
                Title :
                {' '}
                {card.title}
              </h3>
              <div>
                <span onClick={() => removeItem(index)}>X</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}

export default AddCards
