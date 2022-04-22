import React from 'react'
import './css/reset.scss'
import './css/flexboxgrid.scss'
import Navigation from './components/header/header'
import { Button, ButtonArray } from './components/button/button'
import ImageCircle from './components/imageCircle/imageCircle'
import Card from './components/card/card'

const App = () => (
  <div className="container container-fluid">
    <div className="row">
      <div className="col-xs-12">
        <Navigation />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <Button color="blue" name="Button" size="size--sm" />
        <Button color="blue" name="Button" size="size--md" />
        <Button color="blue" name="Button" size="size--lg" />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <Button color="blue" name="Button 1" size="size--sm" />
        <Button color="blue" name="Button 2" size="size--md" />
        <Button color="blue" name="Button 3" size="size--lg" />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <div className="image-container">
          <ImageCircle src="https://source.unsplash.com/random/100×100/?cat" alt="Image" />
          <ImageCircle src="https://source.unsplash.com/random/100×100/?cat" alt="Image" />
          <ImageCircle src="https://source.unsplash.com/random/100×100/?cat" alt="Image" />
          <ImageCircle src="https://source.unsplash.com/random/100×100/?cat" alt="Image" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <div className="card-container">
          <Card title="Title 1" description="Description 2" linkText="Action" link="#" />
          <Card title="Title 2" description="Description 3" linkText="Action" link="#" />
          <Card title="Title 3" description="Description 4" linkText="Action" link="#" />
          <Card title="Title 4" description="Description 4" linkText="Action" link="#" />
          <Card title="Title 5" description="Description 4" linkText="Action" link="#" />
          <Card title="Title 6" description="Description 4" linkText="Action" link="#" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <ButtonArray />
      </div>
    </div>
  </div>
)

export default App
