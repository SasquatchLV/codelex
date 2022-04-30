import React, { useState } from 'react'
import Button from '../Button/Button'

const AddPizza = () => {
  const [text, setText] = useState('Man garšo: ')

  return (
    <div className="row">
      <div className="col-xs-12">
        <Button text={'Pievienot "pica"'} onClick={() => setText(`${text} pica`)} />
        <div>
          <span>{text}</span>
        </div>
      </div>
    </div>
  )
}

export default AddPizza
