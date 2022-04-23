import React, { FC } from 'react'
import './Button.scss'

type ButtonProps = {
  text: string
  onClick: () => void
}

const Button: FC<ButtonProps> = ({ text, onClick }) => (
  <button className="button" onClick={onClick}>
    {text}
  </button>
)

export default Button
