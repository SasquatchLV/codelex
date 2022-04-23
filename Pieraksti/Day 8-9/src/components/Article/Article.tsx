import React, { FC } from 'react'
import './Article.scss'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import Paragraph from '../Paragraph/Paragraph'

type ArticleProps = {
  imgSrc: string;
}

const Article: FC<ArticleProps> = ({ imgSrc }) => (
  <div className="article">
    <img
      src={imgSrc}
      alt="article"
      className="article__image"
    />
    <Heading text="This is heading" />
    <Paragraph text="This is paragraph" />
    <Button text="This is button" onClick={() => (console.log('I clicked smthing'))} />
  </div>
)

export default Article
