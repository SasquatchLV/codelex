import React, { FC } from 'react'
import './Article.scss'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import Paragraph from '../Paragraph/Paragraph'

type ArticleProps = {
  imgSrc: string;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const Article: FC<ArticleProps> = ({
  imgSrc, title, description, buttonText, onClick,
}) => (
  <div className="article">
    <img
      src={imgSrc}
      alt="article"
      className="article__image"
    />
    <Heading text={title} />
    <Paragraph text={description} />
    <Button text={buttonText} onClick={onClick} />
  </div>
)

export default Article
