import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import "./CartView.css";

export const CartView = () => {
  const { cart } = useCart();

  return (
    <section className="cart-container">
      <h1>Tu carrito de compras 🛒</h1>

      {cart.length ? (
        <>
          <CartList />
          <CartSummary />
        </>
      ) : (
        <>
          <p className="cart-empty">El carrito está vacío 😕</p>
          <Link className="btn-checkout" to="/">
            Volver a la tienda
          </Link>
        </>
      )}
    </section>
  );
};
