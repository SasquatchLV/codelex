import './header.scss'

const links = [
  {
    className: 'nav-menu__link',
    activeClassName: 'nav-menu__link--active',
    to: '/projects',
    name: 'Projects',
  },
  {
    className: 'nav-menu__link',
    activeClassName: 'nav-menu__link--active',
    to: '/posts',
    name: 'Posts',
  },
  {
    className: 'nav-menu__link',
    activeClassName: 'nav-menu__link--active',
    to: '/contact',
    name: 'Contact',
  },
]

const Navigation = () => (

  <div className="navigation">
    <div className="nav-menu">
      {
        links.map((link) => (
          <a href={link.to} className={link.className} key={link.name}>
            {link.name}
          </a>
        ))
      }
    </div>
  </div>
)

export default Navigation
