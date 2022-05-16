import './App.scss'
import {
  BrowserRouter as Router, NavLink, Route, Routes, Navigate,
} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Characters from './Pages/Characters/Characters'
import Character from './Pages/Characters/Character'
import Episodes from './Pages/Episodes/Episodes'
import Episode from './Pages/Episodes/Episode'
import Page404 from './Pages/Page404/Page404'

const App = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 1800) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Router>
        <header>
          <nav className="flex">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/characters">Characters</NavLink>
            <NavLink className="link" to="/episodes">Episodes</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Navigate to="/characters" />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<Character />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<Episode />} />
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

      <div className="bgvideo-overlay" />
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <FontAwesomeIcon icon={solid('arrow-up')} />
        </button>
      )}

    </>
  )
}

export default App
