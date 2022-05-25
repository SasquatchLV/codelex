import React from 'react'

const code = () => {
  // Given a line of alphabetic characters, extract all the uppercase characters to print them on the first line. Then extract all the lowercase characters to print them on the second.

  const extractUpperAndLower = (line: string) => {
    const upper = line.match(/[A-Z]/g) || []
    const lower = line.match(/[a-z]/g) || []
    return [upper.join(''), lower.join('')]
  }

  return (
    <h1>hello</h1>
  )
}

export default code
