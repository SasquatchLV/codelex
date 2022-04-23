import React, { FC } from 'react'
import './Paragraph.scss'

type ParagraphProps = {
  text: string
}

const Paragraph: FC<ParagraphProps> = ({ text }) => (
  <p className="paragraph">
    {text}
  </p>
)

export default Paragraph
