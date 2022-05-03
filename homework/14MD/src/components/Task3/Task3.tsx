import { useEffect, useRef, useState } from 'react'

// type NameArr = string[]

const Task3 = () => {
  const [inputValue, setInputValue] = useState('')
  const [inputValueArr, setInputValueArr] = useState<String[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-xs-8">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setInputValueArr(
                [...inputValueArr, inputValue],
              )
              setInputValue('')
              inputRef.current?.focus()
            }}
          >
            <input
              ref={inputRef}
              type="text"
              required
              placeholder="Write something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          <ul>
            {inputValueArr.map((item) => (
              <li key={Math.random()}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

    </>
  )
}

export default Task3
