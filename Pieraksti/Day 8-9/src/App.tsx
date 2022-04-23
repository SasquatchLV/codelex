import React from 'react'
import logo from './logo.svg'
import './App.scss'
import Article from './components/Article/Article'
// import Heading from './components/Heading/Heading'
// import Button from './components/Button/Button'
// import Paragraph from './components/Paragraph/Paragraph'
import Hero from './components/Hero/Hero'
import Shapes from './components/Shapes/Shapes'

// Jāuztaisa masīvs, kurš sastāv no 10 objektiem, kuros ir:
// krāsa
// apaļš/kantains
// rādīt/nerādīt
// teksts ja teksts ir rādīt to pa vidu, ja nav tad rādīt "empty" un emty ir slīprakstā

const articles = [
  {
    title: 'Article from array 1',
    description: 'Article description from array 1',
    imgSrc: 'https://picsum.photos/500/200',
    buttonText: 'This is button from array 1',
  },
  {
    title: 'Article from array 2',
    description: 'Article description from array 2',
    imgSrc: 'https://picsum.photos/500/200',
    buttonText: 'This is button from array 2',
  },
]

const inputData = {
  placeholder: 'Full name',
  type: 'text',
  label: 'Full name',
  error: '',
}

const shapesArray = [
  {
    color: 'red',
    rounded: true,
    show: false,
    text: '',
  },
  {
    color: 'blue',
    rounded: false,
    show: true,
    text: 'Square',
  },
  {
    color: 'gren',
    rounded: true,
    show: false,
    text: '',
  },
  {
    color: 'yellow',
    rounded: false,
    show: true,
    text: '',
  },
  {
    color: 'orange',
    rounded: false,
    show: false,
    text: '',
  },
  {
    color: 'gold',
    rounded: false,
    show: true,
    text: 'This is golden',
  },
  {
    color: 'purple',
    rounded: true,
    show: true,
    text: '',
  },
  {
    color: 'coral',
    rounded: false,
    show: true,
    text: 'Coral color',
  },
  {
    color: 'pink',
    rounded: true,
    show: true,
    text: '',
  },
  {
    color: 'lightgreen',
    rounded: false,
    show: true,
    text: 'Texting',
  },
]

const App = () => (
  <div className="container container-fluid">
    <div className="row">
      <div className="col-xs-12">
        <div className="box-container">
          {shapesArray
            .filter(({ show }) => show)
            .map(({
              color, rounded, text,
            }) => (
              <Shapes rounded={rounded} text={text} color={color} />
            ))}
        </div>
      </div>
    </div>

    <div className="row">
      {articles.map((article) => (
        <div className="col-xs-4" key={article.title}>
          <Article
            title={article.title}
            description={article.description}
            imgSrc={article.imgSrc}
            buttonText={article.buttonText}
            onClick={() => { console.log('Article clicked') }}
          />
        </div>
      ))}
    </div>
    <div className="row">
      <div className="col-xs-12">
        <Hero
          heading="This is hero"
          paragraph="This is paragraph"
          buttonText="This is button"
          onClick={() => (
            console.log('Hero')
          )}
        />
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <label>
          {inputData.label}
          <br />
          <input
            type={inputData.type}
            placeholder={inputData.placeholder}
          />
          <br />
          {inputData.error && <span>{inputData.error}</span> }
        </label>
      </div>
    </div>
  </div>
)

export default App
