import './App.scss'
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'

export function App() {
  const a = []

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/404" element={<Page404 />} /> */}
          {/* <Route path="*" element={<Navigate to="/404" />} /> */}

        </Routes>

      </Router>

    </>
  )
}

export default App
