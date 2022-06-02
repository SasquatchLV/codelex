import './App.scss'
import { useState } from 'react'
import FifthPlanner from './components/FifthPlanner/FifthPlanner'
import ThirdPlanner from './components/ThirdPlanner/ThirdPlanner'

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useState(defaultDark ? 'dark' : 'light')

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="container container-fluid" data-theme={theme}>
      <div className="wrapper">
        <button onClick={switchTheme}>
          Switch to
          {' '}
          {theme === 'light' ? 'dark' : 'light'}
          {' '}
          Theme
        </button>
        <FifthPlanner />
      </div>
    </div>
  )
}

export default App
