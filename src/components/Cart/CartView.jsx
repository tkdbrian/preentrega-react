import { useCart } from "../../context/CartContext";
import "./CartView.css";

export const CartView = () => {
  const { cart, addItem, decreaseItem, removeItem, getCartTotal, getTotalItems, checkout } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <p>Agregá productos desde el catálogo.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito ({getTotalItems()} productos)</h2>

      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-img" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>${item.price} c/u</p>
              <p className="cart-item-subtotal">Subtotal: ${item.price * item.quantity}</p>
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => decreaseItem(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addItem(item)}>+</button>
            </div>
            <button
              className="cart-item-remove"
              onClick={() => removeItem(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-footer">
        <p className="cart-total">Total: ${getCartTotal()}</p>
        <button className="btn-checkout" onClick={checkout}>
          Finalizar compra
        </button>
      </div>
    </div>
  );
};
