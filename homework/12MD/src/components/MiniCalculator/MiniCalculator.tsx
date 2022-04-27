import { useState } from 'react'

const MiniCalculator = () => {
  const [count, setCount] = useState(0)
  const [showReset, setShowReset] = useState(false)

  const actions = [
    {
      title: 'Add + 1',
      onClick: () => setCount(count + 1),
    },
    {
      title: 'Subtract - 1',
      onClick: () => setCount(count - 1),
    },
    {
      title: 'Multiply * 2',
      onClick: () => setCount(count * 2),
    },
    {
      title: 'Divide / 2',
      onClick: () => setCount(count / 2),
    },
  ]

  const endsWithSeven = () => {
    const lastNumber = count.toString().slice(-1)
    return lastNumber === '7'
  }

  return (
    <div className="row">
      <div className="col-xs-12">
        <section>
          <h1 style={endsWithSeven() ? { color: 'gold' } : { color: 'black' }}>{count}</h1>
          {actions.map((action) => (
            <button
              type="button"
              key={Math.random()}
              onClick={action.onClick}
            >
              {action.title}
            </button>
          ))}
          <button
            type="button"
            key={Math.random()}
            onClick={() => setShowReset(!showReset)}
          >
            {showReset ? 'Hide reset' : 'Show reset'}
          </button>
          {showReset && (
            <button
              type="button"
              key={Math.random()}
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          )}
        </section>
      </div>
    </div>
  )
}

export default MiniCalculator
