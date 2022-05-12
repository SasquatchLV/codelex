import { NavLink } from 'react-router-dom'

const getActiveLinkClass = (isActive: boolean) => (isActive ? 'link link--active' : 'link')

const Header = () => (
  <header>
    <nav className="flex">
      <NavLink className={({ isActive }) => getActiveLinkClass(isActive)} to="/">Home</NavLink>
      <NavLink className={({ isActive }) => getActiveLinkClass(isActive)} to="/users">Users</NavLink>
      <NavLink className={({ isActive }) => getActiveLinkClass(isActive)} to="/about">About</NavLink>
    </nav>
  </header>
)

export default Header
