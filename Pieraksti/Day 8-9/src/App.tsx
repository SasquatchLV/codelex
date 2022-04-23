import React from 'react'
import logo from './logo.svg'
import './App.scss'
import Article from './components/Article/Article'
// import Heading from './components/Heading/Heading'
// import Button from './components/Button/Button'
// import Paragraph from './components/Paragraph/Paragraph'
import Hero from './components/Hero/Hero'

const App = () => (
  <div className="container container-fluid">
    <div className="row">
      <div className="col-xs-4">
        <Article
          imgSrc="https://picsum.photos/500/200"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <Hero />
      </div>
    </div>
  </div>
)

export default App
