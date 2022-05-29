import './App.scss'
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'

export function App() {
  const a = []

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
