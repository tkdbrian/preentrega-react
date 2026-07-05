import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./NavBar.css";

export const NavBar = () => {
  const { getTotalItems } = useCart();

  const totalItems = getTotalItems();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">Productos</Link>
        </li>
        <li>
          <Link to="/carrito">
            Carrito
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
