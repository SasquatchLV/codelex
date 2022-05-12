import './App.scss'
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Users from './Pages/Users/Users'
import User from './Pages/Users/User'
import Page404 from './Pages/Page404/Page404'
import Header from './components/Header/Header'

const App = () => (

  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        {/* <Route path="*" element={<Page404 />} /> */}
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />} />

      </Routes>

    </Router>

  </>

)

export default App
