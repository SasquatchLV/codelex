import { FC } from 'react'
import './Hero.scss'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import Paragraph from '../Paragraph/Paragraph'

type HeroProps = {
  heading: string
  paragraph: string
  buttonText: string
  onClick: () => void
}

const Hero: FC<HeroProps> = ({
  heading, paragraph, buttonText, onClick,
}) => (
  <div className="hero-container">
    <Heading text={heading} />
    <Paragraph text={paragraph} />
    <div className="align-end">
      <Button text={buttonText} onClick={onClick} />
    </div>
  </div>
)

export default Hero
