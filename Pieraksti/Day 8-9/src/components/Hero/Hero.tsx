import { FC } from 'react'
import './Hero.scss'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import Paragraph from '../Paragraph/Paragraph'

const Hero: FC = () => (
  <div className="hero-container">
    <Heading text="This is heading" />
    <Paragraph text="This is paragraph" />
    <div className="align-end">
      <Button text="This is button" onClick={() => (console.log('I clicked hero'))} />
    </div>
  </div>
)

export default Hero
