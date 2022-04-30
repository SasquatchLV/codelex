import './App.scss'
import MiniCalculator from './components/MiniCalculator/MiniCalculator'
import Pizza from './components/Pizza/Pizza'
import CubeColor from './components/CubeColor/CubeColor'
import SomeText from './components/SomeText/SomeText'
import NumberArray from './components/NumberArray/NumberArray'
import Cards from './components/Cards/Cards'

const App = () => (
  <div className="container container-fluid">
    <MiniCalculator />
    <Pizza />
    <CubeColor />
    <SomeText />
    <NumberArray />
    <Cards />
  </div>
)

export default App
