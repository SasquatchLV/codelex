import './App.scss'
import MiniCalculator from './components/MiniCalculator/MiniCalculator'
import Pizza from './components/AddPizza/AddPizza'
import CubeColor from './components/AddCubeColor/AddCubeColor'
import SomeText from './components/AddSomeText/AddSomeText'
import NumberArray from './components/AddNumberArray/AddNumberArray'
import Cards from './components/AddCards/AddCards'

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
