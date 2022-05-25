import './App.scss'
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
// import SinglePokemon from './Pages/SinglePokemon/SinglePokemon'

export function App() {
  const a = []

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/pokemon/:pokename" element={<SinglePokemon />} /> */}

        </Routes>

      </Router>

    </>
  )
}

export default App
