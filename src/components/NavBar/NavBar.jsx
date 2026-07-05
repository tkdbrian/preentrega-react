import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './NavBar.css'

function NavBar() {
  const { getTotalItems } = useCart()
  const total = getTotalItems()

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">Productos</Link>
        </li>
        <li>
          <Link to="/carrito" className="navbar-link">
            Carrito {total > 0 && <span className="cart-badge">{total}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
