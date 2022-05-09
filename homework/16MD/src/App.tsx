import './App.scss'
import {
  BrowserRouter as Router, NavLink, Route, Routes, Navigate,
} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Users from './Pages/Users/Users'
import User from './Pages/Users/User'
import Characters from './Pages/Characters/Characters'
import Character from './Pages/Characters/Character'
import Page404 from './Pages/Page404/Page404'

const App = () => (

  <>
    <Router>
      <header>
        <nav className="flex">
          <NavLink className="link" to="/">Home</NavLink>
          <NavLink className="link" to="/about">About</NavLink>
          {/* <NavLink className="link" to="/users">Users</NavLink> */}
          <NavLink className="link" to="/characters">Characters</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />
        {/* <Route path="*" element={<Page404 />} /> */}
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />} />

      </Routes>

    </Router>
    <video autoPlay muted loop className="bgvideo">
      <source
        src="https://mylivewallpapers.b-cdn.net/wp-content/uploads/Movies/PREVIEW-Rick-N-Morty-Adventures.mp4"
        type="video/mp4"
      />
    </video>

  </>

)

export default App
