import React, { useState } from 'react'
import Button from '../Button/Button'

const AddSomeText = () => {
  const [value, setValue] = useState('')
  const [showValue, setShowValue] = useState('')

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <Button text="Parādīt tekstu" onClick={() => setShowValue(value)} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <input
            type="text"
            placeholder="Ievadi tekstu"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {showValue && <span style={{ fontSize: '50px' }}>{showValue}</span>}
        </div>
      </div>

    </>

  )
}

export default AddSomeText
