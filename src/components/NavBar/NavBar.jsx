import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">Productos</Link>
        </li>
        <li>
          <Link to="/carrito" className="navbar-link">Carrito</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
